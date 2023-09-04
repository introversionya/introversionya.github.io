<script setup>
import { useIconsStore } from '@/stores/IconsStore';
import { useThemeStore } from '@/stores/ThemeStore';
const iconsStore = useIconsStore().getIcons;
const themeStore = useThemeStore();

const isLightCustom = computed(() => themeStore.getTheme === 'light' && themeStore.getMode === 'custom');
const isSystemAuto = computed(() => (themeStore.getTheme === 'dark' || themeStore.getTheme === 'light') && themeStore.getMode === 'auto');
const isDarkCustom = computed(() => themeStore.getTheme === 'dark' && themeStore.getMode === 'custom');
</script>

<template>
  <div
    class="theme"
    aria-label="меню переключения темы сайта"
  >
    <button
      @click="themeStore.customTheme('light', 'custom')"
      aria-label="Кнопка переключения на светлую тему"
      title="Светлая тема"
      :class="['theme__btn', { 'theme__btn--active': isLightCustom }]"
      v-html="iconsStore.light"
    ></button>
    <button
      @click="themeStore.systemTheme"
      aria-label="Кнопка переключения темы на автоматический режим"
      title="Синхронизация с OS"
      :class="['theme__btn', { 'theme__btn--active': isSystemAuto }]"
      v-html="iconsStore.auto"
    ></button>
    <button
      @click="themeStore.customTheme('dark', 'custom')"
      aria-label="Кнопка переключения на темную тему"
      title="Темная тема"
      :class="['theme__btn', { 'theme__btn--active': isDarkCustom }]"
      v-html="iconsStore.dark"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  display: flex;
  column-gap: 15px;
}

.theme__btn {
  &--active {
    cursor: default;
    color: var(--accent-color);
  }

  &:focus-visible:not(.theme__btn--active) {
    color: var(--accent-color);
  }

  &:active:not(.theme__btn--active),
  &:hover:not(.theme__btn--active) {
    color: var(--accent-color);
  }
}

.theme__btn:deep(svg) {
  width: 15px;
  height: 15px;
  fill: currentColor;

  &:not(.theme__btn--active) {
    transition: color 0.3s;
  }
}
</style>
