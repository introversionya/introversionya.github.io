<script setup>
// import { useTestStore } from './stores/testStore';
// const testStore = useTestStore();
const config = useRuntimeConfig();
const route = useRoute();

const title = 'introversionya | %s';
const colorScheme = 'dark';

const currentUrl = process.dev ? ref(`${config.public.linkDevelopment}${route.path}`) : ref(`${config.public.linkProduction}${route.path}`);
const ogImagePath = process.dev ? `${config.public.linkDevelopment}/meta/og-main.png` : `${config.public.linkProduction}/meta/og-main.png`;

watch(
  () => route.path,
  () => (currentUrl.value = window.location.href)
);

useHead({
  htmlAttrs: { lang: 'ru', prefix: 'og: https://ogp.me/ns#', "data-theme": "dark" },
  titleTemplate: title,
  meta: [
    // og
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: 'Персональный сайт introversionya | %s' },
    { hid: 'og:image', property: 'og:image', content: ogImagePath },
    { hid: 'vk:image', property: 'vk:image', content: ogImagePath },
    { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '630' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: "Логотип сайта 'introversionya'" },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:site_name', property: 'og:site_name', content: 'introversionya' },
    { hid: 'og:url', property: 'og:url', content: currentUrl },
    // seo
    { hid: 'robots', name: 'robots', content: 'index, follow' },
    { hid: 'description', name: 'description', content: 'Персональный сайт веб-разработчика Anton Demidenko[introversionya]. Блог, портфолио, статьи, программирование и все что связано с веб-разработкой' },
    { hid: 'keywords', name: 'keywords', content: 'web, js, vue, spa, blog, portfolio, introversionya, Anton, Demidenko' },
    { hid: 'author', name: 'author', content: 'Anton Demidenko[introversionya], yaintroversivnost@gmail.com' },
    // { name: 'color-scheme', content: colorScheme },
  ],
});
</script>

<template>
  <NuxtLayout name="default" />
</template>
