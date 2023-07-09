<script setup>
let countId = 0;

const links = reactive([
  { id: countId++, href: '#', description: 'Обо мне', isActive: true },
  { id: countId++, href: '#', description: 'Мои работы', isActive: false },
  { id: countId++, href: '#', description: 'Блог', isActive: false },
  { id: countId++, href: '#', description: 'Веб-справочник', isActive: false },
]);

const navMain = ref(null);
const navExtra = ref(null);
const navExtraMenu = ref(null);
const isActiveNavExtra = ref(false);
const freeSpace = ref(0);

const checkFreeSpace = () => {
  if (!navMain.value.nextElementSibling) {
    freeSpace.value = navMain.value.parentElement.getBoundingClientRect().right - navMain.value.getBoundingClientRect().right;
  } else if (navMain.value.nextElementSibling.classList.contains('header__nav-extra') && !navMain.value.nextElementSibling.nextElementSibling) {
    freeSpace.value = navMain.value.parentElement.getBoundingClientRect().right - navMain.value.nextElementSibling.getBoundingClientRect().right;
  } else if (!navMain.value.nextElementSibling.classList.contains('header__nav-extra')) {
    freeSpace.value = navMain.value.nextElementSibling.getBoundingClientRect().left - navMain.value.getBoundingClientRect().right;
  } else {
    freeSpace.value = navMain.value.nextElementSibling.nextElementSibling.getBoundingClientRect().left - navMain.value.nextElementSibling.getBoundingClientRect().right;
  }
};

const transferLink = (iteration) => {
  checkFreeSpace();

  const lastLink = navMain.value.children.length ? navMain.value.children[navMain.value.children.length - 1] : null;
  const firstLink = navExtra.value && navExtraMenu.value.children.length ? navExtraMenu.value.children[0] : null;

  if (freeSpace.value < 30 && lastLink) {
    isActiveNavExtra.value = true;
    nextTick(() => navExtraMenu.value.prepend(lastLink));
  }

  if (freeSpace.value > firstLink?.offsetWidth + 60) {
    nextTick(() => navMain.value.append(firstLink));
  }

  nextTick(() => {
    navMain.value.children.length === 0 ? navExtra.value ? navExtra.value.style.marginLeft = '0': null : navExtra.value ? navExtra.value.style.marginLeft = '30px': null;
    navExtra.value && navExtraMenu.value.children.length === 0 ? isActiveNavExtra.value = false : null;
    iteration < links.length ? transferLink(iteration + 1) : null;
  });
};

onMounted(() => {
  transferLink(0);
  window.addEventListener('resize', () => transferLink(0));
});

onUnmounted(() => window.removeEventListener('resize', () => transferLink(0)));
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
    color: var(--accent-color);
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
  visibility: hidden;
  display: flex;
  gap: 10px 0;
  padding: 10px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);
  border: 1px solid var(--main-color);
  background-color: var(--nav-extra-bg-color);
  border-radius: 4px;
  flex-direction: column;
}
</style>
