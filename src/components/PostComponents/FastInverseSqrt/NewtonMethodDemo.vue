<template>
  <div>
    <div :id='fullID'>
    </div>
    <!-- TODO: include f(y), f'(y), tangent slope line eq, y_n, y_n+1 formulae -->
    <div>x: {{x}}; y{{n}}: {{yn}}</div>
    <button @click='nextIteration'>next</button>
    <button @click='reset'>reset</button>
  </div>
  <!-- TODO: integrate the demo more with the text (possibly include multiple demos? and link them together)
  -->
  <!-- Add a play button that automatically steps through the Newton method -->
</template>

<script>
import functionPlot from 'function-plot'

export default {
  name: 'NewtonMethodDemo',
  props: {
    id: String,
  },
  data: () => ({
    ys: [0.1],
    x: 23,
    
    width: 800,
    height: 500,
  }),
  methods: {
    increment() {
      this.value++
    },
    draw() {
      this.slope = -2*Math.pow(this.yn, -3)
      this.py = 1/Math.pow(this.yn, 2) - this.x
      this.px = this.yn

      functionPlot({
        target: `#${this.fullID}`,
        width: this.width,
        height: this.height,
        // TODO: update the domains to zoom in on the intercept line
        xAxis: { domain: [0, 1] },
        yAxis: { domain: [-40, 40] },
        grid: true,
        data: [
          {
            fn: `1/x^2 - ${this.x}`, // main equation
          }, 
          {
            fn: `${this.slope}*x + ${this.py - this.slope * this.px}`, // tangent line
          },
          {
            x: `${this.px - this.py/this.slope}`, // intercept
            y: `100000t-1`,
            skipTip: true,
            fnType: 'parametric',
            graphType: 'polyline',
          },
        ]
      })
    },
    nextIteration() {
      this.ys.push(this.px - this.py/this.slope)
      this.draw()
    },
    reset() {
      this.ys = [Math.random()*0.3]
      this.x = Math.random() * 49 + 1
      this.draw()
    },
  },
  computed: {
    n() {
      return this.ys.length - 1
    },
    yn() {
      return this.ys[this.n]
    },
    fullID() {
      return `newton-method-demo${this.id}`
    }
  },
  mounted() {
    let contentsBounds = document.body.getBoundingClientRect()
    // TODO: fix this to work better on other screen sizes and magnifications.
    //       contentBounds should match the width of the "container article prose" div
    let ratio = contentsBounds.width / this.width / 1.7
    this.width *= ratio
    this.height *= ratio

    this.draw()
  },
}
</script>

<style>

</style>