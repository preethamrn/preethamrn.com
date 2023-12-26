<template>
  <iframe
    style="aspect-ratio: 16/9; width: 80%"
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
