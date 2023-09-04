<script setup>
const result = ref(0);

onMounted(() => {
  calcProgress();
  window.addEventListener('scroll', calcProgress);
  window.addEventListener('resize', calcProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', calcProgress);
  window.removeEventListener('resize', calcProgress);
});

const calcProgress = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const posY = window.scrollY;
  posY !== 0 && height !== 0 ? (result.value = (posY / height) * 100) : (result.value = 0);
};
</script>

<template>
  <progress
    class="header__progress"
    max="100"
    :value="result"
  ></progress>
</template>

<style lang="scss" scoped>
.header__progress {
  appearance: none;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-moz-progress-bar {
    background-color: var(--progress-bg-color);
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: var(--progress-bg-color);
    border-radius: 5px;
  }
}
</style>
