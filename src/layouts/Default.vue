<template>
  <!-- Create new layouts: https://gridsome.org/docs/layouts/ -->
  <main class="layout-template" role="main">
    <Header siteName="Preetham" :links="[
      {href:'/blog', text: 'Blog'},
      {href:'/projects', text: 'Projects'},
      {href:'#contact', text: 'Contact'},
    ]"/> <!-- TODO: make the header siteName configurable (use a page query or some metaInfo?) -->
    <slot/>
    <div id="contact" class="footer">
      <!-- TODO: add contact details
Follow me:

Twitter Instagram RSS
Get in touch via email: preetham.narayanareddy@gmail.com (add an MX redirect in hover)

Get notified about new projects:
Email Address: 

Written by preethamrn (twitter): Software developer at Uber with a degree in CS. Go, Storage, Distributed Systems, Bouldering, Rubik's Cubes. Github

-->
      <div class="footer-links">
        <a target="_blank" href="/sitemap.xml">Sitemap</a>
        <a target="_blank" href="/feed.xml">RSS Feed</a>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
:root {
    --app-background-color: #FFFFFF;
    --app-font-color: black;
}
[theme="dark"] {
    --app-background-color: #091A28;
    --app-font-color: white;
}
[theme="sepia"] {
    --app-background-color: #F1E7D0;
    --app-font-color:#433422;
}
body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size:1.1em;
}
.layout-template {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.footer {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:60px;
  font-size:.8em;
}
.footer a {
  color:gray;
}
.footer-links a {
  margin:0 4px;
}
a {
  border-bottom: 1px solid currentColor;
  color: rgb(32, 201, 151);
  text-decoration: none;
}
a:hover {
  border-bottom-color: currentColor;
  color: #686868;
}
h1 {
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
@media only screen and (max-width: 500px) {
  .footer {
    flex-direction: column;
  }
  .header {
    h1 {
      font-size:1em;
    }
  }
}
</style>
