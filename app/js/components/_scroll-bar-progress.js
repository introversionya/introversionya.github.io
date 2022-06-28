import * as variable from "./_variables.js";

window.addEventListener("scroll", scrollBar);

scrollBar();

function scrollBar() {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // высота всей страницы - видимая высота
  const pozY = window.pageYOffset; // кол-во пикселей на которое прокрутили от начала страницы
  variable.headerBar.style.width = ((pozY / height) * 100) + "%";
}
