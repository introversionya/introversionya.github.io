// ----------------------- imports --------------------------------------
import * as variable from "./components/_variables.js";
//import "./components/_user-platform.js"; // Готово (расширить список)
//import "./components/_operating-system-theme.js"; // Готово
import "./components/_title-focus.js"; // Готово
//import "./components/_user-ip.js"; // Готово
import "./components/_scroll-bar.js"; // Готово
//import "./components/_detect-adblock.js"; // Готово (можно улучшить потом)
import "./components/_fix-body.js"; // Готово
import "./components/_resize.js"; // Готово (попробовать переписать без таймаута)
import "./components/_scroll-arrow.js"; // Готово
import "./components/_lazy-load.js"; // Готово
import "./components/_loader.js"; // Готово
import "./components/_theme-toggle-btn.js"; // Готово
import "./components/_burger-menu.js"; // Готово
import "./components/_btn-scroll.js"; // Готово
// ----------------------------------------------------------------------


// Ограничение доступа
access();

function access() {
  // localStorage.setItem("access", true);

  if (!localStorage.getItem("access")) {
    variable.body.style.padding = "0px";
    variable.body.style.fontSize = "24px";
    variable.body.style.display = "flex";
    variable.body.style.alignItems = "center";
    variable.body.style.justifyContent = "center";
    variable.body.style.height = "100vh";
    variable.body.innerHTML = "Доступ закрыт, сайт находится в разработке";
    document.querySelector("script").style.display = "none";
  }
}












