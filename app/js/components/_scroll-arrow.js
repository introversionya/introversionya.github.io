import * as variable from "./_variables.js";

// Определим направление скролла и покажем направление стрелкой
let scroll = window.pageYOffset;
let top = null;
let arrowVisible = null;

const scrollUp = document.querySelector(".arrow-up");
const scrollDown = document.querySelector(".arrow-down");

scrollUp.style.top = `${scrollUp.clientHeight + 37 + variable.header.clientHeight + 1}px`;

window.addEventListener("resize", () => {
  scrollUp.style.top = `${scrollUp.clientHeight + 37 + variable.header.clientHeight + 1}px`;
});

window.addEventListener("scroll", scrollShowArrow);

export function scrollShowArrow() {
  if (arrowVisible !== null) {
    clearTimeout(arrowVisible);
  }

  top = window.pageYOffset;

  // Скролл вверх
  if (scroll > top) {
    scrollUp.classList.add("arrow-visable");
    scrollDown.classList.remove("arrow-visable");
  }

  // Скролл вниз
  if (scroll < top) {
    scrollDown.classList.add("arrow-visable");
    scrollUp.classList.remove("arrow-visable");
  }

  arrowVisible = setTimeout(() => {
    scrollUp.classList.remove("arrow-visable");
    scrollDown.classList.remove("arrow-visable");
  }, 500);

  scroll = top;
}
