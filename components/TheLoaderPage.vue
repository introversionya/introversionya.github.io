<script setup>
const textBox = ref('Загрузка...');
</script>

<template>
  <div class="loader-page">
    <div class="container">
      <div class="box">
        <div class="box__item box__item--front">{{ textBox }}</div>
        <div class="box__item box__item--back">{{ textBox }}</div>
        <div class="box__item box__item--left">{{ textBox }}</div>
        <div class="box__item box__item--right">{{ textBox }}</div>
        <div class="box__item box__item--top">{{ textBox }}</div>
        <div class="box__item box__item--bottom">{{ textBox }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader-page {
  position: fixed;
  inset: 47px 0 0 0;
  background-color: var(--main-bg-color);
}

.box {
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg);
  width: var(--cube-size);
  height: var(--cube-size);
  font-size: 10px;
  transform-style: preserve-3d;
  will-change: transform;
  animation: cube-rotation 3s linear infinite;
}

.box__item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px dotted var(--cube-color);
  background-color: var(--black);
  color: var(--cube-color);
}

.box__item--front {
  transform: translateZ(calc(var(--cube-size) / 2));
}

.box__item--back {
  transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2));
}

.box__item--left {
  transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2));
}

.box__item--right {
  transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2));
}

.box__item--top {
  transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2));
}

.box__item--bottom {
  transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2));
}

@keyframes cube-rotation {
  to {
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(180deg);
  }
  from {
    transform: translate(-50%, -50%) rotateX(360deg) rotateY(0deg);
  }
}
</style>
