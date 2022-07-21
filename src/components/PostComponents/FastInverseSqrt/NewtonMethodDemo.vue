<template>
  <div id='newton-method-demo'>
  </div>
  <!-- TODO: 
    * show the derivative line, intersection point, and 
    * add a next button that does one more newton iteration
    * add a random button that resets the x0 position
    * rename variables so that it's clearer with the text
    * integrate the demo more with the text (possibly include multiple demos? and link them together)
  -->
</template>

<script>
import functionPlot from 'function-plot'

export default {
  name: 'NewtonMethodDemo',
  data: () => ({
    value: 100,
  }),
  methods: {
    increment() {
      this.value++
    }
  },
  mounted() {
    let contentsBounds = document.body.getBoundingClientRect();
    let width = 800;
    let height = 500;
    let ratio = contentsBounds.width / width / 1.7;
    width *= ratio;
    height *= ratio;
    functionPlot({
      target: "#newton-method-demo",
      width,
      height,
      xAxis: { domain: [0, 1] },
      yAxis: { domain: [-1, 9] },
      grid: true,
      data: [
        {
          fn: "1/nthRoot(x, 2)",
          derivative: {
            fn: "-x^(-3/2)/2",
            updateOnMouseMove: true
          }
        }
      ]
    })
  },
}
</script>

<style>

</style>