<template>
  <!-- Create new pages: https://gridsome.org/docs/pages/ -->
  <Layout>

    <Container><h3>Projects</h3></Container>
    <Projects />

  </Layout>
</template>

<script>
import Container from "@/components/Shared/Container"
import Projects from "@/components/Homepage/Projects"
export default {
  components: {
    Container,
    Projects,
  },
  data: () => ({}),
  methods: {
  },
  metaInfo: {
    title: '@preethamrn'
  }
}
</script>
