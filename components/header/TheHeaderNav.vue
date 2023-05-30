<script setup>
const links = reactive([
  { id: 1, href: '#', description: 'Обо мне', isActive: true },
  { id: 2, href: '#', description: 'Мои работы', isActive: false },
  { id: 3, href: '#', description: 'Контакты', isActive: false },
  { id: 4, href: '#', description: 'Блог', isActive: false },
  { id: 5, href: '#', description: 'Заметки', isActive: false },
]);
</script>

<template>
  <nav class="header__nav">
    <ul class="header__ul">
      <li
        class="header__li"
        v-for="link in links"
        :key="link.id"
      >
        <NuxtLink
          :class="['header__link', 'link-hover', { 'header__link--active': link.isActive }]"
          :to="link.href"
        >
          {{ link.description }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header__nav {
  margin-right: auto;
}

.header__ul {
  padding-left: 0;
  display: flex;
}

.header__li {
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 30px;
  }
}

.header__link {
  color: var(--header-nav-link-color);
  transition: color 0.2s;
  &:hover {
    color: var(--header-nav-link-hover-color);
  }
  &--active {
    cursor: default;
    color: var(--header-nav-link-active-color);
    &::before,
    &::after {
      width: 50%;
    }
  }
}
</style>
