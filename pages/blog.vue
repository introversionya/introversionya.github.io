<script setup>
useHead(() => ({
  title: 'блог',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
}))
</script>

<template>
  <section class="blog">
    <div class="container">
      <p class="blog__description">Тут пока ничего нет, но скоро появится:)</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  height: calc(100vh - 47px);
}

.blog__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
