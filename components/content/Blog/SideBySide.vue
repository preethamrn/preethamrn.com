<template>
  <div class="two-col-container">
    <!-- Left side: fixed width, scroll if overflow -->
    <div class="left-col" :style="{ width: leftWidth }">
      <slot name="left"></slot>
    </div>

    <!-- Right side: takes remaining space -->
    <div class="right-col">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leftWidth: {
    type: String,
    default: '60%' // e.g. "400px", "60%", etc.
  }
})
</script>

<style scoped>
.two-col-container {
  display: flex;
  /* optional gap between columns: */
  /* gap: 1rem; */
}

/* Left column: 
   1. Do not shrink (flex-shrink: 0) so it stays at the assigned width
   2. Overflow scroll so long content doesn't expand container
   3. min-width: 0 helps browsers accurately calculate width in a flex context */
.left-col {
  flex-shrink: 0;
  min-width: 0;
  overflow-x: auto;
  /* horizontal scroll if content is too wide */
  overflow-y: hidden;
  /* optional, or use auto if you want vertical scroll too */
}

/* Right column expands to fill remaining space */
.right-col {
  flex: 1;
  min-width: 0;
  /* prevents squishing if something else overflows */
}

/* On mobile, stack vertically */
@media (max-width: 760px) {
  .two-col-container {
    flex-direction: column;
  }

  /* Let each column be full-width on mobile */
  .left-col,
  .right-col {
    width: 100% !important;
    flex: unset;
    overflow-x: unset;
    /* no forced horizontal scrolling in stacked mode */
  }
}
</style>
