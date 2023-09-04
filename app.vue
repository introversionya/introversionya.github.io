<script setup>
import { useThemeStore, themeKey } from '@/stores/ThemeStore';

const { disableScroll, enableScroll } = useScroll();
const themeStore = useThemeStore();
const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const handleStorage = ({ key, newValue }) => key === themeKey && themeStore.updateState(...Object.values(JSON.parse(newValue)));
const currentUrl = computed(() => process.server ? `${config.linkProduction}${route.fullPath}` : `${window.location.origin}${route.fullPath}`);
const ogImagePath = computed(() => process.server ? `${config.linkProduction}/meta/og-main.png` : `${window.location.origin}/meta/og-main.png`);
const title = 'introversionya | %s';
const isActiveLoaderPage = ref(false);
const visitedPage = [];

// router.beforeEach((to, from, next) => {
//   if (!visitedPage.includes(to.fullPath)) {
//     isActiveLoaderPage.value = true;
//     disableScroll();
//     visitedPage.push(to.fullPath);
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   setTimeout(() => {
//     isActiveLoaderPage.value = false;
//     enableScroll();
//   }, 700);
// });

// router.onError(() => isActiveLoaderPage.value = false);

onMounted(() => {
  themeStore.init();
  window.addEventListener('storage', handleStorage);
  // visitedPage.push(route.fullPath);
});

onUnmounted(() => window.removeEventListener('storage', handleStorage));

useHead(() => ({
  htmlAttrs: { lang: 'ru', prefix: 'og: https://ogp.me/ns#', "data-theme": themeStore.getTheme, "data-theme-mode": themeStore.getMode },
  titleTemplate: title,
  meta: [
    // og
    { property: 'og:title', content: title },
    { property: 'og:description', content: 'Персональный сайт introversionya | %s' },
    { property: 'og:image', content: ogImagePath },
    { property: 'vk:image', content: ogImagePath },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: "Логотип сайта introversionya" },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'introversionya' },
    { property: 'og:url', content: currentUrl },
    // seo
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: 'Персональный сайт веб-разработчика Anton Demidenko[introversionya]. Блог, портфолио, статьи, программирование и все что связано с веб-разработкой' },
    { name: 'keywords', content: 'web, js, vue, spa, blog, portfolio, introversionya, Anton, Demidenko' },
    { name: 'author', content: 'Anton Demidenko[introversionya], yaintroversivnost@gmail.com' },
    { name: 'color-scheme', content: themeStore.getTheme ?? 'light' },
  ],
}));
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage keepalive />
    <TheLoaderPage v-if="isActiveLoaderPage" />
  </NuxtLayout>
</template>
