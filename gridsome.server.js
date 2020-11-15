// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // NOTE: use this code to support commiting and deploying even when pages are in progress.
  // Set published to any non-false value. Even undefined or null will work.
  api.onCreateNode(node => {
    if (process.env.NODE_ENV === 'production' && node.internal.typeName === 'Post' && node.published === false) {
      return null
    }
  })
}
