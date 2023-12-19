<template>
  <header class="header">
    <g-link to="/"><h1>👨‍💻 {{siteName}}</h1></g-link>
    <a v-for='(link, index) in links' :key='index' :href='link.href' @click='link.onclick ? link.onclick() : () => {}'>{{link.text}}</a>
    <span class='header side-links'>
      <ClientOnly>
        <ThemeToggle />
      </ClientOnly>
      <a href="https://www.twitter.com/preethamrn" target="_blank"><font-awesome :icon="['fab', 'twitter']" /></a>
    </span>
  </header>
</template>

<script>
export default {
  props: ["siteName", "links"],
  components: {
    ThemeToggle: () => import('@/components/Blog/ThemeToggle')
  }
};
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color:inherit;
      border-bottom: none;
    }

    .side-links {
      width: 7%;
      min-width: 2.5em;
    }
  }
</style>
