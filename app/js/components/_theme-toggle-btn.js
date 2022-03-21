import * as variable from "./_variables.js";

// Переключение темы
variable.themeToggle.addEventListener("click", toggleTheme);

export function toggleTheme(e) {
  if (e.target.closest(".theme-toggle__dark")) {
    removeThemeActiveClass();
    e.target.closest(".theme-toggle__dark").classList.add("theme-toggle__btn--active");
  }

  if (e.target.closest(".theme-toggle__auto")) {
    removeThemeActiveClass();
    e.target.closest(".theme-toggle__auto").classList.add("theme-toggle__btn--active");
  }

  if (e.target.closest(".theme-toggle__light")) {
    removeThemeActiveClass();
    e.target.closest(".theme-toggle__light").classList.add("theme-toggle__btn--active");
  }
}

function removeThemeActiveClass() {
  variable.themeToggleBtn.forEach(el => {
    el.classList.remove("theme-toggle__btn--active");
  });
}