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
useHead({
  title: "Posts - Preetham",
});

const { data } = await useAsyncData("all-posts", () => decoratedQueryPosts());
const years = computed(() => {
  const posts = data.value;
  return postsPerYear(posts);
});
</script>
