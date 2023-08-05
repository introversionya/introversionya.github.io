<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheHeaderProgressBar />
        <TheHeaderLogo />
        <TheHeaderNav />
        <TheTheme style="margin-left: auto;" />
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
  background-color: var(--main-bg-color);
  z-index: 1000;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--content-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 1;
}
</style>
