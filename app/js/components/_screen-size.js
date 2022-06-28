let screenHide = null;
const screen = document.querySelector(".screen");
const screenWidth = document.querySelector(".screen__width .screen__num");
const screenHeight = document.querySelector(".screen__height .screen__num");

updateScreenSize();

function updateScreenSize() {
  screenWidth.textContent = document.documentElement.clientWidth + "px";
  screenHeight.textContent = document.documentElement.clientHeight + "px";
}

window.addEventListener("resize", showScreenSize);

function showScreenSize() {
  if (document.visibilityState === "visible") {
    clearTimeout(screenHide);
    screenHide = null;

    updateScreenSize();

    screen.style.transition = "opacity 0s";
    screen.style.opacity = "1";

    screenHide = setTimeout(() => {
      screen.style.transition = "opacity 1s";
      screen.style.opacity = "0";
    }, 2500);
  }
}
