// https://nuxt.com/docs/api/configuration/nuxt-config
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      nodePolyfills({
        include: ["events"],
        globals: {
          global: true,
        },
      }),
    ],
  },
  ignore: ["wip"],
  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode"],
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
        "youtube-embed": "YoutubeEmbed",
      },
    },
    highlight: {
      theme: {
        default: "github-dark",
        light: "github-light",
        sepia: "solarized-light",
      },
    },
  },
  image: {},
  colorMode: {
    fallback: "dark", // fallback if system color isn't set => default to dark
    classSuffix: "",
  },
});
