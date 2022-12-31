let itemTooltip = null;
let indent = null;
let text = null;
let pos = null;
let isActive = null;
let top = null;
let left = null;
let targetWidth = null;
let targetHeight = null;
let tooltipWidth = null;
let tooltipHeight = null;
let elem = null;
let bind = null;
let node = null;

export default {
  deep: true,
  mounted(el, binding, vnode) {
    update(el, binding, vnode);
    el.addEventListener("mouseenter", () => createTooltip(el, binding, vnode));
    el.addEventListener("mouseleave", () => removeTooltip(el, binding, vnode));
  },
  updated(el, binding, vnode) {
    update(el, binding, vnode);
    setPosition(el, binding, vnode);
  },
};

const position = {
  top: function () {
    itemTooltip.style.top = top - (tooltipHeight + indent) + "px";
    itemTooltip.style.left = left + (targetWidth / 2 - tooltipWidth / 2) + "px";
  },
  topStart: function () {
    itemTooltip.style.top = top - (tooltipHeight + indent) + "px";
    itemTooltip.style.left = left + "px";
  },
  topEnd: function () {
    itemTooltip.style.top = top - (tooltipHeight + indent) + "px";
    itemTooltip.style.left = left + (targetWidth - tooltipWidth) + "px";
  },
  right: function () {
    itemTooltip.style.top = top + (targetHeight / 2 - tooltipHeight / 2) + "px";
    itemTooltip.style.left = left + (targetWidth + indent) + "px";
  },
  rightStart: function () {
    itemTooltip.style.top = top + "px";
    itemTooltip.style.left = left + (targetWidth + indent) + "px";
  },
  rightEnd: function () {
    itemTooltip.style.top = top + (targetHeight - tooltipHeight) + "px";
    itemTooltip.style.left = left + (targetWidth + indent) + "px";
  },
  bottom: function () {
    itemTooltip.style.top = top + (targetHeight + indent) + "px";
    itemTooltip.style.left = left + (targetWidth / 2 - tooltipWidth / 2) + "px";
    pos = "bottom"
  },
  bottomStart: function () {
    itemTooltip.style.top = top + (targetHeight + indent) + "px";
    itemTooltip.style.left = left + "px";
  },
  bottomEnd: function () {
    itemTooltip.style.top = top + (targetHeight + indent) + "px";
    itemTooltip.style.left = left + (targetWidth - tooltipWidth) + "px";
  },
  left: function () {
    itemTooltip.style.top = top + (targetHeight / 2 - tooltipHeight / 2) + "px";
    itemTooltip.style.left = left - (tooltipWidth + indent) + "px";
  },
  leftStart: function () {
    itemTooltip.style.top = top + "px";
    itemTooltip.style.left = left - (tooltipWidth + indent) + "px";
  },
  leftEnd: function () {
    itemTooltip.style.top = top + (targetHeight - tooltipHeight) + "px";
    itemTooltip.style.left = left - (tooltipWidth + indent) + "px";
  },
};

function update(el, binding, vnode) {
  itemTooltip = document.querySelector(".tooltip");
  indent = binding.value.indent;
  text = binding.value.text;
  pos = binding.value.pos;
  isActive = binding.value.isActive;
  elem = el;
  bind = binding;
  node = vnode;

  // --------------------------------
  if (itemTooltip !== null) {
    itemTooltip.innerHTML = text;
  }
}

function createTooltip(elem, bind, node) { // создание тултипа
  document.querySelectorAll(".tooltip").forEach((item) => item.remove());
  update(elem, bind, node);
  window.addEventListener("scroll", changeScroll);
  if (isActive) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = text;
    document.body.append(tooltip);
    tooltip.classList.add("tooltip--animate");
    setPosition(elem, bind, node);
  }
}

function removeTooltip(elem, bind, node) { // удаление тултипа
  document.querySelectorAll(".tooltip").forEach((item) => item.remove());
  update(elem, bind, node);
  window.removeEventListener("scroll", changeScroll);
}

