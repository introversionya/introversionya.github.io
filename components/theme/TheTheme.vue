<script setup>
import { useIconsStore } from '@/stores/IconsStore';
import { useThemeStore } from '@/stores/ThemeStore';
const iconsStore = useIconsStore().getIcons;
const themeStore = useThemeStore();

const isLightCustom = computed(() => themeStore.getTheme === 'light' && themeStore.getMode === 'custom');
const isSystemAuto = computed(() => themeStore.getTheme === 'dark' && themeStore.getMode === 'auto');
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
  gap: 0 15px;
  padding: 5px 10px;
  border-radius: 7px;
  background-color: var(--black);
}

.theme__btn {
  transform-style: preserve-3d;
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
    &:deep(svg) {
      transform: scale(0.9);
    }
  }
}

.theme__btn:deep(svg) {
  width: 15px;
  height: 15px;
  fill: currentColor;

  &:not(.theme__btn--active) {
    will-change: transform, color;
    transition: transform 0.3s linear, color 0.3s linear;
  }
}
</style>
