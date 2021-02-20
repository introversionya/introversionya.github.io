document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM загружен успешно');

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(function() {
    $('.logo__img').lazyLoadXT();
  });

  // Темная тема
    // const toggleBtn = document.querySelectorAll('.btn-toggleTheme');
    const toggleBtn = document.querySelector('.btn-toggleTheme');
    const linkThemes = document.querySelector('#link-themes');

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
    const toggleTheme = addEventListener ('click', function() {
      checkStatusTheme ();
      console.log('click');
    })
    
     
      
      
   
      
  










});

