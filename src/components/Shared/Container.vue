<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'container',
}
</script>

<style>
.container {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
