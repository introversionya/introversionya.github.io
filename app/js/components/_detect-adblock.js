import * as variable from "./_variables.js";

const res = {};
const links = ["https://ads.adfox.ru", "https://vak345.com", "http://flashnetic.com", "https://aj1907.online"];

checkAdb();

async function checkAdb() {
  for (let i = 0; i < links.length; i++) {
    try {
      await fetch(links[i], { mode: "no-cors" });
      res[links[i]] = true;
    } catch (error) {
      res[links[i]] = false;
    } finally {
      testResult();
    }
  }
}

function testResult() {
  const resLength = Object.keys(res).length; // Длина
  const value = Object.values(res); // Значение
  let blokedValue = 0; // Кол-во заблокированных запросов

  value.forEach((el) => {
    if (el === false) {
      blokedValue++;
    }
  });

  const tmp = (100 / resLength) * blokedValue; // вероятность адблока в %
  variable.html.setAttribute("data-adblock-installed", `${tmp}%`);
}
