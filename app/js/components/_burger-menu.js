import * as variable from "./_variables.js";

variable.html.addEventListener("click", openBurgerMenu);

function openBurgerMenu(e) {
  if (e.target.closest(".burger-btn")) {
    variable.burgerBtn.classList.toggle("burger-btn--open");
  } else {
    variable.burgerBtn.classList.remove("burger-btn--open");
  }
}
