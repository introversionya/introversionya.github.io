let hours = "00",
  minutes = "00",
  seconds = "00",
  timer = null,
  title = document.querySelector("title"),
  mainTitle = "Anton Demidenko :: Frontend-Developer";

stateTab();

function stateTab() {
  if (document.visibilityState === "hidden") {
    title.textContent = "Сайт загрузился в фоновом режиме...";
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      clearInterval(timer);
      timer = null;
      hours = "00";
      minutes = "00";
      seconds = "00";
      title.textContent = mainTitle;
    } else {
      timerOnTab();
    }
  });
}

function timerOnTab() {
  timer = setInterval(() => {
    ++seconds;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (seconds >= 60) {
      seconds = "00";
      ++minutes;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (minutes >= 60) {
        minutes = "00";
        ++hours;

        if (hours < 10) {
          hours = "0" + hours;
        }
      }
    }

    title.textContent = "Отсутствие: " + hours + "h : " + minutes + "m : " + seconds + "s";

    if (hours >= 24) {
      clearInterval(timer);
      timer = null;
      title.textContent = "Отсутствие: больше 24h";
    }
  }, 1000);
}
