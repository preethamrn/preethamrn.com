<template>
  <div class="side-by-side-container">
    <div class="left-side" :style="{ width: leftWidth }">
      <slot name="left"></slot>
    </div>
    <div class="right-side">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["leftWidth"]);
let leftWidth = "60%";
if (!!props.leftWidth) {
  leftWidth = props.leftWidth;
}
</script>

<style scoped>
.right-side {
  flex-grow: 1;
}
.side-by-side-container {
  display: flex;
}
@media only screen and (max-width: 760px) {
  .side-by-side-container {
    display: unset;
  }
  .left-side {
    width: 100% !important;
  }
  .right-side {
    flex-grow: unset;
  }
}
</style>