function setPosition(elem, bind, node) { // вызов функции установки положения тултипа в зависимости от парметра "pos"
  update(elem, bind, node);
  setCoordinates(elem, bind, node);

  if (itemTooltip !== null) {
    if (pos === "top" || pos === undefined || pos === null) {
      position.top();
    } else if (pos === "topStart") {
      position.topStart();
    } else if (pos === "topEnd") {
      position.topEnd();
    } else if (pos === "right") {
      position.right();
    } else if (pos === "rightStart") {
      position.rightStart();
    } else if (pos === "rightEnd") {
      position.rightEnd();
    } else if (pos === "bottom") {
      position.bottom();
    } else if (pos === "bottomStart") {
      position.bottomStart();
    } else if (pos === "bottomEnd") {
      position.bottomEnd();
    } else if (pos === "left") {
      position.left();
    } else if (pos === "leftStart") {
      position.leftStart();
    } else if (pos === "leftEnd") {
      position.leftEnd();
    }
    //---------------------------------------
    changePosition(elem, bind, node);
  }
}

function setCoordinates(elem, bind, node) { // что это делает?
  if (itemTooltip !== null) {
    indent === null ? 10 : indent;
    top = elem.getBoundingClientRect().top + window.pageYOffset;
    left = elem.getBoundingClientRect().left + window.pageXOffset;
    targetWidth = elem.offsetWidth;
    targetHeight = elem.offsetHeight;
    tooltipWidth = itemTooltip.offsetWidth;
    tooltipHeight = itemTooltip.offsetHeight;
  }
}

function changeScroll() { // установка позиции тултипа при событии "scroll"
  setPosition(elem, bind, node);
}

