<script setup>
import { useThemeStore } from '@/stores/ThemeStore';
const themeStore = useThemeStore();

const { error } = defineProps({ error: Object });

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

onMounted(() => themeStore.init());

useHead(() => ({
  htmlAttrs: { lang: 'ru', "data-theme": themeStore.getTheme, "data-theme-mode": themeStore.getMode },
  title: 'Ошибка...'
}));
</script>

<template>
  <div class="error container">
    <h1 class="error__title">{{ error.statusCode }}</h1>
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
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
  }

  &__btn {
    padding: 10px 15px;
    border: 2px solid var(--border-color);
  }
}
</style>
