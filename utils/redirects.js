export const redirects = {
  "/3bldtrainer": "/cubing/3bldtrainer",
  "/algtrainer": "/cubing/algtrainer",
  "/median": "/cubing/median",
  "/stanzsheet": "/twitch-apps/stanzsheet",
  "/valorant": "/twitch-apps/valorant",
  "/pokemondens": "/pokemondens",
  // Add other redirects here
};

// Only include redirects that don't map to itself in order to avoid infinite loop shenanigans
export const indirectRedirects = Object.entries(redirects)
  .filter(([k, v]) => k != v)
  .map(([k, v]) => k);
