<script setup>
import { useIconsStore } from '@/stores/IconsStore';
const iconsStore = useIconsStore().getIcons;

let countId = 0;

const cards = reactive([
  {
    id: countId++,
    link: 'https://github.com/introversionya/starter',
    additionalClass: 'works__item-icon--gulp',
    icon: iconsStore.gulp,
    title: 'Стартер проекта',
    description: 'Gulp + webpack-stream',
  },
  {
    id: countId++,
    link: 'https://introversionya.github.io/calc/app/',
    additionalClass: 'works__item-icon--calc',
    icon: iconsStore.calc,
    title: 'Калькулятор',
    description: 'Vanilla js',
  },
  {
    id: countId++,
    link: 'https://introversionya.github.io/ToDo/app/',
    additionalClass: 'works__item-icon--todo',
    icon: iconsStore.todo,
    title: 'ToDo list',
    description: 'Список дел (Vanilla js)',
  },
  {
    id: countId++,
    link: 'https://introversionya.github.io/free-psd/',
    additionalClass: 'works__item-icon--site',
    icon: iconsStore.site,
    title: 'Верстка макета',
    description: 'Верстка бесплатного макета из сети',
  },
  {
    id: countId++,
    link: 'https://introversionya.github.io/sliderJS/index.html',
    additionalClass: 'works__item-icon--slider',
    icon: iconsStore.slider,
    title: 'Слайдер MVP',
    description: 'Vanilla js',
  },
  {
    id: countId++,
    link: 'https://introversionya.github.io/quiz/',
    additionalClass: 'works__item-icon--quiz',
    icon: iconsStore.quiz,
    title: 'Quiz MVP',
    description: 'Vanilla js',
  },
]);
</script>

<template>
  <NuxtLink
    v-for="card of cards"
    class="works__item"
    :to="card.link"
    :key="card.id"
    target="_blank"
  >
    <div class="works__item-inner">
      <span
        :class="['works__item-icon', card.additionalClass]"
        v-html="card.icon"
      ></span>
      <div class="works__item-wrap">
        <div class="works__item-title">{{ card.title }}</div>
        <p class="works__item-description">{{ card.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
// .works__item {
//   background-color: #2062b3;
//   &:hover {

//   }
// }

// .works__item-inner {

// }

// .works__item-icon {

//   &:deep(svg) {
//     width: 30px;
//     height: 30px;
//   }
// }

// .works__item-wrap {

// }

// .works__item-title {

// }

// .works__item-description {

// }

// .works__item-icon--calc:deep(svg) {
//   path:nth-child(1) {
//     fill: #7b9f2c;
//   }
//   path:nth-child(2) {
//     fill: #000;
//   }
// }

// .works__item-icon--todo:deep(svg path) {
//   fill: #000;
// }

// .works__item-icon--site:deep(svg path) {
//   fill: #2062b3;
// }

// .works__item-icon--slider:deep(svg path) {
//   fill: #404245;
// }

// .works__item-icon--quiz:deep(svg path) {
//   fill: #35b389;
// }

// --------------------------------------------
.works__item {
  display: flex;
  align-items: center;
  width: calc(25% - 8px);
  height: 80px;
  background-color: var(--content-substrate-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 10px;
  transition: border 0.3s, color 0.3s;
  &:hover {
    border: 1px solid transparent;
    color: var(--accent-color);
  }
}

.works__item-inner {
  display: flex;
}

.works__item-icon {
  margin-right: 25px;
  &:deep(svg) {
    width: 35px;
    height: 35px;
  }
}

.works__item-wrap {
  flex-grow: 1;
  overflow: hidden;
}

.works__item-title {
  font-weight: 700;
  margin-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.works__item-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.works__item-icon--calc:deep(svg) {
  path:nth-child(1) {
    fill: #7b9f2c;
  }
  path:nth-child(2) {
    fill: #000;
  }
}

.works__item-icon--todo:deep(svg path) {
  fill: #000;
}

.works__item-icon--site:deep(svg path) {
  fill: #2062b3;
}

.works__item-icon--slider:deep(svg path) {
  fill: #404245;
}

.works__item-icon--quiz:deep(svg path) {
  fill: #35b389;
}
</style>
