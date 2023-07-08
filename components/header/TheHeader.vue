<template>
  <header class="header">
    <TheHeaderProgressBar />
    <div class="container">
      <div class="header__inner">
        <TheHeaderLogo />
        <TheHeaderNav />
        <button class="t">test</button>
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
  background-color: rgb(132, 122, 124);
}

.t {
  margin-left: auto;
}
</style>
