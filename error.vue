<script setup>
const { error } = defineProps(['error']);
const url = process.client ? window.location.origin : null;

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

useHead({
  title: error.statusCode === 404 ? 'Страница не найдена...' : null,
});
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>Страница: <strong>{{ url + decodeURIComponent(error.url) }}</strong> не найдена :(</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
