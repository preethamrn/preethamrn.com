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
  nitro: {
    prerender: {
      routes: ["/feed.xml"],
    },
  },
  ignore: ["wip"],
  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode", "nuxt-simple-sitemap"],
  content: {
    markdown: {
      anchorLinks: true,
      remarkPlugins: {
        "remark-math": true,
        "remark-oembed": true,
      },
      // NOTE: using mathml results in better accessibility but adds a lot of console warnings about "Failed to resolve component:"
      // Either Vue will be upgraded to support this in v3.4 or nuxt/content MDC renderer will allow configuring custom Vue compiler options.
      rehypePlugins: { "rehype-katex": { output: "htmlAndMathml" } },
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
      preload: ["c", "cpp", "kotlin", "go", "javascript", "xml", "bash"],
    },
  },
  site: {
    url: "https://www.preethamrn.com",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    autoLastmod: true,
    xslColumns: [
      { label: "URL", width: "70%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
  },
  image: {},
  colorMode: {
    fallback: "dark", // fallback if system color isn't set => default to dark
    classSuffix: "",
  },
});
