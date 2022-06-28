import * as variable from "./_variables.js";

window.addEventListener("load", closeLoader);

function closeLoader() {
  setTimeout(() => {
    variable.loader.classList.add("block-hidden");
    variable.wrapBtnScroll.classList.remove("block-hidden");
    variable.screen.classList.remove("block-hidden");
    variable.header.classList.remove("block-hidden");
    variable.main.classList.remove("block-hidden");
    variable.footer.classList.remove("block-hidden");
    variable.body.classList.remove("scroll-hidden");

    window.removeEventListener("load", closeLoader);
  }, 300);
}
