<script setup>
const { error } = defineProps(['error']);
console.clear()

useHead({
  title: 'Ошибка',
});

// definePageMeta({
//   title: 'Ошибка',
// });


// clearError()
// const router = useRouter();

// if (error.statusCode === 404) {
//   // router.push('/404');
//   clearError()
// }
</script>

<template>
  <div>Такой страницы нет:(</div>
  {{ error.statusCode }}
</template>