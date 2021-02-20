document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM загружен успешно');

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(function() {
    $('.logo__img').lazyLoadXT();
  });

  // Темная тема
    const toggleBtn = document.querySelector('.btn-toggleTheme');
    // const linkThemes = document.querySelector('#link-themes');

    function checkStatusTheme () {

      // Меняем значение title, цвет кнопки и css стили
      if (toggleBtn.getAttribute('title') === 'Включить темный режим') {
        toggleBtn.setAttribute ('title', 'Включить светлый режим');
        toggleBtn.classList.remove('light-theme');
        //linkThemes.setAttribute('href', 'css/dark.css'); ДОБАВИТЬ ФАЙЛ dark.css В ПРОЕКТ!!!

      } else {
        toggleBtn.setAttribute ('title', 'Включить темный режим');
        toggleBtn.classList.add('light-theme');
      }
      
    }

    // Запускаем функцию при клике
    const toggleTheme = toggleBtn.addEventListener ('click', function() {
      checkStatusTheme ();
      console.log('click');
    })
    

    // Проверка на адблок
    const adblockBox = document.querySelector('.adblock-box');
    const alertAdb = document.querySelector('.alert-adb');

    setInterval (checkAdb, 15000);
    
    function checkAdb () {
      if (adblockBox.clientHeight < 1) {
        console.log('есть адблок');
        alertAdb.style.display = 'block';
      } else {
        console.log('нет адблок');
        alertAdb.style.display = 'none';
      }
    }

    // Закрыть окно алерт адблок
    const alertAdbClose = document.querySelector('.alert-adb__close');
    const alertAdbClosed = alertAdbClose.addEventListener('click', function(){
      alertAdb.style.display = 'none';
    })

    
    
     
      
      
   
      
  










});

