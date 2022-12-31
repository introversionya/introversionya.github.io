export default {
  mounted(el) {
    const loaderImg = require("@/assets/images/loaders/spinning-gears.svg"); // заглушка
    const targets = []; // элементы, за которыми наблюдает observer
    targets.push(el);

    const options = {
      root: null, // null смотрит за viewport
      rootMargin: "0px", // отступы вокруг root
      threshold: 0.05, // допустимый процент пересечения target и root
      delay: 500, // задержка
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.getAttribute("data-src"); // устанавливаем src из data атрибута
          // удаляем data-src
          entry.target.removeAttribute("data-src");
          // прекращаем наблюдение
          observer.unobserve(entry.target);
        }
      });
    }, options);

    targets.forEach((el) => {
      const originalPath = el.getAttribute("src");
      el.setAttribute("src", loaderImg);
      el.setAttribute("data-src", originalPath);
      observer.observe(el); // получаем в observer все элементы из targets
    });
  },
};
