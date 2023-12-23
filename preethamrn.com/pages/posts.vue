<template>
  <Layout>
    <Container>
      <section class="posts">
        <PostList v-for="[year, posts] in years" :key="year" :year="year" :posts="posts" />
      </section>
    </Container>
  </Layout>
</template>

<script setup>
const { data } = await useAsyncData("all-posts", () => queryContent("/posts").find());
const posts = data.value;
const yearsMap = {};
// NOTE: manually add "special posts" here which might have custom formatting?
//       Or create dummy .md files in /content which are linked to a concrete Vue.js file.
posts.forEach((post) => {
  const year = new Date(post.date).getUTCFullYear();
  if (!shouldListPost(post)) return;
  if (yearsMap[year] === undefined) yearsMap[year] = [];
  yearsMap[year].push(post);
});
const years = Object.keys(yearsMap)
  .sort((a, b) => {
    return b - a;
  })
  .map((v) => [v, yearsMap[v]]);
</script>
