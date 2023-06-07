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
.about {
  padding: 35px 0;
  color: var(--about-color);
  &__inner {
    padding: 25px 35px;
    background-color: var(--about-inner-bg-color);
    border-radius: 8px;
    overflow: hidden;
  }

  &__title {
    white-space: nowrap;
    text-align: center;
    margin-bottom: 35px;
  }

  &__content {
    display: flex;
    gap: 0 15px;
  }
}

@media screen and (max-width: 960px) {
  .about__content {
    flex-direction: column;
  }
  .about__inner {
    padding: 15px 20px;
  }
}
</style>
