<template>
  <section class="section project">
    <div class="container">
      <div class="section__inner project__inner">
        <h2 class="section__title project__title title">Мои работы</h2>
        <div class="section__content project__content">
          <TheProjectLink />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 10px;
  }
}

@media (max-width: 980px) {
  .project__content {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 640px) {
  .project__content {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
}
</style>
