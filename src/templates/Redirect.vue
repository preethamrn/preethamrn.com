<template></template>

<script>
export default {
  metaInfo() {
    return {
        title: `Redirecting to ${this.$page.redirect.redirect}`,
        meta: [
            { 'http-equiv': 'refresh', content: `0; URL=${this.$page.redirect.redirect}`}
        ],
        link: [
            { rel: 'canonical', href: `http://www.preethamrn.com${this.$page.redirect.redirect}` }
        ]
    }
  }
}
</script>

<page-query>
query Redirect ($path: String!) {
  redirect: redirect (path: $path) {
    redirect
  }
}
</page-query>
