export default {
  deep: true,
  mounted(el, binding, vnode) {
    el.addEventListener("mouseenter", () => createTooltip(el, binding, vnode));
    el.addEventListener("mouseleave", removeTooltip);
  },
  updated(el, binding, vnode) {
    elements.updated = el;
    updateState(binding);
    updateTooltip();
  },
};

// 1. Создание тултипа.
// 2. Проверка переданной позиции на то, хватит ли места для отображения.
// 3. Установка позиции.
// 4. Рекурсивное обновление позиции.

const elements = { // элементы для сравнения
  target: null,
  updated: null,
  tooltip: null, // tooltip в DOM дереве
};

let state = {}; // параметры, переданные в директиву

function updateState(binding) { // заполнить/обновить state
  state = binding.value;
}

function updateTooltip() {
  if (elements.tooltip !== null && elements.target === elements.updated) {
    elements.tooltip.innerHTML = state.text;
  }
}

function createTooltip(el, binding, vnode) { // создание tooltip
  elements.target = el;
  updateState(binding);
  if (state.isActive) {
    const tooltip = document.createElement("div");
    tooltip.innerHTML = binding.value.text;
    tooltip.classList.add("tooltip");
    document.body.append(tooltip);
    elements.tooltip = tooltip;
    // setPosition(state.position);
    checkSpace(state.position);
    tooltip.classList.add("tooltip--animate");
  }
}

function removeTooltip() { // удаление tooltip
  document.querySelectorAll(".tooltip").forEach((item) => item.remove());
  elements.tooltip = null;
}

const position = { // функции установки позиции tooltip
  top: function() {
    elements.tooltip.style.top = `${(elements.target.getBoundingClientRect().top - elements.tooltip.offsetHeight) - state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().left - ((elements.tooltip.offsetWidth - elements.target.offsetWidth) / 2)}px`;
    elements.tooltip.setAttribute("data-position", "top");
  },
  topStart: function() {
    elements.tooltip.style.top = `${(elements.target.getBoundingClientRect().top - elements.tooltip.offsetHeight) - state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().left}px`;
    elements.tooltip.setAttribute("data-position", "topStart");
  },
  topEnd: function() {
    elements.tooltip.style.top = `${(elements.target.getBoundingClientRect().top - elements.tooltip.offsetHeight) - state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().right - elements.tooltip.offsetWidth}px`;
    elements.tooltip.setAttribute("data-position", "topEnd");
  },
  right: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().top - ((elements.tooltip.offsetHeight - elements.target.offsetHeight) / 2)}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().right + state.indent}px`;
    elements.tooltip.setAttribute("data-position", "right");
  },
  rightStart: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().top}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().right + state.indent}px`;
    elements.tooltip.setAttribute("data-position", "rightStart");
  },
  rightEnd: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().bottom - elements.tooltip.offsetHeight}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().right + state.indent}px`;
    elements.tooltip.setAttribute("data-position", "rightEnd");
  },
  bottom: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().bottom + state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().left - ((elements.tooltip.offsetWidth - elements.target.offsetWidth) / 2)}px`;
    elements.tooltip.setAttribute("data-position", "bottom");
  },
  bottomStart: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().bottom + state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().left}px`;
    elements.tooltip.setAttribute("data-position", "bottomStart");
  },
  bottomEnd: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().bottom + state.indent}px`;
    elements.tooltip.style.left = `${elements.target.getBoundingClientRect().right - elements.tooltip.offsetWidth}px`;
    elements.tooltip.setAttribute("data-position", "bottomEnd");
  },
  left: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().top - ((elements.tooltip.offsetHeight - elements.target.offsetHeight) / 2)}px`;
    elements.tooltip.style.left = `${(elements.target.getBoundingClientRect().left - elements.tooltip.offsetWidth) - state.indent}px`;
    elements.tooltip.setAttribute("data-position", "left");
  },
  leftStart: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().top}px`;
    elements.tooltip.style.left = `${(elements.target.getBoundingClientRect().left - elements.tooltip.offsetWidth) - state.indent}px`;
    elements.tooltip.setAttribute("data-position", "leftStart");
  },
  leftEnd: function() {
    elements.tooltip.style.top = `${elements.target.getBoundingClientRect().bottom - elements.tooltip.offsetHeight}px`;
    elements.tooltip.style.left = `${(elements.target.getBoundingClientRect().left - elements.tooltip.offsetWidth) - state.indent}px`;
    elements.tooltip.setAttribute("data-position", "leftEnd");
  },
};

function setPosition(value) { // установить позицию tooltip
  if (value === "top") {
    position.top();
  } else if (value === "topStart") {
    position.topStart();
  } else if (value === "topEnd") {
    position.topEnd();
  } else if (value === "right") {
    position.right();
  } else if (value === "rightStart") {
    position.rightStart();
  } else if (value === "rightEnd") {
    position.rightEnd();
  } else if (value === "bottom") {
    position.bottom();
  } else if (value === "bottomStart") {
    position.bottomStart();
  } else if (value === "bottomEnd") {
    position.bottomEnd();
  } else if (value === "left") {
    position.left();
  } else if (value === "leftStart") {
    position.leftStart();
  } else if (value === "leftEnd") {
    position.leftEnd();
  }
  // console.log(value);
  checkSpace(value);
}

