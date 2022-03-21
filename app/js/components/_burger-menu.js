import * as variable from "./_variables.js";

// бургер-меню
variable.body.addEventListener("click", openBurgerMenu);

function openBurgerMenu(e) {
  if (e.target.closest(".burger-btn")) {
    variable.burgerBtn.classList.toggle("burger-btn--open");
  } else {
    variable.burgerBtn.classList.remove("burger-btn--open");
  }
}
