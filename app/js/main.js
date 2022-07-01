// ----------------------- imports --------------------------------------
import "core-js"; // полифилы
import * as variable from "./components/_variables.js"; // Глобальные переменные
import "./components/_loader.js"; // loader
import "./components/_title-focus.js"; // Включить таймер когда вкладка не в фокусе
import "./components/_operating-system-theme.js"; // Тема сайта (!!!сделать ручной режим)
import "./components/_scroll-bar-progress.js"; // Прогресс скролла в шапке сайта
import "./components/_dynamic-padding-body.js"; // Динамически вычисляемый отступ
import "./components/_burger-menu.js"; // Бургер-меню
import "./components/_navigation-btns.js"; // Кнопки прокрутки вверх/вниз
import "./components/_lazy-load.js"; // Ленивая загрузка
import "./components/_screen-size.js"; // При ресайзе показывать ширину и высоту экрана
import "./components/_user-ip.js"; // Получаем ip пользователя
// import "./components/_detect-adblock.js"; // Обнаружение адблок (подумать над логикой)

// import "./components/_detect-platform.js";
// import "./components/_theme-toggle-btn.js";

// ----------------------------------------------------------------------
// * переделать название атрибута тултипа
// tooltip="Темный режим" tooltip-position="buttom"
// data-tooltip data-tooltip-position

// * проверить/поправить бэм, верстку и стили
// * scroll-hidden - дергается сайт(пофиксить)
// * removeEventListener там где возможно
// * проверить дубликат стилей css в консоле браузера
// * зависает таймер на неактивной вкладке (gulp)
// * проверить тормоза
// * проверить работу галп, и др. раннеров во всех проектах


// Ограничение доступа
access();

function access() {
  // localStorage.setItem("access", true);

  if (localStorage.getItem("access") === null) {
    variable.body.style.padding = "0 35px";
    variable.body.style.fontSize = "24px";
    variable.body.style.display = "flex";
    variable.body.style.alignItems = "center";
    variable.body.style.justifyContent = "center";
    variable.body.style.textAlign = "center";
    variable.body.style.height = "100vh";
    variable.body.innerHTML = "Доступ закрыт, сайт находится в разработке";
    document.querySelector("script").style.display = "none";
  }
}
