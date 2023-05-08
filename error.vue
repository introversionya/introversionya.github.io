<script setup>
const { error } = defineProps(['error']);

const handleError = () => {
  clearError({ redirect: '/' });
  console.clear();
};

useHead({
  title: error.message
});
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>{{ error.message }}</h1>
    <button @click="handleError">На главную</button>
  </div>
</template>
