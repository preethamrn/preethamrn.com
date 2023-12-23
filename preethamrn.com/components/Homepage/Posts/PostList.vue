<template>
  <div class="post-list">
    <h1>{{ year }}</h1>
    <PostItem :key="post.link" v-for="post in this.posts" :post="post" />
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
.post-list {
  margin-top: 20px;
}
</style>
