<template>
  <h1 :id="id">
    <a v-if="generate" :href="`#${id}`" class="icon-link"> </a>
    <slot />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>
