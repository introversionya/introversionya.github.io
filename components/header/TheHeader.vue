<template>
  <header class="header">
    <TheHeaderProgressBar />
    <div class="container">
      <div class="header__inner">
        <TheHeaderLogo />
        <TheHeaderNav />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  font-weight: 500;
  padding: var(--header-padding);
  background-color: var(--content-bg-color);
  z-index: 1000;
}

.header__inner {
  display: flex;
  align-items: center;
}
</style>
