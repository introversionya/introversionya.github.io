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
let freeSpace = 0;
let distance = 0;
let used = 0;

const checkFreeSpace = () => {
  const main = navMain.value;
  const isActiveMain = isActiveNavMain.value;

  const extra = navExtra.value;
  const isActiveExtra = isActiveNavExtra.value;

  if (isActiveMain && isActiveExtra && extra?.nextElementSibling) {
    freeSpace = extra?.nextElementSibling.getBoundingClientRect().left - extra?.getBoundingClientRect().right;
  } else if (isActiveMain && isActiveExtra && !extra?.nextElementSibling) {
    freeSpace = extra?.parentElement.getBoundingClientRect().right - extra?.getBoundingClientRect().right;
  } else if (isActiveMain && !isActiveExtra && !main?.nextElementSibling) {
    freeSpace = main?.parentElement.getBoundingClientRect().right - main?.getBoundingClientRect().right;
  } else if (isActiveMain && !isActiveExtra && main?.nextElementSibling) {
    freeSpace = main?.nextElementSibling.getBoundingClientRect().left - main?.getBoundingClientRect().right;
  } else if (!isActiveMain && isActiveExtra && !extra?.nextElementSibling) {
    freeSpace = extra?.parentElement.getBoundingClientRect().right - extra?.getBoundingClientRect().right;
  } else if (!isActiveMain && isActiveExtra && extra?.nextElementSibling) {
    freeSpace = extra?.nextElementSibling.getBoundingClientRect().left - extra?.getBoundingClientRect().right;
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

const getDistance = () => {
  distance = isActiveNavMain.value
    ? parseInt(getComputedStyle(navMain.value, null).columnGap, 10)
    : isActiveNavExtra.value
    ? parseInt(getComputedStyle(navExtra.value, null).marginLeft, 10)
    : null;
};

const setMarginStyle = () => {
  !isActiveNavMain.value && isActiveNavExtra.value
    ? (navExtra.value.style.margin = '0 var(--header-nav-distance) 0 0')
    : isActiveNavMain.value && isActiveNavExtra.value
    ? (navExtra.value.style.margin = '0 0 0 var(--header-nav-distance)')
    : null;
};

const isActiveNavigations = () => {
  !navMain.value?.children.length ? (isActiveNavMain.value = false) : null;
  !navExtraMenu.value?.children.length ? (isActiveNavExtra.value = false) : null;
};

const transferLink = (iteration) => {
  checkFreeSpace();

  if (lastLinkMain.value && freeSpace < distance) {
    isActiveNavExtra.value = true;
    lastLinkMain.value.location = 'extra';
    used = window.innerWidth;
  }

  if (firstLinkExtra.value && used < window.innerWidth) {
    isActiveNavMain.value = true;
    firstLinkExtra.value.location = 'main';
    used = 0;
  }

  nextTick(() => {
    getDistance();
    setMarginStyle();
    isActiveNavigations();
    iteration <= links.length ? transferLink(iteration + 1) : null;
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
  gap: 15px 0;
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
