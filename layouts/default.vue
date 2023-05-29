<template>
  <div id="__layout">
    <div class="sticky-container">
      <TheHeader />
      <main class="main">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sticky-container {
  position: absolute;
  inset: 0;
}
</style>
