<template>
  <main>
    <Container>
      <section class="posts">
        <PostList v-for="[year, posts] in years" :key="year" :year="year" :posts="posts" />
      </section>
    </Container>
  </main>
</template>

<script setup>
const { data } = await useAsyncData("all-posts", () => queryContent("/posts").without("body").find());
const years = computed(() => {
  const posts = data.value;
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
});
</script>