function changePosition(elem, bind, node) { // автоматическая смена позиции при нехватке места для тултипа
  // Расстояние от элемента с тултипом
  const targetTop = elem.getBoundingClientRect().top;
  const targetRight = document.documentElement.clientWidth - (elem.getBoundingClientRect().left + targetWidth);
  const targetBottom = document.documentElement.clientHeight - (elem.getBoundingClientRect().top + targetHeight);
  const targetLeft = elem.getBoundingClientRect().left;

  // Размер "кончика" тултипа
  const tooltipSideX = tooltipWidth - targetWidth;
  const tooltipSideY = tooltipHeight - targetHeight;

  if (pos === "top") {
    if (targetTop >= tooltipHeight + (indent * 2)) {
      setTop("top");
    } else {
      setBottom("bottom");
    }
  } else if (pos === "topStart") {
    if (targetTop >= tooltipHeight + (indent * 2)) {
      setTop("topStart");
    } else {
      setBottom("bottomStart");
    }
  } else if (pos === "topEnd") {
    if (targetTop >= tooltipHeight + (indent * 2)) {
      setTop("topEnd");
    } else {
      setBottom("bottomEnd");
    }
  } else if (pos === "right") {
    if (targetRight >= tooltipWidth + (indent * 2)) {
      setRight("right");
    } else {
      setLeft("left");
    }
  } else if (pos === "rightStart") {
    if (targetRight >= tooltipWidth + (indent * 2)) {
      setRight("rightStart");
    } else {
      setLeft("leftStart");
    }
  } else if (pos === "rightEnd") {
    if (targetRight >= tooltipWidth + (indent * 2)) {
      setRight("rightEnd");
    } else {
      setLeft("leftEnd");
    }
  } else if (pos === "bottom") {
    if (targetBottom >= tooltipHeight + (indent * 2)) {
      setBottom("bottom");
    } else {
      setTop("top");
    }
  } else if (pos === "bottomStart") {
    if (targetBottom >= tooltipHeight + (indent * 2)) {
      setBottom("bottomStart");
    } else {
      setTop("topStart");
    }
  } else if (pos === "bottomEnd") {
    if (targetBottom >= tooltipHeight + (indent * 2)) {
      setBottom("bottomEnd");
    } else {
      setTop("topEnd");
    }
  } else if (pos === "left") {
    if (targetLeft >= tooltipWidth + (indent * 2)) {
      setLeft("left");
    } else {
      setRight("right");
    }
  } else if (pos === "leftStart") {
    if (targetLeft >= tooltipWidth + (indent * 2)) {
      setLeft("leftStart");
    } else {
      setRight("rightStart");
    }
  } else if (pos === "leftEnd") {
    if (targetLeft >= tooltipWidth + (indent * 2)) {
      setLeft("leftEnd");
    } else {
      setRight("rightEnd");
    }
  }

  function setTop(value) {
    if (value === "top" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.top();
    } else if (value === "top" && targetRight >= tooltipSideX + indent) {
      position.topStart();
    } else if (value === "top" && targetLeft >= tooltipSideX + indent) {
      position.topEnd();
    }

    if (value === "topStart" && targetRight >= tooltipSideX + indent) {
      position.topStart();
    } else if (value === "topStart" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.top();
    } else if (value === "topStart" && targetLeft >= tooltipSideX + indent) {
      position.topEnd();
    }

    if (value === "topEnd" && targetLeft >= tooltipSideX + indent) {
      position.topEnd();
    } else if (value === "topEnd" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.top();
    } else if (value === "topEnd" && targetRight >= tooltipSideX + indent) {
      position.topStart();
    }
  }

  function setRight(value) {
    if (value === "right" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.right();
    } else if (value === "right" && targetBottom >= (tooltipSideY / 2) + indent) {
      position.rightStart();
    } else if (value === "right" && targetTop >= (tooltipSideY / 2) + indent) {
      position.rightEnd();
    }

    if (value === "rightStart" && targetBottom >= tooltipSideY + indent) {
      position.rightStart();
    } else if (value === "rightStart" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.right();
    } else if (value === "rightStart" && targetTop >= tooltipSideY + indent) {
      position.rightEnd();
    }

    if (value === "rightEnd" && targetTop >= tooltipSideY + indent) {
      position.rightEnd();
    } else if (value === "rightEnd" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.right();
    } else if (value === "rightEnd" && targetBottom >= tooltipSideY + indent) {
      position.rightStart();
    }
  }

  function setBottom(value) {
    if (value === "bottom" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.bottom();
    } else if (value === "bottom" && targetRight >= tooltipSideX + indent) {
      position.bottomStart();
    } else if (value === "bottom" && targetLeft >= tooltipSideX + indent) {
      position.bottomEnd();
    }

    if (value === "bottomStart" && targetRight >= tooltipSideX + indent) {
      position.bottomStart();
    } else if (value === "bottomStart" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.bottom();
    } else if (value === "bottomStart" && targetLeft >= tooltipSideX + indent) {
      position.bottomEnd();
    }

    if (value === "bottomEnd" && targetLeft >= tooltipSideX + indent) {
      position.bottomEnd();
    } else if (value === "bottomEnd" && targetLeft >= (tooltipSideX / 2) + indent && targetRight >= (tooltipSideX / 2) + indent) {
      position.bottom();
    } else if (value === "bottomEnd" && targetRight >= tooltipSideX + indent) {
      position.bottomStart();
    }
  }

  function setLeft(value) {
    if (value === "left" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.left();
    } else if (value === "left" && targetBottom >= tooltipSideY + indent) {
      position.leftStart();
    } else if (value === "left" && targetTop >= tooltipSideY + indent) {
      position.leftEnd();
    }

    if (value === "leftStart" && targetBottom >= tooltipSideY + indent) {
      position.leftStart();
    } else if (value === "leftStart" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.left();
    } else if (value === "leftStart" && targetTop >= tooltipSideY + indent) {
      position.leftEnd();
    }

    if (value === "leftEnd" && targetTop >= tooltipSideY + indent) {
      position.leftEnd();
    } else if (value === "leftEnd" && targetTop >= (tooltipSideY / 2) + indent && targetBottom >= (tooltipSideY / 2) + indent) {
      position.left();
    } else if (value === "leftEnd" && targetBottom >= tooltipSideY + indent) {
      position.leftStart();
    }
  }

}
