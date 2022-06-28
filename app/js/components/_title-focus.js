import * as variable from "./_variables.js";

let hours = "00",
  minutes = "00",
  seconds = "00",
  timer = null;

stateTab();

function stateTab() {
  if (document.visibilityState === "hidden") {
    variable.title.textContent = "Сайт загрузился в фоновом режиме...";
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      clearInterval(timer);
      timer = null;
      hours = "00";
      minutes = "00";
      seconds = "00";
      variable.title.textContent = variable.mainTitle;
    } else {
      timerOnTab();
    }
  });
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

    variable.title.textContent = "Отсутствие: " + hours + "h : " + minutes + "m : " + seconds + "s";

    if (hours >= 24) {
      clearInterval(timer);
      timer = null;
      variable.title.textContent = "Отсутствие: больше 24h";
    }
  }, 1000);
}
