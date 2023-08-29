<template>
  <section class="works">
    <div class="container">
      <div class="works__inner">
        <h2 class="works__title title">Мои работы</h2>
        <div class="works__content"> <TheWorksLink /> </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// .works {}

.works__inner {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: var(--content-bg-color);
}

.works__title {
  border-radius: 5px;
  text-align: center;
  padding: 8px 10px;
  white-space: nowrap;
  background-color: var(--content-substrate-bg-color);
}

.works__content {
  // display: grid;
  // grid-template-columns: repeat(3, 2fr); /* создать три колонки одинаковой ширины */
  // grid-auto-rows: 1fr; /* создать ряды одинаковой высоты */
  // grid-gap: 10px; /* задать отступ между ячейками */
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
}
</style>
