// При ресайзе показывать ширину и высоту экрана
let menuResizeState = null;
let menuResizeHide = null;

const resize = document.querySelector(".resize");
const resizeWidth = document.querySelector(".resize__width .resize__num");
const resizeHeight = document.querySelector(".resize__height .resize__num");

document.addEventListener("visibilitychange", pageVisibilityState);

if (document.visibilityState === "visible") {
  window.addEventListener("resize", resizeShow);
} else {
  window.removeEventListener("resize", resizeShow);
}

// Попробовать переписать(убрать таймаут)
function pageVisibilityState() {
  if (document.visibilityState === "visible") {
    menuResizeState = setTimeout(() => {
      window.addEventListener("resize", resizeShow);
    }, 300);
  } else {
    clearTimeout(menuResizeState);
    window.removeEventListener("resize", resizeShow);
  }
}

export function resizeShow() {
  resizeWidth.textContent = document.documentElement.clientWidth + "px";
  resizeHeight.textContent = document.documentElement.clientHeight + "px";

  resize.style.transition = "opacity 0s";
  resize.style.opacity = "1";

  if (menuResizeHide !== null) {
    clearTimeout(menuResizeHide);
  }

  menuResizeHide = setTimeout(() => {
    resize.style.transition = "opacity 1s";
    resize.style.opacity = "0";
  }, 3500);
}
