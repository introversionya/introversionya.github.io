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
  info.value = window.location.origin + decodeURIComponent(error.url) + ' - адрес не найден'
});

useHead(() => ({
  htmlAttrs: { lang: 'ru', "data-theme": themeStore.getTheme, "data-theme-mode": themeStore.getMode },
  title: error.statusCode === 404 ? 'Страница не найдена...' : null,
}));
</script>

<template>
  <div class="error container" v-if="error.statusCode === 404">
    <h1 class="error__title title">{{ info }}</h1>
    <p class="error__description">404</p>
    <button class="error__btn" @click="handleError">На главную</button>
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &__title {
    padding: 10px 15px;
    background-color: var(--content-substrate-bg-color);
    border-radius: 5px;
    text-align: center;
    line-height: 1.3;
  }

  &__description {
    font-size: 50px;
    line-height: 100%;
    margin: 50px 0;
  }

  &__btn {
    padding: 10px 15px;
    border: 2px solid;
  }
}
</style>