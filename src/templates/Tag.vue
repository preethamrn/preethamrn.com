<template>
  <Layout>
    <Container>
      <h1>{{ $page.tag }}</h1>
      <ul>
        <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            {{ edge.node.title }}
          </g-link>
        </li>
      </ul>
    </Container>
  </Layout>
</template>


<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    belongsTo(sortBy: "date", order: DESC) {
      edges {
        node {
          ... on Post {
            title
            path
            date
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Container from "@/components/Shared/Container"
export default {
  components: {
    Container,
  },
  metaInfo () {
    return {
      title: this.$page.tag.title + " Tag",
    }
  },
}
</script>
