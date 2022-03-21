import * as variable from "./_variables.js";

// Тема в соответствии с OS
getThemeOs();

export function getThemeOs() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    variable.html.setAttribute("data-theme-os", "dark");
  } else {
    variable.html.setAttribute("data-theme-os", "light");
  }

  // Динамическая смена темы
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      variable.html.setAttribute("data-theme-os", `${newColorScheme}`);
      variable.headerTheme.textContent = `Theme: ${variable.html.dataset.themeOs}`;
      if (variable.html.dataset.themeOs === "dark") {
        variable.body.classList.add(`${variable.html.dataset.themeOs}`);
        variable.body.classList.remove("light");
      } else {
        variable.body.classList.add(`${variable.html.dataset.themeOs}`);
        variable.body.classList.remove("dark");
      }
    });

  variable.body.classList.add(`${variable.html.dataset.themeOs}`);
  variable.headerTheme.textContent = `Theme: ${variable.html.dataset.themeOs}`;
}