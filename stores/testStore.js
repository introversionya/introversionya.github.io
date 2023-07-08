import { defineStore } from "pinia";

export const useTestStore = defineStore('testStore', () => {
  const myName = ref('Anton');
  const count = ref(0);

  function increment() {
    count.value++
  }

  return { myName, count, increment }
});