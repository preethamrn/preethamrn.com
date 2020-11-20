<template>
  <!-- Create new pages: https://gridsome.org/docs/pages/ -->
  <Layout>

    <h3>Projects</h3>
    <Projects />

  </Layout>
</template>

<script>
import Projects from "@/components/Homepage/Projects"
export default {
  components: {
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

<style>

</style>
