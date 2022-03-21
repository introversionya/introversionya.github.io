import * as variable from "./_variables.js";

// Удаляем загрузчик
loader();

export function loader() {
  window.addEventListener("load", () => {
    variable.loader.classList.add("loader--animate");
    variable.loader.addEventListener("animationend", closeLoader);
  });
}

function closeLoader() {
  variable.body.classList.remove("scroll-hidden");
  variable.loader.style.display = "none";
}
