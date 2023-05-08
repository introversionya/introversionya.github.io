<script setup>
const title = 'introversionya | %s';
const route = useRoute();
const currentUrl = process.client ? ref(window.location.href) : null;

watch(
  () => route.path,
  () => (currentUrl.value = window.location.href)
);

useHead({
  titleTemplate: title,
  meta: [
    { property: 'og:title', content: title },
    { property: 'og:description', content: 'Персональный сайт introversionya | %s' },
    { property: 'og:image', content: '/meta/og-introversionya.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'introversionya' },
    { property: 'og:url', content: currentUrl },
  ],
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss"></style>
