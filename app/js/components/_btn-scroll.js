import * as variable from "./_variables.js";

variable.wrapBtnScroll.addEventListener("click", scrollPageBtn);
window.addEventListener("scroll", checkHideBtn);

checkHideBtn();

// Кнопки вверх/вниз
export function scrollPageBtn(e) {
  if (e.target.closest(".btn-scroll--up")) {
    scrollUp();
    checkHideBtn();
  }

  if (e.target.closest(".btn-scroll--down")) {
    scrollDown();
    checkHideBtn();
  }
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollDown() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth",
  });
}

function checkHideBtn() {
  if (window.pageYOffset > 0) {
    document.querySelector(".btn-scroll--up").classList.remove("btn-scroll--hide");
  } else if (window.pageYOffset === 0) {
    document.querySelector(".btn-scroll--up").classList.add("btn-scroll--hide");
  }

  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    document.querySelector(".btn-scroll--down").classList.add("btn-scroll--hide");
  } else {
    document.querySelector(".btn-scroll--down").classList.remove("btn-scroll--hide");
  }
}








