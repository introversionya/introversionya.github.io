<script setup>
const title = 'introversionya | %s';
const route = useRoute();
const currentUrl = process.client ? ref(window.location.href) : null; // полный URL путь
const ogImageUrl = process.client ? `${window.location.origin}/meta/og-main.png` : null; // путь к meta og:image

// реактивно изменяем og:url при переходе на другой роут
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
    { property: 'og:image', content: ogImageUrl },
    { property: "vk:image", content: ogImageUrl },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "640" },
    { property: "og:image:height", content: "320" },
    { property: "og:image:alt", content: "logo introversionya" },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'introversionya' },
    { property: 'og:url', content: currentUrl },
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
