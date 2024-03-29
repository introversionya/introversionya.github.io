import { defineStore } from 'pinia';
export const themeKey = 'theme[introversionya.github.io]';
const isDarkTheme = process.client ? window.matchMedia('(prefers-color-scheme: dark)') : null;

export const useThemeStore = defineStore('themeStore', () => {
  // states
  const currentTheme = ref(null);
  const currentMode = ref(null);
  // getters
  const getTheme = computed(() => currentTheme.value);
  const getMode = computed(() => currentMode.value);
  // actions
  const init = () => {
    const { theme, mode } = JSON.parse(localStorage.getItem(themeKey)) ?? {};
    (!theme && !mode) || mode === 'auto' ? systemTheme() : mode === 'custom' ? updateState(theme, mode) : clearLocalStorage();
  };

  const systemTheme = () => {
    isDarkTheme.onchange = systemTheme;
    isDarkTheme.matches ? updateState('dark', 'auto') : updateState('light', 'auto');
  };

  const customTheme = (theme, mode) => {
    isDarkTheme.onchange = null;
    updateState(theme, mode);
  };

  const updateState = (theme, mode) => {
    currentTheme.value = theme;
    currentMode.value = mode;
  };

  const clearLocalStorage = () => {
    localStorage.removeItem(themeKey);
    init();
  };

  watch(
    () => [currentTheme.value, currentMode.value],
    () => localStorage.setItem(themeKey, JSON.stringify({ theme: currentTheme.value, mode: currentMode.value }))
  );

  return { getTheme, getMode, init, systemTheme, customTheme, updateState };
});
