<template>
  <div class="project-item">
    <!-- TODO: Support linking to internal apps in same tab using g-link? -->
    <a :href="project.link" :aria-labelledby="project.name" target="_blank"></a>
    <NuxtImg
      v-if="project.image"
      :src="project.image"
      :alt="project.name + ' Logo'"
      width="100%"
      height="50%"
      fit="contain"
      format="webp"
      sizes="sm:200 md:400"
      :placeholder="[16, undefined, 80, 1]"
    ></NuxtImg>
    <div class="item__overlay">
      <h3 aria-hidden="true">{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="item__body">
        <a v-if="project.code" :href="project.code" target="_blank"><Icon name="mdi:github" /></a>
        <a v-if="project.blog" :href="project.blog" target="_blank"><Icon name="carbon:blog" /></a>
        <a v-if="project.link" :href="project.link" target="_blank"><Icon name="ph:link" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-item",
  props: ["project", "index"],
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
.project-item {
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
  height: stretch;
}

img {
  display: block;
  width: 100%;
}
.item__overlay > h3 {
  margin: 0;
  padding-left: 10px;
  background-color: turquoise;
}
.item__overlay > p,
.item__body {
  margin: 0;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: lighten(turquoise, 15%);
}
.item__body > a {
  margin-right: 14px;
}
</style>
