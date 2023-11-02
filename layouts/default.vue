<template>
  <div id="__layout">
    <div class="wrapper">
      <TheHeader />
      <main class="main"> <slot /> </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  inset: 0;
  height: fit-content;
  min-height: 100%;
}
</style>
