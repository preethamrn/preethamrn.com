// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  // head.link.unshift({
  //   rel: 'stylesheet',
  //   href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  // })

  // head.link.unshift({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  // })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
