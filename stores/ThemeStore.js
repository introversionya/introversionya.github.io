import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', () => {
  const activeTheme = ref(null); // тема, которая используется в данный момент

  return {}
});
