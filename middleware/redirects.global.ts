export default defineNuxtRouteMiddleware((to, from) => {
  const redirects = {
    "/3bldtrainer": "/cubing/3bldtrainer",
    "/algtrainer": "/cubing/algtrainer",
    "/median": "/cubing/median",
    "/stanzsheet": "/twitch-apps/stanzsheet/",
    "/valorant/": "/twitch-apps/valorant/",
    // Add other redirects here
  };

  // TODO: Figure out how to do an actual 301 redirect here. Does this work even when Nuxt doesn't manage the navigateTo page?
  // TODO: Fix the "title" and other header/meta information on these pages.
  const path = to.path;
  if (redirects[path]) {
    return navigateTo(redirects[path]);
  }
});
