document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM загружен успешно");
  "use strict";

  // Глобальные переменные
  const titleDefault = "blog by introversion";
  const title = document.getElementsByTagName("title");

  // При скроле запускаем функции
  window.onscroll = function () {
    showActiveSection(); // переключаем контролы
    checkHeadHeight(); // Закрепленный header
    onScroll(); // Рисует стрелки вверх/вниз
  };

  // Получаем элемент по которому кликнули
  function getElemClick() {
    document.addEventListener("click", function (event) {
      console.log(document.elementFromPoint(event.x, event.y));
    });
  }

  // particlesJS.load("particles-js", "assets/particles.json", function () {
  //   // console.log("callback - particles.js config loaded");
  // });

  // $(function () {
  //   $(".logo__img").lazyLoadXT();
  // });

  // Определяем первую загрузку сайта
  checkFirstVisit();

  function checkFirstVisit() {
    if (localStorage.getItem("firstVisit") === null) {
      // console.log('Первая загрузка сайта');
      localStorage.setItem("firstVisit", "yes");
    } else if (localStorage.getItem("firstVisit") === "yes") {
      localStorage.setItem("firstVisit", "no");
      // console.log('Сайт уже загружался ранее');
    } else {
      // console.log('Сайт уже загружался ранее');
    }
  }

  // Темная тема
  const toggleBtn = document.querySelector(".btn-toggleTheme");
  // const linkThemes = document.querySelector('#link-themes');
  toggleBtn.onclick =  function checkStatusTheme() {
    // Меняем значение title, цвет кнопки и css стили
    if (toggleBtn.getAttribute("title") === "Включить темный режим") {
      toggleBtn.setAttribute("title", "Включить светлый режим");
      toggleBtn.classList.remove("light-theme");
      //linkThemes.setAttribute('href', 'css/dark.css'); ДОБАВИТЬ ФАЙЛ dark.css В ПРОЕКТ!!!
    } else {
      toggleBtn.setAttribute("title", "Включить темный режим");
      toggleBtn.classList.add("light-theme");
    }
  }

  // Проверка на адблок
  const adblockBox = document.querySelector(".adblock-box");
  const alertAdb = document.querySelector(".alert-adb");

  checkAdb();

  function checkAdb() {
    if (adblockBox.clientHeight < 1) {
      // console.log("есть адблок");
      localStorage.setItem("Adb", "true");
      infoResultAdblock();
      alertAdb.style.bottom = "calc(50% - 29.2px)";
      alertAdb.style.opacity = "1";
      alertAdb.style.visibility = "visible";
      document.getElementsByTagName("body")[0].classList.add("overlay");
    } else {
      // console.log("нет адблок");
      localStorage.setItem("Adb", "false");
      infoResultAdblock();
      alertAdb.remove();
    }
  }

  // Закрыть окно алерт адблок
  if (document.querySelector(".alert-adb__close") !== null) {
    document
      .querySelector(".alert-adb__close")
      .addEventListener("click", function () {
        localStorage.setItem("alertAdbClose", "true");
        alertAdb.style.transform = "scale(0)";
        document.getElementsByTagName("body")[0].classList.remove("overlay");
      });
  }

  // Не показывать акно адблок повторно после закрытия
  if (localStorage.getItem("alertAdbClose") === "true") {
    alertAdb.remove();
    document.getElementsByTagName("body")[0].classList.remove("overlay");
    // console.log('user уже закрывал окно адблок');
  }

  // Динамический title
  let titleDraw;

  // titledynamic();

  function titledynamic() {
    let i = 0; // Начальный счетчик
    let getTitle = title[0]; // Получаем title
    let textTitle = getTitle.textContent; // Получаем текст title
    let textLength = textTitle.length; // Длина текста
    let arrTextTitle = textTitle.split(""); // Символьный массив

    if (textTitle === textTitle) {
      getTitle.innerHTML = ""; // Очистим title

      titleDraw = setInterval(() => {
        let x = arrTextTitle[i++];
        if (x !== undefined) {
          getTitle.innerHTML += x;
        } else if (textTitle === textTitle) {
          i = 0; // Обнулим счетчик
          getTitle.innerHTML = "";
        }
      }, 500);
    }
  }

  // Меняем title если вкладка не в фокусе
  setInterval(() => {
    if (document.hidden === false) {
      // console.log('в фокусе');
    } else {
      // console.log('не в фокусе');
      title[0].innerHTML = "Возвращайся :(";
    }
  }, 500);

  window.addEventListener("blur", function () {
    // console.log('blur');
    title[0].innerHTML = "";
    clearInterval(titleDraw);
  });

  window.addEventListener("focus", function () {
    // console.log('focus');
    title[0].innerHTML = "";
    title[0].innerHTML = "blog by introversion";
    titledynamic();
  });

  // Закрепленный header
  const head = document.querySelector(".header");
  checkHeadHeight();

  function checkHeadHeight() {
    if (document.documentElement.getBoundingClientRect().top <= -64) {
      // console.log('Шапка скрылась');
      head.classList.add("header--fixed");
    } else {
      head.classList.remove("header--fixed");
    }
  }

  // Создаем и отрисовываем темплайт => (controls)
  controlsBtnCount();

  function controlsBtnCount() {
    const filterSection = document.querySelectorAll(".main > section");
    const controls = document.querySelector(".controls");

    filterSection.forEach(function (el, index, arr) {
      let getSectionClass = el.attributes[0].value;
      controls.innerHTML += `
      <button class="controls__btn" tooltip="${getSectionClass}" tooltip-position="right">${
        index + 1
      }</button>
    `;
    });
  }

  // Присвоим уникальный id-якорь для каждой секции
  setIdSection();

  function setIdSection() {
    const sectionAll = document.querySelectorAll("section");

    for (let i = 0; i < sectionAll.length; i++) {
      sectionAll[i].id = `${"Anchor-" + (i + 1)}`;
    }
  }

  // Определим направление скролла и покажем направление стрелкой
  let scroll = 0;

  function onScroll() {
    let top = window.pageYOffset;
    const scrollUp = document.querySelector(".arrow__up");
    const scrollDown = document.querySelector(".arrow__down");

    if (scroll > top) {
      // console.log('скрол вверх');
      scrollUp.style.opacity = "1";
      setInterval(() => {
        scrollUp.style.opacity = "0";
      }, 500);
    } else if (scroll < top) {
      // console.log('скрол вниз');
      scrollDown.style.opacity = "1";
      setInterval(() => {
        scrollDown.style.opacity = "0";
      }, 500);
    }
    scroll = top;
  }

  // При ресайзе показывать px
  window.onresize = function resizeShow(event) {
    let displayHeight = document.documentElement.clientHeight; // Определим высоту экрана монитора
    let displayWidth = document.documentElement.clientWidth; // Определим ширину экрана монитора
    const resize = document.querySelector(".resize");
    resize.style.opacity = "1";

    resize.innerHTML = `
      <span class="resize__width">Ширина:<span class="resize__num">${
        displayWidth + "px"
      }</span></span>
      <span class="resize__height">Высота:<span class="resize__num">${
        displayHeight + "px"
      }</span></span>
    `;

    setTimeout(() => {
      resize.style.opacity = "0";
    }, 3500);
  };

  // Открыть/закрыть блок "info"
  infoShowToggle();

  function infoShowToggle() {
    const blockInfo = document.querySelector(".info");
    const btnInfo = document.querySelector(".btn--info");
    const btnOpen = document.querySelector(".btn--open");

    btnInfo.addEventListener("click", function () {
      blockInfo.classList.toggle("btn--info-active");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    });

    btnOpen.addEventListener("click", function () {
      blockInfo.classList.toggle("btn--info-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      setTimeout(() => {
        blockInfo.style.display = "block";
      }, 100);
    });
  }

  // Составим портрет пользователя
  let userProfile = null;

  function profile() {
    if (localStorage.getItem("firstVisit") === "yes") {
      userProfile = {
        message: "ключи были присвоены при первой загрузке",
        id: `${localStorage.getItem("userKey")}`,
        ip: `${localStorage.getItem("currentUserIP")}`,
        userAgent: `${localStorage.userAgent}`,
      };
      localStorage.setItem("profile", `${JSON.stringify(userProfile)}`);
    }
  }

  // Выводим информацию - первая или нет загрузка
  checkFirstLoad();

  function checkFirstLoad() {
    let loadTwo = document.querySelector(".first-load");

    // Генерация уникального id пользователя
    let id = (10 * 15 * Math.random() * 10) / 2 + 47 * Math.random();
    let userIdKey =
      (id.toFixed(0) *
        id.toFixed(0) *
        (id.toFixed(0) * id.toFixed(0)) *
        (id.toFixed(0) * id.toFixed(0) * (id.toFixed(0) * id.toFixed(0)))) /
      1000000000;
    // console.log('userIdKey ' + userIdKey.toFixed(0));

    if (localStorage.getItem("firstVisit") === "yes") {
      loadTwo.innerHTML = "Yes";
      // Добавим уникальный id в хранилище
      localStorage.setItem("userKey", `${userIdKey.toFixed(0)}`);
    } else {
      loadTwo.innerHTML = "No";
    }
  }

  // Выводим время за которое загрузился сайт
  loadTime();

  function loadTime() {
    let time = performance.now();
    document.querySelector(".time").innerHTML = time.toFixed(0) + "ms";
  }

  // Выводим результат проверки на наличие адблок
  function infoResultAdblock() {
    const adbInfoOut = document.querySelector(".adb-info");

    if (localStorage.getItem("Adb") === "true") {
      adbInfoOut.innerHTML = "Yes";
    } else {
      adbInfoOut.innerHTML = "No";
    }
  }

  // Выводим информацию о localStorage
  // getInfoStorage();

  // function getInfoStorage() {
  //   const infoStorage = document.querySelector('.info-storage');

  // }

  // Выводим user agent
  getUserAgent();

  function getUserAgent() {
    const idBrowser = document.querySelector(".user-agent");
    let userAgent = navigator.userAgent;

    if (userAgent.indexOf("Firefox") > -1) {
      idBrowser.innerHTML = "Firefox";
    } else if (userAgent.indexOf("Opera") > -1) {
      idBrowser.innerHTML = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      idBrowser.innerHTML = "IE";
    } else if (userAgent.indexOf("Edg") > -1) {
      idBrowser.innerHTML = "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      idBrowser.innerHTML = "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      idBrowser.innerHTML = "Safari";
    } else {
      idBrowser.innerHTML = "unknown";
    }

    idBrowser.style.cursor = "pointer";
    idBrowser.setAttribute("title", `${userAgent}`);
    localStorage.setItem("userAgent", `${userAgent}`);
  }

  // Выводим информацию о времени последней сессии
  sessionTime();

  function sessionTime() {
    const sessionTime = document.querySelector(".session-time");
    let count = 0;

    let hour = 0;
    let minutes = 0;
    let seconds;

    let timeInterval = setInterval(() => {
      count = count + 1;
      if (count === 60) {
        count = 0;
        minutes = minutes + 1;
      } else if (minutes === 60) {
        minutes = 0;
        hour = hour + 1;
      } else if (hour === 24) {
        clearInterval(timeInterval);
      }
      seconds = count;

      let fullTime = hour + "h " + minutes + "m " + seconds + "s";
      sessionTime.innerHTML = fullTime;

      if (hour === 24) {
        sessionTime.innerHTML = "Больше 24 часов";
      }
    }, 1000);
  }

  // Получим ip
  let ipAddressUser;

  getIp();

  function getIp() {
    const ip = document.querySelector(".ip");

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then(function (json) {
        ipAddressUser = json;
        ip.innerHTML = ipAddressUser;
      });

    setTimeout(() => {
      // запишем ip в хранилище
      if (ipAddressUser !== undefined) {
        localStorage.setItem("currentUserIP", `${ipAddressUser}`);
      }

      if (ip.textContent !== ipAddressUser) {
        ip.innerHTML = "Не удалось получить IP";
        ip.style.cursor = "pointer";
        ip.setAttribute("title", "Для корректной работы выключите адблок");
      } else {
        ip.style.cursor = "pointer";
        ip.setAttribute("title", "api ipify");
      }
      profile();
    }, 5000);
  }

  // Запишем в хранилище ключ = последнему ip
  if (localStorage.getItem("currentUserIP") === null) {
    // console.log('null');
  } else {
    let last = localStorage.getItem("currentUserIP");
    localStorage.setItem("lastUserIP", `${last}`);
  }

  // Сравним ip
  if (localStorage.getItem("currentUserIP") !== null) {
    setTimeout(() => {
      if (
        localStorage.getItem("currentUserIP") !==
        localStorage.getItem("lastUserIP")
      ) {
        console.log("Вы сменили ip?");
        // console.log(userProfile);
        const ip = document.querySelector(".ip");

        let lastIpTemp = localStorage.getItem("lastUserIP");

        const template = `
        <button title="Текущий ip не совпадает с тем, что был в последний раз: ${lastIpTemp} " style="
          margin-left: 5px;
          color: blue;
          background-color: transparent;
          border: 1px solid;
          cursor: pointer;
        ">i
      </button>`;

        ip.innerHTML = `${localStorage.getItem("currentUserIP")}` + template;
      }
    }, 10000);
  }

  // При скролле переключаем контролы
  showActiveSection();

  function showActiveSection() {
    // Элемент в зоне видимости => elementFromPoint(x, y)   "y" => вертикаль

    let pozY = document.documentElement.clientHeight / 2; // target на центре экрана
    let pozX = document.documentElement.clientWidth / 2; // target на центре экрана

    let item = document.elementFromPoint(pozX, pozY); // Элемент в зоне видимости

    // control показывает активную секцию
    let controlBtn = document.querySelectorAll(".controls__btn");
    controlBtn.forEach(function (el, i, arr) {
      let controlBtnClass = el.className;
      let itemClass = item.className;

      document.querySelectorAll(".controls__btn").forEach(function (el, index) {
        let controlBtnTooltip = el.getAttribute("tooltip"); // текст тултипса

        if (itemClass === controlBtnTooltip) {
          el.classList.add("controls__btn--active");
        } else {
          el.classList.remove("controls__btn--active");
        }
      });
    });
  }


  // console.log('Высота экрана:', clientHeight - 65);
  // console.log('Пикселей от верха:', window.pageYOffset + 65);
  // console.log( window.pageYOffset >= (clientHeight - 65) ); // =>если true, значит скролл = секции
  // console.log(window.pageYOffset); // Пикселей от верха
  // console.log(screenSizeWidth, screenSizeHeight); // Реальный размер экрана => 1366 768
  // console.log(clientWidth, clientHeight); // Реальный размер экрана браузера (=> тому, что в зоне видимости)
  // console.log(document.body.clientHeight); // реальная высота/ширина страницы

  let screenSizeWidth;
  let screenSizeHeight;

  let clientWidth;
  let clientHeight;
  let realHeight;
  let temp;

  document
    .querySelector(".controls__btn")
    .addEventListener("click", function (event) {
      console.log("0");
     
      //----------------------------------------
      screenSizeWidth = window.screen.width;
      screenSizeHeight = window.screen.height;

      clientWidth = document.documentElement.clientWidth;
      clientHeight = document.documentElement.clientHeight;
      realHeight = document.body.clientHeight - 65;
      let sectionCount; // Сколько всего секций
      //----------------------------------------

      // сколько всего секций:
      document
        .querySelectorAll(".main > section")
        .forEach(function (el, index, arr) {
          sectionCount = index + 1; // => 7 секций
        });
      temp = realHeight / sectionCount; // Высоту одной секции

      let step = 0; // шаг = высоте секции
      step = step + window.pageYOffset;

      if (step >= clientHeight - 65) {
        step = 0;
        // console.log('Обнулим шаг');
        console.log("шаг", step);
      }

      if (step === 0) {
        step = step + window.pageYOffset;
        // console.log('шаг после сброса', step);
      }
    });


}); // DOMContentLoaded
