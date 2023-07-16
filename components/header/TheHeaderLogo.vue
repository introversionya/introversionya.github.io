<script setup>
import { useIconsStore } from '@/stores/IconsStore';
const iconsStore = useIconsStore().getIcons;
</script>

<template>
  <div class="header__logo">
    <NuxtLink
      class="header__logo-link"
      to="/"
      aria-label="На главную"
      title="На главную"
    >
      <div class="header__logo-icon" v-html="iconsStore.home"></div>
      <span class="header__logo-description">Главная</span>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.header__logo {
  position: relative;
  margin-right: var(--header-logo-line-distance);

  &::after {
    pointer-events: none;
    position: absolute;
    content: '';
    top: 4px;
    right: calc(-1 * var(--header-logo-line-distance) / 2);
    bottom: 4px;
    width: 1px;
    background-color: var(--main-color);
  }
}

.header__logo-link {
  display: block;
  transition: color 0.2s;

  &:focus-visible,
  &:hover {
    color: var(--accent-color);
  }
}

.header__logo-icon:deep(svg) {
  margin: 0 auto;
  width: 12px;
  height: 12px;
  fill: currentColor;
}

.header__logo-description {
  display: block;
}
</style>
