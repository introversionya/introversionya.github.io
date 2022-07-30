// -----------------------------------------------------------------------------------------------------------------------------

// Как пользоваться:

// Включить tooltip - data-tooltip="enabled"
// По умолчанию текст берется из атрибута aria-label, но можно указать свой текст: data-tooltip-text="свой текст"
// Отступ tooltip - data-tooltip-indent="20" (необязательный)
// Задать положение tooltip: data-tooltip-position="left-end" (необязательный, возможные позиции ниже)

// Позиции tooltip:
// 1. top
// 2. top-start
// 3. top-end

// 4. right
// 5. right-start
// 6. right-end

// 7. bottom
// 8. bottom-start
// 9. bottom-end

// 10. left
// 11. left-start
// 12. left-end

// -----------------------------------------------------------------------------------------------------------------------------
document.querySelectorAll("[data-tooltip]").forEach((item) => {
  item.addEventListener("mouseenter", createTooltip);
  item.addEventListener("mouseleave", removeTooltip);
});

function createTooltip(e) {
  if (document.querySelector(".tooltip") !== null) {
    document.querySelector(".tooltip").remove();
  }

  // создание в html tooltip
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = e.target.hasAttribute("data-tooltip-text") ? e.target.getAttribute("data-tooltip-text") : e.target.getAttribute("aria-label");
  document.body.append(tooltip);

  // анимация появления tooltip
  tooltip.classList.add("tooltip--animate");

  // отступ tooltip
  const tooltipIndent = e.target.hasAttribute("data-tooltip-indent") ? +e.target.getAttribute("data-tooltip-indent") : 20;

  // координаты элемента с tooltip
  const targetRect = e.target.getBoundingClientRect();
  const top = targetRect.top;
  const left = targetRect.left;

  // размер элемента с tooltip
  const targetWidth = e.target.offsetWidth;
  const targetHeight = e.target.offsetHeight;

  // размер tooltip
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  // bottom (положение tooltip по умолчанию)
  tooltip.style.top = top + (targetHeight + tooltipIndent) + "px";
  tooltip.style.left = left + (targetWidth / 2 - tooltipWidth / 2) + "px";

  // положение tooltip из атрибута
  if (e.target.hasAttribute("data-tooltip-position")) {
    // top
    if (e.target.getAttribute("data-tooltip-position") === "top") {
      tooltip.style.top = top - (tooltipHeight + tooltipIndent) + "px";
      tooltip.style.left = left + (targetWidth / 2 - tooltipWidth / 2) + "px";
    }
    // top-start
    if (e.target.getAttribute("data-tooltip-position") === "top-start") {
      tooltip.style.top = top - (tooltipHeight + tooltipIndent) + "px";
      tooltip.style.left = left + "px";
    }
    // top-end
    if (e.target.getAttribute("data-tooltip-position") === "top-end") {
      tooltip.style.top = top - (tooltipHeight + tooltipIndent) + "px";
      tooltip.style.left = left + (targetWidth - tooltipWidth) + "px";
    }
    // right
    if (e.target.getAttribute("data-tooltip-position") === "right") {
      tooltip.style.top = top + (targetHeight / 2 - tooltipHeight / 2) + "px";
      tooltip.style.left = left + (targetWidth + tooltipIndent) + "px";
    }
    // right-start
    if (e.target.getAttribute("data-tooltip-position") === "right-start") {
      tooltip.style.top = top + "px";
      tooltip.style.left = left + (targetWidth + tooltipIndent) + "px";
    }
    // right-end
    if (e.target.getAttribute("data-tooltip-position") === "right-end") {
      tooltip.style.top = top + (targetHeight - tooltipHeight) + "px";
      tooltip.style.left = left + (targetWidth + tooltipIndent) + "px";
    }
    // bottom
    if (e.target.getAttribute("data-tooltip-position") === "bottom") {
      tooltip.style.top = top + (targetHeight + tooltipIndent) + "px";
      tooltip.style.left = left + (targetWidth / 2 - tooltipWidth / 2) + "px";
    }
    // bottom-start
    if (e.target.getAttribute("data-tooltip-position") === "bottom-start") {
      tooltip.style.top = top + (targetHeight + tooltipIndent) + "px";
      tooltip.style.left = left + "px";
    }
    // bottom-end
    if (e.target.getAttribute("data-tooltip-position") === "bottom-end") {
      tooltip.style.top = top + (targetHeight + tooltipIndent) + "px";
      tooltip.style.left = left + (targetWidth - tooltipWidth) + "px";
    }
    // left
    if (e.target.getAttribute("data-tooltip-position") === "left") {
      tooltip.style.top = top + (targetHeight / 2 - tooltipHeight / 2) + "px";
      tooltip.style.left = left - (tooltipWidth + tooltipIndent) + "px";
    }
    // left-start
    if (e.target.getAttribute("data-tooltip-position") === "left-start") {
      tooltip.style.top = top + "px";
      tooltip.style.left = left - (tooltipWidth + tooltipIndent) + "px";
    }
    // left-end
    if (e.target.getAttribute("data-tooltip-position") === "left-end") {
      tooltip.style.top = top + (targetHeight - tooltipHeight) + "px";
      tooltip.style.left = left - (tooltipWidth + tooltipIndent) + "px";
    }
  }
}

function removeTooltip() {
  const tooltip = document.querySelector(".tooltip");

  if (tooltip !== null) {
    tooltip.classList.remove("tooltip--animate");
    tooltip.addEventListener("transitionend", () => {
      tooltip.remove();
    });
  }
}
