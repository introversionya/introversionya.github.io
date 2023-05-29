<script setup>
const result = ref(0);

onMounted(() => {
  window.addEventListener('scroll', calcProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', calcProgress);
});

const calcProgress = () => {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const posY = window.pageYOffset;

  if (height !== 0 || posY !== 0) result.value = (posY / height) * 100;
  else result.value = 0;
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
  border: none;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  pointer-events: none;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-moz-progress-bar {
    background-color: var(--header-bar-color);
  }

  &::-webkit-progress-value {
    background-color: var(--header-bar-color);
  }
}
</style>
