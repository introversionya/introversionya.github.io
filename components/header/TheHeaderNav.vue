<script setup>
let countId = 0;

const links = reactive([
  { id: countId++, href: '#', description: 'Обо мне', isActive: true, location: 'main' },
  { id: countId++, href: '#', description: 'Мои работы', isActive: false, location: 'main' },
  { id: countId++, href: '#', description: 'Блог', isActive: false, location: 'main' },
  { id: countId++, href: '#', description: 'Заметки', isActive: false, location: 'main' },
]);

const linkMain = computed(() => links.filter((item) => item.location === 'main'));
const linkExtra = computed(() => links.filter((item) => item.location === 'extra'));

const navMain = ref(null);
const navExtra = ref(null);
const navExtraMenu = ref(null);
const isActiveNavMain = ref(true);
const isActiveNavExtra = ref(false);
const freeSpace = ref(0);
let distance = null;
let used = 0;

const checkFreeSpace = () => {
  const main = navMain.value;
  const isActiveMain = isActiveNavMain.value;

  const extra = navExtra.value;
  const isActiveExtra = isActiveNavExtra.value;

  if (isActiveMain && isActiveExtra && extra?.nextElementSibling) {
    freeSpace.value = extra?.nextElementSibling.getBoundingClientRect().left - extra?.getBoundingClientRect().right;
  } else if (isActiveMain && isActiveExtra && !extra?.nextElementSibling) {
    freeSpace.value = extra?.parentElement.getBoundingClientRect().right - extra?.getBoundingClientRect().right;
  } else if (isActiveMain && !isActiveExtra && !main?.nextElementSibling) {
    freeSpace.value = main?.parentElement.getBoundingClientRect().right - main?.getBoundingClientRect().right;
  } else if (isActiveMain && !isActiveExtra && main?.nextElementSibling) {
    freeSpace.value = main?.nextElementSibling.getBoundingClientRect().left - main?.getBoundingClientRect().right;
  } else if (!isActiveMain && isActiveExtra && !extra?.nextElementSibling) {
    freeSpace.value = extra?.parentElement.getBoundingClientRect().right - extra?.getBoundingClientRect().right;
  } else if (!isActiveMain && isActiveExtra && extra?.nextElementSibling) {
    freeSpace.value = extra?.nextElementSibling.getBoundingClientRect().left - extra?.getBoundingClientRect().right;
  }
};

const lastLinkMain = computed(() => {
  const mainLinks = links.filter((item) => item.location === 'main');
  return mainLinks[mainLinks.length - 1];
});

const firstLinkExtra = computed(() => {
  const extraLinks = links.filter((item) => item.location === 'extra');
  return extraLinks[0];
});

const transferLink = (iteration) => {
  nextTick(() => checkFreeSpace());

  if (lastLinkMain.value && freeSpace.value < distance) {
    isActiveNavExtra.value = true;
    lastLinkMain.value.location = 'extra';
    nextTick(() => checkFreeSpace());
  }

  if (firstLinkExtra.value && freeSpace.value > distance * 2 + used) {
    isActiveNavMain.value = true;
    used = navExtraMenu.value.children[0].offsetWidth;
    firstLinkExtra.value.location = 'main';
    nextTick(() => checkFreeSpace());
  }

  nextTick(() => (!navMain.value?.children.length ? (isActiveNavMain.value = false) : null));
  nextTick(() => (!navExtraMenu.value?.children.length ? (isActiveNavExtra.value = false) : null));
  nextTick(() =>
    !isActiveNavMain.value && isActiveNavExtra.value
      ? (navExtra.value.style.margin = '0 var(--header-nav-distance) 0 0')
      : isActiveNavMain.value && isActiveNavExtra.value
      ? (navExtra.value.style.margin = '0 0 0 var(--header-nav-distance)')
      : null
  );

  nextTick(() => (iteration < links.length ? transferLink(iteration + 1) : null));
};

onMounted(() => {
  distance = isActiveNavMain.value
    ? parseInt(getComputedStyle(navMain.value, null).columnGap, 10)
    : isActiveNavExtra.value
    ? parseInt(getComputedStyle(navExtra.value, null).marginLeft, 10)
    : null;

  transferLink(0);
  window.addEventListener('resize', () => transferLink(0));
});

onUnmounted(() => window.removeEventListener('resize', () => transferLink(0)));
</script>

<template>
  <nav
    class="header__nav"
    ref="navMain"
    v-if="isActiveNavMain"
  >
    <NuxtLink
      v-for="link of linkMain"
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
    <button
      class="header__nav-toggle"
      aria-label="Кнопка дополнительного меню навигации"
      title="Дополнительное меню навигации"
    >
      <span></span>
    </button>
    <div
      class="header__nav-menu"
      ref="navExtraMenu"
    >
      <NuxtLink
        v-for="link of linkExtra"
        :class="['header__nav-link', { 'header__nav-link--active': link.isActive }, 'link-underline', { 'link-underline--active': link.isActive }]"
        :key="link.id"
        :to="link.href"
      >
        {{ link.description }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header__nav {
  display: flex;
  align-items: center;
  gap: 0 var(--header-nav-distance);
}

.header__nav-link {
  white-space: nowrap;
  transition: color 0.2s;

  &--active {
    cursor: default;
    color: var(--accent-color);
  }

  &:focus-visible:not(.header__nav-link--active),
  &:hover:not(.header__nav-link--active) {
    color: var(--accent-color);
  }
}

.header__nav-extra {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: var(--header-nav-distance);

  &:focus-within .header__nav-menu {
    visibility: visible;
  }

  &:not(:focus-within) .header__nav-menu {
    transition-delay: 0.5s;
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
