// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// TODO: checkout gridsome-plugin-flexsearch (eg. https://github.com/jammeryhq/gridsome-starter-articles/blob/master/src/pages/Search.vue)
// TODO: add tags (eg. https://github.com/cossssmin/gridsome-starter-bleda/blob/master/src/templates/Tag.vue)
// TODO: add @noxify/gridsome-plugin-remark-embed to support displaying embeded YouTube, Vimeo, Giphy, etc. in markdown.
// TODO: add gridsome-plugin-tailwindcss (ensure this doesn't interfere with all the themes)
// TODO: add google analytics plugin (use process.env.GRIDSOME_GOOGLE_ANALYTICS_KEY) + SEO metadata into head tag
module.exports = {
  siteName: 'Preetham',
  siteUrl: 'https://www.preethamrn.com/',
  siteDescription: "Preetham's Portfolio, Blog, and Resume.",
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-175017061-1'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './content/redirects/',
        typeName: 'Redirect',
        route: '/:link',
        template: './src/templates/Redirect.vue',
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './content/posts/',
        typeName: 'Post',
        route: '/blog/:link',
        template: './src/templates/Post.vue',
        // NOTE: vue-remark uses plugins on the latest source globally. So we must order Posts at the bottom.
        // https://github.com/gridsome/gridsome/issues/707#issuecomment-536952443
        plugins: [
          ['@gridsome/remark-prismjs', {transformInlineCode: true}]
        ],
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      // TODO: use @microflash/gridsome-plugin-feed for RSS
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: "Preetham's Blog",
          description: "I write about productivity, software development, cubing, and various projects that I'm working on."
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        maxItems: 25,
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
      }
    }
  ],
}
