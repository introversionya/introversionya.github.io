<template>
  <h1>about</h1>
  <NuxtLink
    to="/"
    no-prefetch
    >home</NuxtLink
  >
</template>

<script setup>
useHead({
  title: 'about',
});

definePageMeta({
  title: 'about',
});
</script>
