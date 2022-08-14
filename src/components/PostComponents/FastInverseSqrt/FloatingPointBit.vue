<template>
  <button @click='toggle'>{{value}}</button>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  methods: {
    toggle() {
      this.$emit('input', this.value == 0 ? 1 : 0)
    }
  }
}
</script>
