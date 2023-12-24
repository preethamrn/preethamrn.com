// https://nuxt.com/docs/api/configuration/nuxt-config
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
    },
  },
  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],
  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxt/image"],
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
  image: {
    dir: ".nuxt/content-assets/public",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
