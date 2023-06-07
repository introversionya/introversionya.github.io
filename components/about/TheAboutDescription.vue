<template>
  <div class="about__description">
    <div class="about__text">
      <p class="about__paragraph">Меня зовут Антон Демиденко&nbsp;&mdash; я&nbsp;frontend разработчик.</p>
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
        <li class="about__technologies-item">html</li>
        <li class="about__technologies-item">css</li>
        <li class="about__technologies-item">js</li>
        <li class="about__technologies-item">vue</li>
        <li class="about__technologies-item">nuxt</li>
        <li class="about__technologies-item">git</li>
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

// .about__text {}

// .about__paragraph {}

.about__technologies {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 35px;
}

.about__technologies-title {
  margin-right: 10px;
  font-weight: 600;
  white-space: nowrap;
}

.about__technologies-list {
  display: flex;
  list-style-type: none;
  padding-inline-start: 0;
  gap: 0 10px;
}

.about__technologies-item {
  padding: 5px 10px;
  background-color: var(--about-technologies-item-bg);
  color: var(--about-technologies-item-color);
  overflow: hidden;
  border-radius: 4px;
}

@media screen and (max-width: 960px) {
  .about__technologies {
    margin-top: 25px;
    overflow-x: auto;
  }
}

@media screen and (max-width: 460px) {
  .about__technologies {
    flex-direction: column;
    align-items: flex-start;
  }
  .about__technologies-title {
    margin-bottom: 5px;
  }
}
</style>