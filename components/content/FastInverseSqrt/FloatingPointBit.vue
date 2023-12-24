<template>
  <button @click="toggle">{{ bit }}</button>
</template>

<script>
export default {
  props: {
    bit: Number,
  },
  methods: {
    toggle() {
      this.$emit("update:bit", this.bit == 0 ? 1 : 0);
    },
  },
};
</script>
