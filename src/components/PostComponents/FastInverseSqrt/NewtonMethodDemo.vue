<template>
  <div>
    <button @click="increment">++</button>
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'NewtonMethodDemo',
  data: () => ({
    value: 100,
  }),
  methods: {
    increment() {
      this.value++
    }
  }
}
</script>

<style>

</style>