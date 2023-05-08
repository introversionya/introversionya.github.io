<script setup>
const { error } = defineProps(['error']);

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

useHead({
  title: `Не найдено: ${error}`
});
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>Неверный путь: {{ error }}</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
