<template>
  <NuxtLayout>
    <Container>
      <h1 :v-if="error.statusCode === 404">404 - page not found</h1>
      <p>Oops! That page returns an</p>
      <NuxtImg
        src="/errorsAllTheWayDown.png"
        width="500"
        quality="50"
        alt="error text with a rainbow gradient and shadows creating a pop-out 3d effect"
      />
      <p v-if="newPath">
        You might be looking for <NuxtLink :to="newPath">{{ newPath }}</NuxtLink>
      </p>
      <p v-else><NuxtLink to="/">Go home</NuxtLink></p>
    </Container>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
var newPath = "";

let path = route.path;
if (path.includes("/blog")) newPath = path.replace("/blog", "/posts");

const { error } = defineProps({
  error: Object,
});
console.error(error);
</script>
