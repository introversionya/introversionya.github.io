<script setup>
const isOpen = ref(false);

onMounted(() => {
  window.addEventListener('click', toggleBurgerMenu);
  window.addEventListener('keydown', closeBurgerMenu);
});

onUnmounted(() => {
  window.removeEventListener('click', toggleBurgerMenu);
  window.removeEventListener('keydown', closeBurgerMenu);
});

const toggleBurgerMenu = (e) => {
  if (e.target.closest('.burger-btn')) {
    isOpen.value = !isOpen.value;
  } else {
    isOpen.value = false;
  }
};

const closeBurgerMenu = (e) => {
  if (e.code === 'Escape') {
    isOpen.value = false;
  }
};
</script>

<template>
  <button
    :class="['burger-btn', { 'burger-btn--open': isOpen }]"
    aria-label="Открыть burger-меню"
  >
    <span class="burger-btn__line"></span>
  </button>
</template>

<style lang="scss" scoped>
.burger-btn {
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 18px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: var(--burger-btn-color);
    transition: background-color 0.2s;
  }

  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    left: 0;
  }

  &__line {
    background-color: var(--burger-btn-color);
    width: 100%;
    height: 2px;
    transition: background-color 0.2s, transform 0.2s;
  }

  &:hover::before,
  &:hover::after,
  &:hover &__line {
    background-color: var(--burger-btn-color-hover);
  }

  &--open &__line {
    transform: scale(0);
  }

  &--open::before {
    animation: burger-top linear 0.3s forwards;
  }

  &--open::after {
    animation: burger-bottom linear 0.3s forwards;
  }

  &--open::before,
  &--open::after {
    background-color: var(--burger-btn-color-hover);
  }
}

@keyframes burger-top {
  0% {
    top: 0;
  }
  50% {
    top: 50%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
}

@keyframes burger-bottom {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50%;
    transform: translateY(50%);
  }
  100% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
}
</style>