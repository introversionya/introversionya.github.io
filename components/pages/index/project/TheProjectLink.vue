<script setup>
import { useIconsStore } from '@/stores/IconsStore';
const iconsStore = useIconsStore().getIcons;

let countId = 0;

const links = reactive([
  {
    id: countId++,
    url: 'https://github.com/introversionya/starter',
    additionalClass: 'project__item-icon--gulp',
    icon: iconsStore.gulp,
    title: 'Стартер проекта',
    description: 'Gulp + webpack-stream',
  },
  {
    id: countId++,
    url: 'https://introversionya.github.io/calc/app/',
    additionalClass: 'project__item-icon--calc',
    icon: iconsStore.calc,
    title: 'Калькулятор',
    description: 'Vanilla js',
  },
  {
    id: countId++,
    url: 'https://introversionya.github.io/ToDo/app/',
    additionalClass: 'project__item-icon--todo',
    icon: iconsStore.todo,
    title: 'ToDo list',
    description: 'Список дел (Vanilla js)',
  },
  {
    id: countId++,
    url: 'https://introversionya.github.io/free-psd/',
    additionalClass: 'project__item-icon--site',
    icon: iconsStore.site,
    title: 'Верстка',
    description: 'Верстка бесплатного макета из сети',
  },
  {
    id: countId++,
    url: 'https://introversionya.github.io/sliderJS/index.html',
    additionalClass: 'project__item-icon--slider',
    icon: iconsStore.slider,
    title: 'Слайдер MVP',
    description: 'Vanilla js',
  },
  {
    id: countId++,
    url: 'https://introversionya.github.io/quiz/',
    additionalClass: 'project__item-icon--quiz',
    icon: iconsStore.quiz,
    title: 'Quiz MVP',
    description: 'Vanilla js',
  },
]);
</script>

<template>
  <NuxtLink
    v-for="link in links"
    class="project__item"
    :to="link.url"
    :key="link.id"
    target="_blank"
  >
    <div class="project__item-inner">
      <span
        :class="['project__item-icon', link.additionalClass]"
        v-html="link.icon"
      ></span>
      <div class="project__item-wrap">
        <h3 class="project__item-title hidden-text hidden-text--str-one">{{ link.title }}</h3>
        <p class="project__item-description hidden-text hidden-text--str-one">{{ link.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project__item {
  display: flex;
  align-items: center;
  background-color: var(--content-substrate-bg-color);
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px 15px;
  transition: border 0.3s, color 0.3s;

  &:focus-within,
  &:hover {
    border: 1px solid var(--border-color);
    color: var(--accent-color);
  }
}

.project__item-inner {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.project__item-icon {
  margin-right: 15px;
  &:deep(svg) {
    width: 30px;
    height: 30px;
  }
}

// .project__item-wrap {}

.project__item-title {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 14px;
}

// .project__item-description {}

.project__item-icon--gulp:deep(svg) {
  fill: #D93233;
}

.project__item-icon--calc:deep(svg) {
  path:nth-child(1) {
    fill: #7b9f2c;
  }
  path:nth-child(2) {
    fill: #000;
  }
}

.project__item-icon--todo:deep(svg) {
  fill: #c72982;
}

.project__item-icon--site:deep(svg) {
  fill: #2062b3;
}

.project__item-icon--slider:deep(svg) {
  stroke: #32a6ac;
}

.project__item-icon--quiz:deep(svg) {
  path:nth-child(1) {
    fill: #35b389;
  }
  path:nth-child(2) {
    fill: #000;
  }
  path:nth-child(3) {
    fill: #000;
  }
}
</style>
