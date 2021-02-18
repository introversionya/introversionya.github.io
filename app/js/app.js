document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM загружен успешно');

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(function() {
    $('.logo__img').lazyLoadXT();
  });

});

