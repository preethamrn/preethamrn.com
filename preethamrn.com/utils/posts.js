export function shouldListPost(post) {
  return !post.unlisted || process.env.NODE_ENV !== "production";
}