function checkSpace(value) { // проверить, хватает ли места для отображения tooltip
  const tooltipWidth = elements.tooltip.offsetWidth;
  const tooltipHeight = elements.tooltip.offsetHeight;
  //----------------------------------------------------
  const targetWidth = elements.target.offsetWidth;
  const targetHeight = elements.target.offsetHeight;
  //----------------------------------------------------
  const checkTop = elements.target.getBoundingClientRect().top >= tooltipHeight + (state.indent * 2);
  const checkRight = (document.documentElement.clientWidth - elements.target.getBoundingClientRect().right) >= tooltipWidth + (state.indent * 2);
  const checkBottom = (document.documentElement.clientHeight - elements.target.getBoundingClientRect().bottom) >= tooltipHeight + (state.indent * 2);
  const checkLeft = elements.target.getBoundingClientRect().left >= tooltipWidth + (state.indent * 2);
  //----------------------------------------------------
  const sizeTop = elements.target.getBoundingClientRect().top;
  const sizeRight = document.documentElement.clientWidth - elements.target.getBoundingClientRect().right;
  const sizeBottom = document.documentElement.clientHeight - elements.target.getBoundingClientRect().bottom;
  const sizeLeft = elements.target.getBoundingClientRect().left;
  //----------------------------------------------------
  const tooltipSideX = tooltipWidth - targetWidth; // кончик tooltip top || bottom (для получения кончика с одной стороны / 2)
  const tooltipSideY = tooltipHeight - targetHeight; // кончик tooltip left || right (для получения кончика с одной стороны / 2)

  // если для отображения не хватает места - сменить позицию
  if (value === "top") {
    if (checkTop) { // TOP
      if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.top(); }
      else if (sizeRight >= tooltipSideX) { position.topStart(); }
      else if (sizeLeft >= tooltipSideX) { position.topEnd(); }
    } else if (checkBottom) { // BOTTOM
      if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.bottom(); }
      else if (sizeRight >= tooltipSideX) { position.bottomStart(); }
      else if (sizeLeft >= tooltipSideX) { position.bottomEnd(); }
    } else if (checkLeft) { // LEFT
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.left(); }
      else if (sizeBottom >= tooltipSideY) { position.leftStart(); }
      else if (sizeTop >= tooltipSideY) { position.leftEnd(); }
    } else if (checkRight) { // RIGHT
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.right(); }
      else if (sizeBottom >= tooltipSideY) { position.rightStart(); }
      else if (sizeTop >= tooltipSideY) { position.rightEnd(); }
    }
  } else if (value === "topStart") {
    if (checkTop) {
      if (sizeRight >= tooltipSideX) { position.topStart(); }
      else if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.top(); }
      else if (sizeLeft >= tooltipSideX) { position.topEnd(); }
    } else if (checkBottom) {
      if (sizeRight >= tooltipSideX) { position.bottomStart(); }
      else if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.bottom(); }
      else if (sizeLeft >= tooltipSideX) { position.bottomEnd(); }
    } else if (checkLeft) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.left(); }
      else if (sizeBottom >= tooltipSideY) { position.leftStart(); }
      else if (sizeTop >= tooltipSideY) { position.leftEnd(); }
    } else if (checkRight) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.right(); }
      else if (sizeBottom >= tooltipSideY) { position.rightStart(); }
      else if (sizeTop >= tooltipSideY) { position.rightEnd(); }
    }
  } else if (value === "topEnd") {
    if (checkTop) {
      if (sizeLeft >= tooltipSideX) { position.topEnd(); }
      else if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.top(); }
      else if (sizeRight >= tooltipSideX) { position.topStart(); }
    } else if (checkBottom) {
      if (sizeLeft >= tooltipSideX) { position.bottomEnd(); }
      else if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.bottom(); }
      else if (sizeBottom >= tooltipSideY) { position.bottomStart(); }
    } else if (checkLeft) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.left(); }
      else if (sizeBottom >= tooltipSideY) { position.leftStart(); }
      else if (sizeTop >= tooltipSideY) { position.leftEnd(); }
    } else if (checkRight) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.right(); }
      else if (sizeBottom >= tooltipSideY) { position.rightStart(); }
      else if (sizeTop >= tooltipSideY) { position.rightEnd(); }
    }
  } else if (value === "right") {
    if (checkRight) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.right(); }
      else if (sizeBottom >= tooltipSideY) { position.rightStart(); }
      else if (sizeTop >= tooltipSideY) { position.rightEnd(); }
    } else if (checkLeft) {
      if (sizeTop >= tooltipSideY / 2 && sizeBottom >= tooltipSideY / 2) { position.left(); }
      else if (sizeBottom >= tooltipSideY) { position.leftStart(); }
      else if (sizeTop >= tooltipSideY) { position.leftEnd(); }
    } else if (checkTop) {
      if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.top(); }
      else if (sizeRight >= tooltipSideX) { position.topStart(); }
      else if (sizeLeft >= tooltipSideX) { position.topEnd(); }
    } else if (checkBottom) {
      if (sizeLeft >= tooltipSideX / 2 && sizeRight >= tooltipSideX / 2) { position.bottom(); }
      else if (sizeRight >= tooltipSideX) { position.bottomStart(); }
      else if (sizeLeft >= tooltipSideX) { position.bottomEnd(); }
    }
  }




} // end fn












































