export function shouldListPost(post) {
  return !post.unlisted || process.env.NODE_ENV !== "production";
}

export function postsPerYear(posts) {
  if (!posts) {
    console.error("failed to fetch posts");
    return [];
  }
  const yearsMap = {};
  // NOTE: manually add "special posts" here which might have custom formatting?
  //       Or create dummy .md files in /content which are linked to a concrete Vue.js file.
  posts.forEach((post) => {
    const year = new Date(post.date).getUTCFullYear();
    if (!shouldListPost(post)) return;
    if (yearsMap[year] === undefined) yearsMap[year] = [];
    yearsMap[year].push(post);
  });
  return Object.keys(yearsMap)
    .sort((a, b) => {
      return b - a;
    })
    .map((v) => [v, yearsMap[v].sort((a, b) => (b.date > a.date ? 1 : -1))]);
}

export function decoratedQueryPosts(whereFilter = {}) {
  const unlistedFilter = process.env.NODE_ENV === "production" ? { unlisted: { $ne: true } } : {};
  return queryContent("/posts")
    .where({
      ...whereFilter,
      ...unlistedFilter,
    })
    .without("body")
    .find();
}
