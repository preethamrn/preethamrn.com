<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :style="{ width: width ? `${width}` : undefined, height: height ? `${height}` : undefined }"
    :placeholder="img(props.src, { h: 30, width: 30, f: 'webp', blur: 1, q: 80 })"
    format="webp"
    sizes="sm:400 md:500 lg:800 xxl:1200"
    loading="lazy"
  />
  <!-- NOTE: placeholder doesn't work with lazy loading. 
  Might require a nuxt/image upgrade or fixing some other issue with how lazy loading works (try to make it similar to gridsome image) 
  Unrelated, this seems to load 3 images: it first loads the placeholder. Then the actual image (png through imageset). And finally the img src (webp)
  -->
  <!-- TODO: prevent placeholder image loading from causing page contents to jump (ie, don't show page until placeholder is loaded). Or use something like v-lazy-image or nuxt-lazy-load -->
</template>

<script setup>
const img = useImage();
const props = defineProps(["src", "alt", "width", "height"]);
</script>
