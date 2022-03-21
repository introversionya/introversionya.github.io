import * as variable from "./_variables.js";

// Отступ от фиксированной шапки
window.addEventListener("resize", fixSizeBody);

fixSizeBody();

export function fixSizeBody() {
  variable.body.style.paddingTop = variable.header.clientHeight + 1 + "px";
}
