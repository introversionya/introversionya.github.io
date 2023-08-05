<script setup></script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <h1 class="about__title title">Anton Demidenko[introversionya]</h1>
        <div class="about__content">
          <TheAboutCard />
          <TheAboutDescription />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// .about {}

.about__inner {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: var(--content-bg-color);
}

.about__title {
  border-radius: inherit;
  text-align: center;
  padding: 15px 10px;
  white-space: nowrap;
  background-color: var(--main-bg-color);
}

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
