<template>
  <div class='newton-method-demo'>
    <div :id='fullID'>
    </div>
    <div style="padding-left: 10px">x: {{x}}; y{{n}}: {{yn}}</div>
    <button @click='nextIteration'>next</button>
    <button @click='reset'>reset</button>
    <button @click='togglePlay'>{{ playingIntervalId ? "pause" : "play" }}</button>
    <div>
      <input type="range" min="1" max="10" v-model="playSpeed">
    </div>
  </div>
  <!-- TODO: integrate the demo more with the text (possibly include multiple demos? and link them together)
  -->
</template>

<script>
import functionPlot from 'function-plot'

const speeds = [10000, 5000, 2000, 1000, 800, 600, 400, 200, 100, 50]

export default {
  name: 'NewtonMethodDemo',
  props: {
    id: String,
  },
  data: () => ({
    ys: [0.1],
    x: 23,
    slope: -2000,
    px: 0.1, py: 77,
    
    width: 750,
    height: 500,

    playingIntervalId: null,
    playSpeed: 7,
  }),
  methods: {
    increment() {
      this.value++
    },
    togglePlay() {
      if (this.playingIntervalId) {
        clearInterval(this.playingIntervalId)
        this.playingIntervalId = null
        return
      }

      this.playingIntervalId = setInterval(() => {
        if (this.ys.length > 2 && Math.abs(this.ys[this.n-1] - this.ys[this.n-2]) < 0.0000001) {
          this.reset()
        } else {
          this.nextIteration()
        }
      }, speeds[this.playSpeed - 1])
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
  watch: {
    playSpeed() {
      if (this.playingIntervalId) {
        this.togglePlay()
        this.togglePlay()
      }
    }
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
    let ratio = contentsBounds.width / this.width / 1.1
    let newWidth = this.width * ratio
    if (newWidth < this.width) {
      this.width = newWidth
      this.height *= ratio
    }

    this.draw()
  },
}
</script>

<style scoped>
.newton-method-demo {
  background: white;
  color: black;
}
</style>