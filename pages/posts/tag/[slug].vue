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
const tagName = route.params.slug;
useHead({
  title: `#${tagName} - Preetham`,
});

const { data } = await useAsyncData(`${tagName}-tag-posts`, () =>
  decoratedQueryPosts({ tags: { $contains: tagName } })
);
const years = computed(() => {
  const posts = data.value;
  return postsPerYear(posts);
});
</script>
