import * as variable from "./_variables.js";

// Автоматический режим
setAutoTheme();

function setAutoTheme() {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let valueTheme = null;

  isDarkTheme.onchange = setAutoTheme;

  isDarkTheme.matches ? (valueTheme = "dark") : (valueTheme = "light");
  variable.html.setAttribute("data-theme", valueTheme);
}

// Ручной режим
// код..