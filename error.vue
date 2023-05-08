<script setup>
const { error } = defineProps(['error']);

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

console.log(error); //!!!

useHead({
  title: `Не найдено: ${error.url}`
});
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>Неверный путь: {{ error }}</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
