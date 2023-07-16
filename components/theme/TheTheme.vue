<script setup>
import { useIconsStore } from '@/stores/IconsStore';
import { useThemeStore } from '@/stores/ThemeStore';
const iconsStore = useIconsStore().getIcons;
// --------------------------------------------

const themeKey = 'theme[introversionya.github.io]';

const setTheme = () => {
  if (!localStorage.getItem(themeKey)) {
    // systemTheme();
  } else {
    // установить тему из LS
  }
};

onMounted(() => setTheme());
</script>

<template>
  <div class="theme" aria-label="меню переключения темы сайта">
    <button
      aria-label="Кнопка переключения на светлую тему"
      title="Светлая тема"
      class="theme__btn theme__btn--active"
      v-html="iconsStore.light"
    ></button>
    <button
      aria-label="Кнопка переключения темы на автоматический режим"
      title="Синхронизация с OS"
      class="theme__btn"
      v-html="iconsStore.auto"
    ></button>
    <button
      aria-label="Кнопка переключения на темную тему"
      title="Темная тема"
      class="theme__btn"
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
      transform: scale(0.95);
    }
  }
}

.theme__btn:deep(svg) {
  width: 15px;
  height: 15px;
  fill: currentColor;
  transition: transform 0.2s, color 0.2s;

  &:not(.theme__btn--active) {
    will-change: transform, color;
  }
}
</style>
