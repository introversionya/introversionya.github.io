import * as variable from "./_variables.js";

getIp();

async function getIp() {
  try {
    const data = await fetch("https://api.ipify.org");
    const res = await data.text();
    variable.html.setAttribute("data-ip", res);
  } catch (error) {
    variable.html.setAttribute("data-ip", "error");
  }
}
