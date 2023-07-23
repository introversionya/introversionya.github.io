<script setup>
import { useThemeStore } from '@/stores/ThemeStore';
const themeStore = useThemeStore();
const { error } = defineProps(['error']);
const info = ref(null);

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

onMounted(() => {
  themeStore.init();
  info.value = window.location.origin + decodeURIComponent(error.url) + '  - неправильный путь :('
});

useHead(() => ({
  htmlAttrs: { lang: 'ru', "data-theme": themeStore.getTheme, "data-theme-mode": themeStore.getMode },
  title: error.statusCode === 404 ? 'Страница не найдена...' : null,
}));
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>{{ info }}</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
