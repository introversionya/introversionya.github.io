document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM загружен успешно");
  'use strict';

  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  $(function () {
    $(".logo__img").lazyLoadXT();
  });

  // Темная тема
  const toggleBtn = document.querySelector(".btn-toggleTheme");
  // const linkThemes = document.querySelector('#link-themes');

  function checkStatusTheme() {
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

  // Запускаем функцию при клике
  const toggleTheme = toggleBtn.addEventListener("click", function () {
    checkStatusTheme();
    console.log("click");
  });

  // Проверка на адблок
  const adblockBox = document.querySelector(".adblock-box");
  const alertAdb = document.querySelector(".alert-adb");

  setInterval(checkAdb, 2000);

  function checkAdb() {
    if (adblockBox.clientHeight < 1) {
      console.log("есть адблок");
      alertAdb.style.top = "calc(50% - 205px)";
      alertAdb.style.opacity = "1";
      alertAdb.style.visibility = "visible";
    } else {
      console.log("нет адблок");
    }
  }

  // Закрыть окно алерт адблок
  let fvf;
  const alertAdbClose = document.querySelector(".alert-adb__close");

  const alertAdbClosed = alertAdbClose.addEventListener("click", function () {
    alertAdb.style.display = "none";
    fvf = localStorage.setItem("btn", "false");
  });
  console.log(fvf);
  

  










});
