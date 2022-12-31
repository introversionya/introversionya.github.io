<template>
  <div class="header__bar" :style="{ width }"></div>
</template>

<script>
export default {
  data() {
    return {
      width: 0
    }
  },
  methods: {
    scrollBar() {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // высота всей страницы - видимая высота
      const posY = window.pageYOffset; // кол-во пикселей на которое прокрутили от начала страницы
      this.width = ((posY / height) * 100) + "%";
    }
  },
  mounted() {
    this.scrollBar();
    document.addEventListener("scroll", this.scrollBar);
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollBar);
  }
}
</script>

<style lang="scss">
.header__bar {
  will-change: transform;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--header-bar-color);
  pointer-events: none;
  transition: width 0.1s;
}
</style>