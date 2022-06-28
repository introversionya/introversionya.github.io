import * as variable from "./_variables.js";

window.addEventListener("scroll", checkPosition);
variable.wrapBtnScroll.addEventListener("click", setPosition);

// Проверка позиции
checkPosition();

function checkPosition() {
  // Кнопка вверх
  if (window.pageYOffset > 0) {
    document.querySelector(".btn-scroll--up").classList.remove("btn-scroll--hide");
  } else {
    document.querySelector(".btn-scroll--up").classList.add("btn-scroll--hide");
  }

  // Кнопка вниз
  if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
    document.querySelector(".btn-scroll--down").classList.add("btn-scroll--hide");
  } else {
    document.querySelector(".btn-scroll--down").classList.remove("btn-scroll--hide");
  }
}

// Клик
function setPosition(e) {
  if (e.target.closest(".btn-scroll--up")) return scrollUp();
  if (e.target.closest(".btn-scroll--down")) return scrollDown();
}

// Скролл вверх
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Скролл вниз
function scrollDown() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth",
  });
}
