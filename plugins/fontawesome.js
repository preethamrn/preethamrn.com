import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faGithub, faYoutube, faTwitch, faTwitter, faFileAlt, faLink, faEnvelope);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome", FontAwesomeIcon, {});
});
