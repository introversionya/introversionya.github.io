export default {
  deep: true,
  mounted(el, binding, vnode) {
    el.addEventListener("mouseenter", () => createTooltip(el, binding, vnode));
    el.addEventListener("mouseleave", () => removeTooltip(el, binding, vnode));
  },
  updated(el, binding, vnode) {
    state.updated = el;
    if (state.target === state.updated) {
      updateOptions(el, binding, vnode);
      updateText(el, binding, vnode);
      setPosition(options.position, document.querySelector(".tooltip"));
    }
    if (!options.isActive) { // под вопросом
      removeTooltip();
    }
  },
};

const state = {
  target: null,
  updated: null,
  loopCheck: null
};

const options = {
  indent: null,
  text: null,
  position: null,
  isActive: null
};

function updateOptions(el, binding, vnode) {
  options.indent = binding.value.indent;
  options.text = binding.value.text;
  options.position = binding.value.position;
  options.isActive = binding.value.isActive;
}

function updateText(el, binding, vnode) {
  if (document.querySelector(".tooltip") !== null) {
    document.querySelector(".tooltip").innerHTML = options.text;
  }
}

function createTooltip(el, binding, vnode) {
  updateOptions(el, binding, vnode);
  state.target = el;
  if (options.isActive) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = options.text;
    document.body.append(tooltip);
    tooltip.classList.add("tooltip--animate");
    // checkPosition(el, options.position, tooltip);
    setPosition(el, options.position, tooltip); // del
    observer.observe(tooltip); // ---------------------------------------------------------------------------------------------------
  }
}

function removeTooltip() {
  document.querySelectorAll(".tooltip").forEach((item) => item.remove());
  state.target = null;
  state.updated = null;
  cancelAnimationFrame(state.loopCheck);
  // console.clear();
}

function checkPosition(position, tooltip) {
  state.loopCheck = requestAnimationFrame(() => checkPosition(position, tooltip));
  setPosition(position, tooltip);
}

const position = {
  top: function(tooltip) {
    tooltip.style.top = `${(state.target.getBoundingClientRect().top - tooltip.offsetHeight) - options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().left - ((tooltip.offsetWidth - state.target.offsetWidth) / 2)}px`;
  },
  topStart: function(tooltip) {
    tooltip.style.top = `${(state.target.getBoundingClientRect().top - tooltip.offsetHeight) - options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().left}px`;
  },
  topEnd: function(tooltip) {
    tooltip.style.top = `${(state.target.getBoundingClientRect().top - tooltip.offsetHeight) - options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().right - tooltip.offsetWidth}px`;
  },
  right: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().top - ((tooltip.offsetHeight - state.target.offsetHeight) / 2)}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().right + options.indent}px`;
  },
  rightStart: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().top}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().right + options.indent}px`;
  },
  rightEnd: function (tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().bottom - tooltip.offsetHeight}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().right + options.indent}px`;
  },
  bottom: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().bottom + options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().left - ((tooltip.offsetWidth - state.target.offsetWidth) / 2)}px`;
  },
  bottomStart: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().bottom + options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().left}px`;
  },
  bottomEnd: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().bottom + options.indent}px`;
    tooltip.style.left = `${state.target.getBoundingClientRect().right - tooltip.offsetWidth}px`;
  },
  left: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().top - ((tooltip.offsetHeight - state.target.offsetHeight) / 2)}px`;
    tooltip.style.left = `${(state.target.getBoundingClientRect().left - tooltip.offsetWidth) - options.indent}px`;
  },
  leftStart: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().top}px`;
    tooltip.style.left = `${(state.target.getBoundingClientRect().left - tooltip.offsetWidth) - options.indent}px`;
  },
  leftEnd: function(tooltip) {
    tooltip.style.top = `${state.target.getBoundingClientRect().bottom - tooltip.offsetHeight}px`;
    tooltip.style.left = `${(state.target.getBoundingClientRect().left - tooltip.offsetWidth) - options.indent}px`;
  },
};

function setPosition(el, value, tooltip) {
  if (value === "top") {
    position.top(tooltip);
  } else if (value === "topStart") {
    position.topStart(tooltip);
  } else if (value === "topEnd") {
    position.topEnd(tooltip);
  } else if (value === "right") {
    position.right(tooltip);
  } else if (value === "rightStart") {
    position.rightStart(tooltip);
  } else if (value === "rightEnd") {
    position.rightEnd(tooltip);
  } else if (value === "bottom") {
    position.bottom(tooltip);
  } else if (value === "bottomStart") {
    position.bottomStart(tooltip);
  } else if (value === "bottomEnd") {
    position.bottomEnd(tooltip);
  } else if (value === "left") {
    position.left(tooltip);
  } else if (value === "leftStart") {
    position.leftStart(tooltip);
  } else if (value === "leftEnd") {
    position.leftEnd(tooltip);
  }
}

function changePosition(entries, observer) { // логика observer
  entries.forEach(entry => {
    // isIntersecting — булево значение. true если есть пересечение элемента и наблюдаемой области.
    // intersectionRatio — доля пересечения от 0 до 1. Если элемент полностью в наблюдаемой области, то значение будет 1, а если наполовину, то — 0.5.
    const checkTop = entry.intersectionRatio === 1 && entry.boundingClientRect.top >= options.indent;
    const checkRight = entry.intersectionRatio === 1 && (document.documentElement.clientWidth - entry.boundingClientRect.right) >= options.indent;
    const checkBottom = entry.intersectionRatio === 1 && (document.documentElement.clientHeight - entry.boundingClientRect.bottom) >= options.indent;
    const checkLeft = entry.intersectionRatio === 1 && entry.boundingClientRect.left >= options.indent;

    if (!checkTop) {
      //
    } else if (!checkRight) {
      //
    } else if (!checkBottom) {
      //
    } else if (!checkLeft) {
      //
    }
  });
}

const observer = new IntersectionObserver(changePosition, observerOptions);

const observerOptions = {
  root: null, // null смотрит за viewport
  rootMargin: "0px", // отступы вокруг root
  threshold: 1, // допустимый процент пересечения target и root
  delay: 0, // задержка
};



// возможность добавлять свой css для tooltip []
// возможность добавлять trigger []
// вынести в отдельную функцию определение "свободного места" рядом с элементом []
// возможность кликать/наводиться на tooltip []
// возможность отключать/удалять tooltip при изменении параметра isActive [x]
// когда target меняет свое положение, tooltip обновляет свои координаты [x]
// возможность позиционировать tooltip на "цели"/курсоре мышки []






















