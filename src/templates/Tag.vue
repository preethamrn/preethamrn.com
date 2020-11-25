<template>
  <Layout>
    <Container>
      <h1>#{{ $page.tag.title }}</h1>
      <PostList v-for="year in years" :key="year" :year="year" :tag="$page.tag.title" />
    </Container>
  </Layout>
</template>


<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    title
    belongsTo(sortBy: "date", order: DESC) {
      edges {
        node {
          ... on Post {
            id
            title
            timeToRead
            description
            date (format: "MMM D YYYY")
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Container from "@/components/Shared/Container"
import PostList from "@/components/Blog/PostList"
export default {
  components: {
    Container,
    PostList,
  },
  computed: {
    years() {
      const years = {}
      const edges = this.$page.tag.belongsTo.edges
      console.log(edges)
      // NOTE: manually add "special posts" here which might have custom formatting? Or create dummy .md files in /content which are linked to a concrete Vue.js file.
      edges.map((edge) => {
        const year = edge.node.date.split(" ")[2]
        years[year] = ""
      })
      return Object.keys(years).sort((a, b) => {
        return b - a
      })
    }
  },
  metaInfo () {
    return {
      title: this.$page.tag.title + " Tag",
    }
  },
}
</script>
