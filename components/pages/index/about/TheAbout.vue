<template>
  <TheSectionTemplate>
    <h1 class="section__title title">Anton Demidenko[introversionya]</h1>
    <div class="section__content about__content">
      <TheAboutCard />
      <TheAboutDescription />
    </div>
  </TheSectionTemplate>
</template>

<style lang="scss" scoped>
.about__content {
  display: flex;
  padding: 10px;
  column-gap: 10px;
}

@media (max-width: 768px) {
  .about__content {
    flex-direction: column;
    column-gap: 0;
    row-gap: 10px;
  }
}
</style>
