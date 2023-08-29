<template>
  <section class="section about">
    <div class="container">
      <div class="section__inner about__inner">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section__inner {
    border-radius: 5px;
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }

  :deep(.section__title) {
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid var(--border-color);
    padding: 10px;
    text-align: center;
    white-space: nowrap;
    background-color: var(--content-substrate-bg-color);
  }

  :deep(.section__content) {
    padding: 10px;
  }
</style>
