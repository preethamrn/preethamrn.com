<template>
  <div class="post-item">
    <span class="date">{{ formatDate(post.date, "d MMMM") }}</span>
    <NuxtLink :to="`/posts/${post.link}`" class="read">{{ post.title }}</NuxtLink>
    <span class="time-to-read"
      ><i>{{ post.timeToRead }} min read</i></span
    >
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    },
  },
};
</script>

<style>
.date {
  margin-right: 10px;
  min-width: 60px;
  display: inline-block;
}
.time-to-read {
  margin-left: 10px;
  color: gray;
  font-size: 0.8em;
}
</style>
