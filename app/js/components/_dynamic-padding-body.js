import * as variable from "./_variables.js";

window.addEventListener("load", dynamicPaddingBody);
window.addEventListener("resize", dynamicPaddingBody);

function dynamicPaddingBody() {
  variable.body.style.paddingTop = variable.header.clientHeight + "px";
  window.removeEventListener("load", dynamicPaddingBody);
}
