<template>
  <main class="layout-template" role="main">
    <Container>
      <Header siteName="Preetham" :links="links" />
      <!-- TODO: make the header siteName configurable (use a page query or some metaInfo?) -->
    </Container>

    <slot />

    <Container>
      <div id="contact" class="footer">
        <!-- TODO:
  Get notified about new projects:
  Email Address: 
  -->
        <div class="footer-links">
          Follow me:
          <a href="https://www.twitter.com/preethamrn" target="_blank" class="footer-icon">
            <Icon name="mdi:twitter" />
          </a>
          <a href="https://www.youtube.com/channel/UC7tKYiFtH_6HCBD4hh7hTWw" target="_blank" class="footer-icon">
            <Icon name="mdi:youtube" />
          </a>
          <a href="https://www.twitch.com/preethamrn" target="_blank" class="footer-icon">
            <Icon name="mdi:twitch" />
          </a>
          <a href="https://www.github.com/preethamrn" target="_blank" class="footer-icon">
            <Icon name="mdi:github" />
          </a>
          <br />
          To hear about new posts: subscribe to my
          <a target="_blank" href="/feed.xml">RSS Feed</a>
          with a reader like <a target="_blank" href="https://feedly.com/">Feedly</a>
          <br />
          <div>
            &copy; 2023 Preetham Narayanareddy
            <a href="mailto:preetham.narayanareddy@gmail.com" target="_blank" class="footer-icon">
              <Icon name="ph:envelope" />
            </a>
            &nbsp;<a target="_blank" href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>

<script setup>
const links = [
  { href: "/posts", text: "Posts" },
  { href: "/projects", text: "Projects" },
  {
    href: "#contact",
    text: "Contact",
    onclick: () => {
      let elem = document.getElementById("contact");
      if (elem) elem.className += " highlight";
    },
  },
];

useHead({
  htmlAttrs: {
    lang: "en",
  },
  // icons generated using realfavicongenerator.net
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "manifest", href: "/favicons/site.webmanifest" },
    { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#72ed9f" },
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#2b5797" },
    { name: "msapplication-config", content: "/favicons/browserconfig.xml" },
    { name: "theme-color", content: "#333333" },
  ],
  title: "@preethamrn - Preetham",
});
</script>

<style lang="scss">
.light {
  --app-background-color: #ffffff;
  --app-font-color: black;
  --app-highlight-color: rgba(255, 251, 0, 0.5);
}
.dark {
  --app-background-color: #091a28;
  --app-font-color: white;
  --app-highlight-color: rgba(0, 17, 255, 0.541);
}
.sepia {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
  --app-highlight-color: rgba(255, 115, 0, 0.5);
}
body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1.1em;
}

.footer {
  align-items: center;
  margin-top: 60px;
  font-size: 0.8em;
  margin-bottom: 50px;
}
.footer a {
  color: gray;
}
.footer-links .footer-icon {
  margin: 0 4px;
  font-size: 1.2em;
  border-bottom: none;
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
      font-size: 1em;
    }
  }
}

#contact.highlight {
  background-color: var(--app-highlight-color);
}
</style>
