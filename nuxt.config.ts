// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/content", "@nuxt/image"],
  content: {
    markdown: {
      anchorLinks: true,
      remarkPlugins: {
        "remark-math": true,
        "remark-oembed": true,
      },
      rehypePlugins: { "rehype-katex": { output: "html" } },
      tags: {
        highlight: "Highlight",
        "side-by-side": "SideBySide",
        floatingpointdemo: "FloatingPointDemo",
        newtonmethoddemo: "NewtonMethodDemo",
      },
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        sepia: "monokai",
      },
    },
  },
  image: {},
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
