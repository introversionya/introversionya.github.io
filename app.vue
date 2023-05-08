<script setup>
const title = 'introversionya | %s';
const route = useRoute();
const currentUrl = process.client ? ref(window.location.href) : null;
const metaOgUrl = process.client ? `${currentUrl.value}meta/og.png` : null;

watch(
  () => route.path,
  () => (currentUrl.value = window.location.href)
);

onMounted(() => {
  useHead({
    htmlAttrs: { lang: 'ru' },
    titleTemplate: title,
    meta: [
      // кодировка
      { charset: 'UTF-8' },
      // og
      { property: 'og:title', content: title },
      { property: 'og:description', content: 'Персональный сайт introversionya | %s' },
      { property: 'og:image', content: metaOgUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'introversionya' },
      { property: 'og:url', content: currentUrl },
      // seo
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Персональный сайт веб-разработчика Anton Demidenko[introversionya]. Блог, портфолио, статьи, программирование и все что связано с веб-разработкой' },
      { name: 'keywords', content: 'web, js, vue, spa, blog, portfolio, introversionya, Anton, Demidenko' },
      { name: 'author', content: 'Anton Demidenko[introversionya], yaintroversivnost@gmail.com' },
      { name: 'revisit-after', content: '1 day' },
    ],
    link: [{ rel: 'image_src', href: metaOgUrl }],
  });
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss"></style>
