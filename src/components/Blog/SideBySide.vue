<template>
  <div class="side-by-side-container">
    <div class="left-side">
      <slot name='left'></slot>
    </div>
    <div class="right-side">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<style scoped>
.left-side {
  width: 60%;
}
.right-side {
  flex-grow: 1;
}
.side-by-side-container {
  display: flex;
}
@media only screen and (max-width: 700px) {
  .side-by-side-container {
    display: unset;
  }
  .left-side {
    width: 100%;
  }
  .right-side {
    flex-grow: unset;
  }
}
</style>
