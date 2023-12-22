// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    markdown: {
      anchorLinks: true,
      remarkPlugins: {
        "remark-math": true,
        "remark-oembed": true
      },
      rehypePlugins: ["rehype-katex"]
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        sepia: "monokai"
      }
    }
  }
});
