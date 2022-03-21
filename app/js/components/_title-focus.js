import * as variable from "./_variables.js";

// Включить таймер когда вкладка не в фокусе
let hours = "00",
  minutes = "00",
  seconds = "00";
let timer = null;

isFocusTitle();

export function isFocusTitle() {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      variable.title.textContent = variable.mainTitle;
      clearInterval(timer);
      hours = "00";
      minutes = "00";
      seconds = "00";
    } else {
      timerOnTab();
    }
  });
}

if (document.visibilityState === "hidden") {
  variable.title.textContent = "Сайт загрузился в фоновом режиме...";
}

function timerOnTab() {
  timer = setInterval(() => {
    ++seconds;

    if (seconds <= 9) {
      seconds = "0" + seconds;
    }

    if (seconds >= 60) {
      seconds = "00";
      ++minutes;

      if (minutes <= 9) {
        minutes = "0" + minutes;
      }

      if (minutes >= 60) {
        minutes = "00";
        ++hours;

        if (hours <= 9) {
          hours = "0" + hours;
        }
      }
    }

    variable.title.textContent =
      "Отсутствие: " + hours + "h : " + minutes + "m : " + seconds + "s";

    if (hours >= 24) {
      variable.title.textContent = "Отсутствие: больше 24h";
      clearInterval(timer);
    }
  }, 1000);
}
