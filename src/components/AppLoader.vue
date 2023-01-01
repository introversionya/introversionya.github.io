<template>
  <div class="loader">
    <img class="loader__spinner" src="@/assets/images/loaders/spinner.svg" alt="loader">
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #000;
  z-index: 10000;

  &__spinner {
    position: absolute;
    width: 35px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
