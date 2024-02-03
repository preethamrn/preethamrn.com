<template>
  <div class="post-list">
    <h1>
      <NuxtLink :to="`/posts/year/${year}`">{{ year }}</NuxtLink>
    </h1>
    <PostItem :key="post.link" v-for="post in posts" :post="post" />
  </div>
</template>

<script>
export default {
  props: ["year", "tag", "posts"],
};
</script>

<style scoped="true">
h1 {
  font-size: 2em;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: inherit;
  border-bottom: 0;
}
.post-list {
  margin-top: 20px;
}
</style>
