<template>
  <Layout>
    <Container>
      <section class="posts">
        <PostList v-for="year in years" :key="year" :year="year" />
      </section>
    </Container>
  </Layout>
</template>

<script>
import PostList from "@/components/Blog/PostList";
import Container from "@/components/Shared/Container";

import {shouldListPost} from "@/lib/posts";

export default {
  components: {
    Container,
    PostList,
  },
  metaInfo: {
    title: "Posts"
  },
  computed: {
    years() {
      const years = {}
      const posts = this.$page.allPost.edges
      // NOTE: manually add "special posts" here which might have custom formatting?
      //       Or create dummy .md files in /content which are linked to a concrete Vue.js file.
      posts.forEach((post) => {
        const year = post.node.date.split(" ")[2]
        if (!shouldListPost(post)) return
        years[year] = ""
      })
      return Object.keys(years).sort((a, b) => {
        return b - a
      })
    }
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "MMM D YYYY")
        path
        unlisted
      }
    }
  }
}
</page-query>

<style>
</style>
