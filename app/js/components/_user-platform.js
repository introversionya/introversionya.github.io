import * as variable from "./_variables.js";

// User platform
getPlatform();

export function getPlatform() {
  const userAgent = navigator.userAgent;
  let nameBrowser = null;
  let nameOS = null;

  // OS:
  if (userAgent.indexOf("Windows") > -1) {
    nameOS = "Windows";
    variable.headerOs.textContent = "OS: Windows";
    variable.html.setAttribute("data-user-os", `${nameOS}`);
  } else if (userAgent.indexOf("Linux") > -1) {
    nameOS = "Linux";
    variable.headerOs.textContent = "OS: Linux";
    variable.html.setAttribute("data-user-os", `${nameOS}`);
  } else if (userAgent.indexOf("Macintosh") > -1) {
    nameOS = "Macintosh";
    variable.headerOs.textContent = "OS: Macintosh";
    variable.html.setAttribute("data-user-os", `${nameOS}`);
  } else if (userAgent.indexOf("FreeBSD") > -1) {
    nameOS = "FreeBSD";
    variable.headerOs.textContent = "OS: FreeBSD";
    variable.html.setAttribute("data-user-os", `${nameOS}`);
  } else {
    nameOS = "unknown";
    variable.headerOs.textContent = "OS: unknown";
    variable.html.setAttribute("data-user-os", `${nameOS}`);
  }

  // Browser:
  if (userAgent.indexOf("Firefox") > -1) {
    nameBrowser = "Firefox";
    variable.browser.textContent = "Browser: Firefox";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else if (userAgent.indexOf("OPR") > -1) {
    nameBrowser = "Opera";
    variable.browser.textContent = "Browser: Opera";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else if (userAgent.indexOf("Trident") > -1) {
    nameBrowser = "IE";
    variable.browser.textContent = "Browser: IE";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else if (userAgent.indexOf("Edg") > -1) {
    nameBrowser = "Edge";
    variable.browser.textContent = "Browser: Edge";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else if (userAgent.indexOf("Chrome") > -1) {
    nameBrowser = "Chrome";
    variable.browser.textContent = "Browser: Chrome";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else if (userAgent.indexOf("Safari") > -1) {
    nameBrowser = "Safari";
    variable.browser.textContent = "Browser: Safari";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  } else {
    nameBrowser = "unknown";
    variable.browser.textContent = "Browser: unknown";
    variable.html.setAttribute("data-user-agent", `${nameBrowser}`);
  }
}