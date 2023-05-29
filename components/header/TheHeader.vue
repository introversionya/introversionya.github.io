<template>
  <header class="header">
    <TheHeaderProgressBar />
    <div class="container">
      <div class="header__inner">
        <TheHeaderLogo />
        <TheHeaderNav />
        <TheHeaderTheme />
        <TheHeaderBurger />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 500;
  padding: var(--header-padding);
  background-color: var(--header-bg);
  z-index: 1000;

  &__inner {
    display: flex;
    align-items: center;
  }
}
</style>
