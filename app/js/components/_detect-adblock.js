import * as variable from "./_variables.js";

// Проверка наличия адблок
checkAdb();

export function checkAdb() {
  const adbEl = document.createElement("div");
  variable.body.append(adbEl);
  adbEl.textContent = "REKLAMA, AD, ADV, РЕКЛАМА";
  adbEl.classList.add("adb-box", "reklama", "hide-adb", "ad", "adv");
  const adbBox = document.querySelector(".adb-box");

  setTimeout(() => {
    if (adbBox.clientHeight === 0 || adbBox.offsetHeight === 0) {
      variable.headerAdb.setAttribute("tooltip", "Обнаружен adblock!");
      variable.headerAdbIcon.style.opacity = 1;
      adbEl.remove();
    } else {
      variable.headerAdb.setAttribute("tooltip", "adblock не обнаружен");
      adbEl.remove();
    }
  }, 10000);
}