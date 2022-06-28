window.addEventListener("load", () => {
  const targets = document.querySelectorAll("[data-src]"); // элементы, за которыми наблюдает observer

  const options = {
    root: null, // null смотрит за viewport
    rootMargin: "0px", // отступы вокруг root
    threshold: 0.05, // допустимый процент пересечения target и root
    delay: 500, // задержка
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src"); // устанавливаем src path из data атрибута
        // удаляем data-src
        entry.target.removeAttribute("data-src");
        // прекращаем наблюдение
        observer.unobserve(entry.target);
      }
    });
  }, options);

  targets.forEach((target) => {
    observer.observe(target); // получаем в observer все элементы с [data-src]
  });
});
