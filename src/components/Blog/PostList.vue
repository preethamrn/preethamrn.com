<template>
  <div class="post-list">
    <h1>{{year}}</h1>
    <PostItem :key="post.node.id" v-for="post in this.postsByYear" :post="post.node" />
  </div>
</template>

<script>
import PostItem from './PostItem';
export default {
  props: ["year", "tag"],
  components: {
    PostItem
  },
  computed: {
    postsByYear() {
      const posts = !this.tag ? this.$page.allPost.edges : this.$page.tag.belongsTo.edges
      return posts.filter((post) => {
        return post.node.date.includes(this.year)
      })
    }
  }
};
</script>

<style scoped="true">
h1 {
  font-size:2em;
  margin:0;
}
.post-list {
  margin-top:20px;
}
</style>
