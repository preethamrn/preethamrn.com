export default defineNuxtRouteMiddleware((to, from) => {
  // TODO: Figure out how to do an actual 301 redirect here. Does this work even when Nuxt doesn't manage the navigateTo page?
  // TODO: Fix the "title" and other header/meta information on these pages.
  const path = to.path;
  if (redirects[path]) {
    const redirect = redirects[path];
    if (redirect.startsWith("/")) {
      return navigateTo(redirect);
    } else {
      return navigateTo(redirect, { external: true });
    }
  }
});
