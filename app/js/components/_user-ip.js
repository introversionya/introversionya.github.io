import * as variable from "./_variables.js";

// Получаем ip пользователя
getUserIp();

export function getUserIp() {
  fetch("https://api.ipify.org")
    .then((response) => (response.ok ? response : Promise.reject(response)))
    .then((response) => response.text())
    .then(function (json) {
      const ipAddressUser = json;
      variable.ip.textContent = `Ip: ${ipAddressUser}`;
      variable.ip.setAttribute("tooltip", `Ip: ${ipAddressUser}`);
    })
    .catch(() => {
      variable.ip.textContent = `Ip: error`;
      variable.ip.setAttribute("tooltip", "Попробуйте отключить adblock");
    });
}
