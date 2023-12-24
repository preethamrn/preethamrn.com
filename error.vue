<template>
  <NuxtLayout>
    <Container>
      <h1 v-if="error.statusCode === 404">404 - page not found</h1>
      <h1 v-else>{{ error.statusCode }} - ERROR</h1>
      <p>Oops! That page returns an</p>
      <NuxtImg src="/errorsAllTheWayDown.png" width="500" quality="50" alt="error" :title="error.message" />
      <p v-if="newPath">
        You might be looking for <NuxtLink :to="newPath">{{ newPath }}</NuxtLink>
      </p>
      <p v-else><NuxtLink to="/">Go home</NuxtLink></p>
      <div v-if="debug">{{ error.message }}</div>
      <div v-if="debug" v-html="error.stack"></div>
    </Container>
  </NuxtLayout>
</template>

<script setup>
const debug = process.env.NODE_ENV !== "production";
const route = useRoute();
var newPath = "";

let path = route.path;
if (path.includes("/blog")) newPath = path.replace("/blog", "/posts");

const { error } = defineProps({
  error: Object,
});
</script>
