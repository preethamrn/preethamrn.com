<template>
  <!-- Create new pages: https://gridsome.org/docs/pages/ -->
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      <a href="/blog" rel="noopener">Blog</a>
    </p>

    <v-container><v-row><v-col>test</v-col><v-col cols='10'>test2</v-col></v-row></v-container>
    
  </Layout>
</template>


<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<script>
import {VRow, VCol, VContainer} from 'vuetify/lib'
export default {
  components: {
    VRow,
    VCol,
    VContainer,
  },
  metaInfo: {
    title: '@preethamrn'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
