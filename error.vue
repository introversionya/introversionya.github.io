<script setup>
defineProps(['error']);
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>Такой страницы нет</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
