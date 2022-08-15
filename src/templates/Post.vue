<template>
  <!-- Create new templates: https://gridsome.org/docs/templates/ -->
  <Layout>
    <!-- TODO: get this css from a local file so the CSS doesn't break at runtime -->
    <link v-if='$page.post.usesLatex' rel="stylesheet" href='https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css' integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossorigin="anonymous">
    <Container class="article prose">
      <h1 class="article-title">{{$page.post.title}}</h1>
      <p class="article-date"> {{ $page.post.date}} · <i>{{$page.post.timeToRead}} min read</i></p>
      <VueRemarkContent />
      <hr>
      <g-link class="article-tag" v-for='tag in $page.post.tags' :to='tag.path' :key='tag.id'>&#35;{{tag.title}}</g-link>
      <!-- TODO: recommended posts: https://overflowed.dev/blog/building-a-gridsome-plugin-for-related-posts/ -->
      <p class="article-footer">Written by <a href="https://www.twitter.com/preethamrn">@preethamrn</a>: Software developer at Uber with a degree in CS. Go, Storage, Distributed Systems, Bouldering, Rubik's Cubes. <a href="https://www.github.com/preethamrn">Github</a></p>
    </Container>
  </Layout>
</template>

<script>
import Container from "@/components/Shared/Container"
export default {
  components: {
    Container,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {key: "og:title", name: "og:title", content: this.$page.post.title + " - Preetham"},
        {key: "twitter:title", name: "twitter:title", content: this.$page.post.title + " - Preetham"},
        {key: "og:description", name: "og:description", content: this.$page.post.description},
        {key: "twitter:description", name: "twitter:description", content: this.$page.post.description},
        {key: "og:image", name: "og:image", content: this.thumbnailImage},
        {key: "twitter:image", name: "twitter:image", content: this.thumbnailImage},
      ]
    }
  },
  computed: {
    thumbnailImage () {
      return this.$page.post.thumbnail.src
    }
  },
};
</script>


<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
  post: post (path: $path) {
    id
    path
    title
    description
    thumbnail(width: 720)
    date (format: "D MMMM YYYY")
    usesLatex
    timeToRead
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<style>
  .article {
    margin-top: 15px;
  }
  .article-title {
    margin-bottom:0;
  }
  .article-date {
    color: var(--app-font-color);
    margin-top:0;
    font-size:.8em;
  }
  .article-footer {
    font-size: .8em;
  }
  .article blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  .article table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .article th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }
  .article td {
      border-top: 1px solid #ddd;
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
  }
  .article tr:nth-child(odd) td {
    background-color: #f9f9f9;
  }
  .article img {
    margin:auto;
    width:80%;
    display:block;
    margin:10px auto;
  }
  .article-tag {
    margin-right: 10px;
    border-bottom: none;
    text-decoration: underline;
    font-style: italic;
  }

  .footnote-ref {
    font-size: 0.9em;
    border-bottom: unset;
    text-decoration: underline;
  }
  .footnotes {
    font-size: 0.9em;
  }

  .icon-link {
    margin-left: -25px;
    margin-right: 5px;
    border-bottom: none;
    visibility: hidden;
    transition: visibility 0s linear 300ms, opacity 300ms;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
  }
  h1:hover .icon-link, h2:hover .icon-link, h3:hover .icon-link, h4:hover .icon-link, h5:hover .icon-link, h6:hover .icon-link, .icon-link:hover {
    transition: visibility 0s linear 0ms, opacity 300ms;
    visibility: visible;
  }

  /* prismjs related theming */
  @media only screen and (max-width: 700px) {
    code[class*="language-"], pre[class*="language-"] {
      font-size: 0.8em !important;
      line-height: 1.1 !important;
    }
  }
</style>
