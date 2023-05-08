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
    { property: 'og:image', content: '/meta/og.png' },
    { property: 'vk:image', content: '/meta/og.png' },
    { property: 'twitter:image', content: '/meta/og.png' },
    { property: "og:image:width", content: '600' },
    { property: "og:image:height", content: '315' },
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
