<script setup>
const title = 'introversionya | %s';
const route = useRoute();
const currentUrl = process.client ? ref(window.location.href) : null;

watch(
  () => route.path,
  () => (currentUrl.value = window.location.href)
);

useHead({
  htmlAttrs: { lang: 'ru', prefix: 'og: https://ogp.me/ns#' },
  titleTemplate: title,
  meta: [
    // кодировка
    { charset: 'UTF-8' },
    // og
    { property: 'og:title', content: title },
    { property: 'og:description', content: 'Персональный сайт introversionya | %s' },
    { property: 'og:image', content: '/meta/og.png' },
    { property: "vk:image", content: '/meta/og.png' },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "640" },
    { property: "og:image:height", content: "320" },
    { property: "og:image:alt", content: "logo introversionya" },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'introversionya' },
    { property: 'og:url', currentUrl },
    // seo
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: 'Персональный сайт веб-разработчика Anton Demidenko[introversionya]. Блог, портфолио, статьи, программирование и все что связано с веб-разработкой' },
    { name: 'keywords', content: 'web, js, vue, spa, blog, portfolio, introversionya, Anton, Demidenko' },
    { name: 'author', content: 'Anton Demidenko[introversionya], yaintroversivnost@gmail.com' },
    { name: 'revisit-after', content: '1 day' },
  ]
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss"></style>
