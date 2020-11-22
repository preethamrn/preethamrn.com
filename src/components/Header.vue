<template>
  <header class="header">
    <g-link to="/"><h1>👨‍💻 {{siteName}}</h1></g-link>
    <a v-for='(link, index) in links' :key='index' :href='link.href' @click='link.onclick ? link.onclick() : () => {}'>{{link.text}}</a>
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
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
    display:flex;
    align-items: center;
    justify-content: space-between;
    a {
      color:inherit;
      border-bottom: none;
    }
  }
</style>
