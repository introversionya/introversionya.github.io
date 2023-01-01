<script>
export default {
  name: 'AppHeaderNav',
  data() {
    return {
      links: [
        { href: '#', description: 'Обо мне', isActive: true },
        { href: '#', description: 'Навыки', isActive: false },
        { href: '#', description: 'Мои работы', isActive: false },
        { href: '#', description: 'Контакты', isActive: false },
      ],
    };
  },
};
</script>

<template>
  <nav class="header__nav">
    <ul class="header__ul">
      <li
        class="header__li"
        v-for="link in links"
      >
        <router-link
          class="header__link main-hover"
          :class="{ 'header__link--active': link.isActive }"
          :to="link.href"
        >
          {{ link.description }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header__nav {
  margin-right: auto;
}

.header__ul {
  display: flex;
}

.header__li:not(:last-child) {
  margin-right: 30px;
}

.header__link {
  color: var(--header-nav-link-color);
  transition: color 0.2s;
  &:hover {
    color: var(--header-nav-link-hover);
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
