<template>
  <header class="header">
    <NuxtLink to="/">
      <h1>👨‍💻 {{ siteName }}</h1>
    </NuxtLink>
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.href"
      @click="link.onclick ? link.onclick() : () => {}"
    >
      {{ link.text }}
    </NuxtLink>
    <span class="header side-links">
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
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
    border-bottom: none;
  }

  .side-links {
    width: 7%;
    min-width: 2.5em;
  }
}
</style>
