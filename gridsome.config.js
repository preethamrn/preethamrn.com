// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// TODO: fix gridsome-plugin-feed and @gridsome/plugin-sitemap plugins
// TODO: add google analytics plugin (use process.env.GRIDSOME_GOOGLE_ANALYTICS_KEY) + SEO metadata into head tag
module.exports = {
  siteName: 'Preetham',
  siteUrl: 'https://www.preethamrn.com/',
  siteDescription: "Preetham's Portfolio, Blog, and Resume.",
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './content/posts/',
        typeName: 'Post',
        route: '/blog/:link',
        template: './src/templates/Post.vue',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', {transformInlineCode: true}]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
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
