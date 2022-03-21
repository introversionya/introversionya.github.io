// Прогресс скролл бара
const bar = document.querySelector(".header__bar");
window.addEventListener("scroll", scrollBar);

scrollBar();

export function scrollBar() {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const pozY = window.pageYOffset;
  bar.style.width = `${(pozY / height) * 100}%`;
}
