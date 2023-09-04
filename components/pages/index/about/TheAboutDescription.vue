<script setup>
let countId = 0;

const technologies = reactive([
  { id: countId++, description: 'html' },
  { id: countId++, description: 'css' },
  { id: countId++, description: 'js' },
  { id: countId++, description: 'vue' },
  { id: countId++, description: 'nuxt' },
  { id: countId++, description: 'git' },
]);
</script>

<template>
  <div class="about__description">
    <div class="about__text">
      <p class="about__paragraph">Меня зовут <strong>Антон Демиденко</strong>&nbsp;&mdash; я&nbsp;frontend разработчик.</p>
      <p class="about__paragraph">Создаю пользовательские интерфейсы для веб-приложений и&nbsp;сайтов.</p>
      <p class="about__paragraph">
        Я&nbsp;постоянно учусь и&nbsp;изучаю новые технологии, чтобы улучшить свои навыки и&nbsp;оставаться в&nbsp;курсе последних тенденций
        в&nbsp;области фронтенд разработки.
      </p>
      <p class="about__paragraph">Я&nbsp;уверен, что мой опыт и&nbsp;знания помогут мне стать ценным членом любой команды фронтенд разработки.</p>
    </div>

    <div class="about__technologies">
      <strong class="about__technologies-title">Мой стек:</strong>
      <ul class="about__technologies-list">
        <li class="about__technologies-item" v-for="technology in technologies" :key="technology.id">
          {{ technology.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about__description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about__text {
  margin-bottom: 15px;
}

.about__technologies {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
}

.about__technologies-title {
  margin-bottom: 10px;
  white-space: nowrap;
}

.about__technologies-list {
  display: flex;
  list-style-type: none;
  padding-inline-start: 0;
  column-gap: 10px;
  overflow-x: auto;
  max-width: 100%;
}

.about__technologies-item {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 3px 10px;
  background-color: var(--content-substrate-bg-color);
}
</style>
