<template>
  <iframe
    class="youtube-embed"
    :src="src"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  src: String,
});
</script>

<style scoped>
.youtube-embed {
  aspect-ratio: 16/9;
  width: 80%;
}
@media only screen and (max-width: 760px) {
  .youtube-embed {
    width: 100%;
  }
}
</style>
