export function shouldListPost(post) {
  return !post.node.unlisted || process.env.NODE_ENV !== 'production'
}