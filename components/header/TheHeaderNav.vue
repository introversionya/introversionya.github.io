<script setup>
const links = reactive([
  { id: 1, href: '#', description: 'Обо мне', isActive: true },
  { id: 2, href: '#', description: 'Мои работы', isActive: false },
  { id: 3, href: '#', description: 'Контакты', isActive: false },
  { id: 4, href: '#', description: 'Блог', isActive: false },
  { id: 5, href: '#', description: 'Заметки', isActive: false },
]);

const navMain = ref(null);
const navExtra = ref(null);
const navExtraMenu = ref(null);
const isActiveNavExtra = ref(false);
const freeSpace = ref(0);

// проверка свободного места справа от навигации
const checkFreeSpace = () => {
  if (!navMain.value.nextElementSibling) {
    freeSpace.value = navMain.value.parentElement.getBoundingClientRect().right - navMain.value.getBoundingClientRect().right;
    // console.log('нет соседей');
  } else if (navMain.value.nextElementSibling.classList.contains('header__nav-extra') && !navMain.value.nextElementSibling.nextElementSibling) {
    freeSpace.value = navMain.value.parentElement.getBoundingClientRect().right - navMain.value.nextElementSibling.getBoundingClientRect().right;
    // console.log('только extra');
  } else if (!navMain.value.nextElementSibling.classList.contains('header__nav-extra')) {
    freeSpace.value = navMain.value.nextElementSibling.getBoundingClientRect().left - navMain.value.getBoundingClientRect().right;
    // console.log('extra нет, но есть сосед');
  } else {
    freeSpace.value = navMain.value.nextElementSibling.nextElementSibling.getBoundingClientRect().left - navMain.value.nextElementSibling.getBoundingClientRect().right;
    // console.log('extra есть + сосед');
  }
};

const transferLink = () => {
  checkFreeSpace();

  const lastLinkNavMain = navMain.value.children[navMain.value.children.length - 1];
  const firstLinkNavExtra = navExtraMenu.value ? navExtraMenu.value.children[0] : null;

  if (freeSpace.value < 30) {
    isActiveNavExtra.value = true;
    nextTick(() => navExtraMenu.value.prepend(lastLinkNavMain));
  }

  if (firstLinkNavExtra && freeSpace.value > firstLinkNavExtra.offsetWidth + 60) {
    navMain.value.append(firstLinkNavExtra);
    navExtraMenu.value.children.length === 0 ? isActiveNavExtra.value = false : null;
  }

  const stop = setTimeout(transferLink, 100);
  freeSpace.value > 30 ? clearTimeout(stop) : null;
};

onMounted(() => {
  transferLink();
  window.addEventListener('resize', transferLink);
});
</script>

<template>
  <nav
    class="header__nav"
    ref="navMain"
  >
    <NuxtLink
      v-for="link of links"
      :class="['header__nav-link', { 'header__nav-link--active': link.isActive }, 'link-underline', { 'link-underline--active': link.isActive }]"
      :key="link.id"
      :to="link.href"
    >
      {{ link.description }}
    </NuxtLink>
  </nav>

  <nav
    class="header__nav-extra"
    ref="navExtra"
    v-if="isActiveNavExtra"
  >
    <button class="header__nav-toggle">
      <span></span>
    </button>
    <div
      class="header__nav-menu"
      ref="navExtraMenu"
    ></div>
  </nav>
</template>

<style lang="scss" scoped>
.header__nav {
  display: flex;
  align-items: center;
  gap: 0 30px;
}

.header__nav-link {
  white-space: nowrap;
  transition: color 0.2s;

  &--active {
    cursor: default;
  }

  &:active:not(.header__nav-link--active),
  &:hover:not(.header__nav-link--active) {
    color: var(--accent-color);
  }
}

.header__nav-extra {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 30px;

  &:focus-within .header__nav-menu,
  &:hover .header__nav-menu {
    visibility: visible;
  }
}

.header__nav-toggle {
  position: relative;
  padding: 10px;

  &::before,
  &::after,
  span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--main-color);
    transition: background-color 0.2s;
  }

  &::before,
  &::after {
    content: '';
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  span {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    right: 0;
  }

  &:focus::before,
  &:focus::after,
  &:focus span,
  &:active::before,
  &:active::after,
  &:active span,
  &:hover::before,
  &:hover::after,
  &:hover span {
    background-color: var(--accent-color);
  }
}

.header__nav-menu {
  display: flex;
  visibility: hidden;
  padding: 5px 10px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);
  border: 1px solid var(--main-color);
  background-color: var(--nav-link-extra-bg-color);
  border-radius: 4px;
  flex-direction: column;
  a {
    width: max-content;
  }
}
</style>
