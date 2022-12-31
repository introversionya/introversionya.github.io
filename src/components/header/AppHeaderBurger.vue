<template>
  <button
    v-tooltip="{ indent: 10, text: 'Открыть меню', position: 'top', isActive: true }"
    @click="btnClickHandler"
    class="burger-btn"
    :class="{ 'burger-btn--open': isOpen }"
    aria-label="Открыть меню"
  >
    <span class="burger-btn__line"></span>
  </button>
</template>

<script>
export default {
  name: "AppHeaderBurger",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    btnClickHandler() {
      this.isOpen = !this.isOpen;
      // if (e.target.closest(".burger-btn")) {
      //   this.isOpen = !this.isOpen;
      // } else {
      //   this.isOpen = false;
      // }
    },
  },
  // mounted() {
  //   document.addEventListener("click", this.openBurger);
  // },
  // destroyed() {
  //   document.removeEventListener("click", this.openBurger);
  // }
};
</script>

<style lang="scss" scoped>
.burger-btn {
  will-change: transform;
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 18px;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--burger-btn-color);
    transition: background-color .2s;
  }

  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    left: 0;
  }

  &__line {
    display: block;
    background-color: var(--burger-btn-color);
    width: 100%;
    height: 2px;
    transition: background-color .2s, transform .2s;
  }

  &:hover::before,
  &:hover::after,
  &:hover &__line {
    background-color: var(--burger-btn-color-hover);
  }

  &--open &__line {
    transform: scale(0);
  }

  &--open::before {
    animation: burger-top linear .3s forwards;
  }

  &--open::after {
    animation: burger-bottom linear .3s forwards;
  }

  &--open::before,
  &--open::after {
    background-color: var(--burger-btn-color-hover);
  }
}

@keyframes burger-top {
  0% {
    top: 0;
  }
  50% {
    top: 50%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
}

@keyframes burger-bottom {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50%;
    transform: translateY(50%);
  }
  100% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
}
</style>