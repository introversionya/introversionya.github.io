<template>
  <header class="header">
    <app-header-progress-bar />
    <div class="container">
      <div class="header__inner">
        <app-header-logo />
        <app-header-nav />
        <app-header-theme />
        <app-header-burger />
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderProgressBar from "./AppHeaderProgressBar.vue";
import AppHeaderLogo from "./AppHeaderLogo.vue";
import AppHeaderNav from "./AppHeaderNav.vue";
import AppHeaderTheme from "./AppHeaderTheme.vue";
import AppHeaderBurger from "./AppHeaderBurger.vue";
export default {
  name: "AppHeader",
  components: {
    AppHeaderProgressBar,
    AppHeaderLogo,
    AppHeaderNav,
    AppHeaderTheme,
    AppHeaderBurger,
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--header-padding);
  background-color: var(--header-bg);
  z-index: 1000;
}

.header__inner {
  display: flex;
  align-items: center;
}
</style>