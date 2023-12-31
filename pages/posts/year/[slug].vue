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
const route = useRoute();
const year = parseInt(route.params.slug);
useHead({
  title: `Year ${year} - Preetham`,
});

if (isNaN(year)) {
  navigateTo(`/400?year=${route.params.slug}`, { redirectCode: 400 });
}

const { data } = await useAsyncData(`${year}-year-posts`, () =>
  decoratedQueryPosts({ date: { $lt: (year + 1).toString(), $gt: year.toString() } })
);
const years = computed(() => {
  const posts = data.value;
  return postsPerYear(posts);
});
</script>
