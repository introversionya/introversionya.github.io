(function () {
  // здесь ваш код
  const theme = 'light' // читаем значение из localStorage
  document.documentElement.classList.add(theme) // добавляем класс к тегу <html>
  console.log('заебало все..');
})()