<template>
  <h1>home</h1>
  <NuxtLink
    to="/about"
    no-prefetch
    >about</NuxtLink
  >
</template>

<script setup>
useHead({
  title: 'главная',
});

definePageMeta({
  title: 'главная',
});
</script>
