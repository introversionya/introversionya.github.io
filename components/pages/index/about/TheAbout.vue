<template>
  <section class="section about">
    <div class="container">
      <div class="section__inner about__inner">
        <h1 class="section__title about__title title">Anton Demidenko[introversionya]</h1>
        <div class="section__content about__content">
          <TheAboutCard />
          <TheAboutDescription />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__content {
    display: flex;
    column-gap: 10px;
  }
}

@media (max-width: 768px) {
  .about__content {
    flex-direction: column;
    column-gap: 0;
    row-gap: 10px;
  }
}
</style>
