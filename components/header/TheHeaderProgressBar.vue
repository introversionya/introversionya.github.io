<script setup>
const result = ref(0);

onMounted(() => {
  window.addEventListener('scroll', calcProgress);
  window.addEventListener('resize', calcProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', calcProgress);
  window.removeEventListener('resize', calcProgress);
});

const calcProgress = () => {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const posY = window.scrollY;
  posY !== 0 && height !== 0 ? (result.value = (posY / height) * 100) : (result.value = 0);
};
</script>

<template>
  <progress
    class="header__bar"
    max="100"
    :value="result"
  ></progress>
</template>

<style lang="scss" scoped>
.header__bar {
  appearance: none;
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  pointer-events: none;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-moz-progress-bar {
    background-color: var(--progress-bg-color);
  }

  &::-webkit-progress-value {
    background-color: var(--progress-bg-color);
  }
}
</style>
