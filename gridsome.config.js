// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// TODO: checkout gridsome-plugin-flexsearch (eg. https://github.com/jammeryhq/gridsome-starter-articles/blob/master/src/pages/Search.vue)
// TODO: add tags (eg. https://github.com/cossssmin/gridsome-starter-bleda/blob/master/src/templates/Tag.vue)
// TODO: add gridsome-plugin-tailwindcss (ensure this doesn't interfere with all the themes)
// TODO: add google analytics plugin (use process.env.GRIDSOME_GOOGLE_ANALYTICS_KEY) + SEO metadata into head tag
module.exports = {
  siteName: 'Preetham',
  siteUrl: 'https://www.preethamrn.com/',
  siteDescription: "Preetham's Projects, Posts, and Resume.",
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
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
        route: '/posts/:link',
        template: './src/templates/Post.vue',
        refs: {
          tags: {
            // NOTE: must use linux subsystem to generate these tags.
            typeName: 'Tag',
            route: '/posts/tag/:title',
            create: true,
          },
        },
        // NOTE: vue-remark uses plugins on the latest source globally. So we must order Posts at the bottom.
        // https://github.com/gridsome/gridsome/issues/707#issuecomment-536952443
        plugins: [
          ['@gridsome/remark-prismjs', {transformInlineCode: true}],
          ['remark-footnotes', {inlineNotes: true}], // NOTE: at the moment we're using remark-footnotes@2.0.0 because that is the latest version supported by remark@12. Once gridsome updates to remark@13 we may have to update this plugin.
          ['remark-autolink-headings'], // NOTE: links don't work in development because the content is loaded dynamically
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube', 'Twitter']}], // Add more enabledProviders (eg. Twitch, Gist, Vimeo, Giphy, etc.) when needed.
          ['gridsome-remark-katex', {displayMode: true, output: "mathml"}], // TODO: support output: "htmlAndMathml" for accessibility.
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
          title: "Preetham's Posts",
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
