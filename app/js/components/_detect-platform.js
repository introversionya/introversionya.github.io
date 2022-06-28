import * as variable from "./_variables.js";

// Получение данных о платформе пользователя
const userAgent = navigator.userAgent.toLowerCase();

// userAgent
getUserAgent();

function getUserAgent() {
  variable.html.setAttribute("data-user-agent", navigator.userAgent);
}

// название браузера
getNameBrowser();

// function getNameBrowser() {
//   let nameBrowser = null;

//   if (userAgent.indexOf("firefox".toLowerCase()) !== -1) {
//     nameBrowser = "Firefox";
//   } else if (userAgent.indexOf("opr".toLowerCase()) !== -1 || userAgent.indexOf("opera".toLowerCase()) !== -1) {
//     nameBrowser = "Opera";
//   } else if (userAgent.indexOf("Windows Phone".toLowerCase()) !== -1 || userAgent.indexOf("IEMobile".toLowerCase()) !== -1) {
//     nameBrowser = "IEMobile";
//   } else if (userAgent.indexOf("trident".toLowerCase()) !== -1 || userAgent.indexOf("msie".toLowerCase()) !== -1) {
//     nameBrowser = "IE";
//   } else if (userAgent.indexOf("edg".toLowerCase()) !== -1 || userAgent.indexOf("edge".toLowerCase()) !== -1) {
//     nameBrowser = "Edge";
//   } else if (userAgent.indexOf("yabrowser".toLowerCase()) !== -1) {
//     nameBrowser = "Yandex Browser";
//   } else if (userAgent.indexOf("chrome".toLowerCase()) !== -1) {
//     nameBrowser = "Chrome";
//   } else if (userAgent.indexOf("symbian".toLowerCase()) !== -1) {
//     nameBrowser = "Nokia Browser";
//   } else if (userAgent.indexOf("safari".toLowerCase()) !== -1) {
//     nameBrowser = "Safari";
//   } else if (userAgent.indexOf("tizen".toLowerCase()) !== -1) {
//     nameBrowser = "Tizen Browser";
//   } else {
//     nameBrowser = "unknown";
//   }

//   variable.html.setAttribute("data-name-browser", nameBrowser);
// }

function getNameBrowser() {
  const signature = {
    "Opera": ["Opera", "Opr"],
    "Safari": "IOS"
  };

  for (let [key, value] of Object.entries(signature)) {
    // Приведем объект к нижнему регистру
    if (Array.isArray(value)) { // если значение массив
      for (let val of value) {
        console.log(val);
        value.splice(0, value.length); // чистим массив
        // val = val.toLowerCase();
        
        
        // value.push(val);
      }
    } else { // если значение !массив
      signature[key] = value.toLowerCase();
    }
  }

  // console.log(signature.Opera);
}

// название ОС
getNameOs();

function getNameOs() {
  let nameOs = null;

  if (userAgent.indexOf("Windows Phone".toLowerCase()) !== -1 || userAgent.indexOf("IEMobile".toLowerCase()) !== -1) {
    nameOs = "Windows Phone";
  } else if (userAgent.indexOf("Windows".toLowerCase()) !== -1) {
    nameOs = "Windows";
  } else if (userAgent.indexOf("CrOS".toLowerCase()) !== -1) {
    nameOs = "Chrome OS";
  }  else if (userAgent.indexOf("Tizen".toLowerCase()) !== -1) {
    nameOs = "Tizen OS";
  } else if (userAgent.indexOf("Android".toLowerCase()) !== -1) {
    nameOs = "Android";
  } else if (userAgent.indexOf("Macintosh".toLowerCase()) !== -1) {
    nameOs = "Macintosh";
  } else if (userAgent.indexOf("FreeBSD".toLowerCase()) !== -1) {
    nameOs = "FreeBSD";
  } else if (userAgent.indexOf("iPhone".toLowerCase()) !== -1) {
    nameOs = "iOS";
  } else if (userAgent.indexOf("Linux".toLowerCase()) !== -1) {
    nameOs = "Linux";
  } else if (userAgent.indexOf("Symbian".toLowerCase()) !== -1 || userAgent.indexOf("Symbian".toLowerCase()) !== -1) {
    nameOs = "SymbianOS";
  } else {
    nameOs = "unknown";
  }

  variable.html.setAttribute("data-name-os", nameOs);
}

// mobile || desktop
getPlatformType();

function getPlatformType() {
  let platformType = null;

  if (userAgent.indexOf("Mobile".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("iPhone".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("Android".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("Windows Phone".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("IEMobile".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("Symbian".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("Opera Mini".toLowerCase()) !== -1) {
    platformType = "Mobile";
  } else if (userAgent.indexOf("webOS".toLowerCase()) !== -1) {
    platformType = "webOS";
  } else if (userAgent.indexOf("iPad".toLowerCase()) !== -1) {
    platformType = "Tablet";
  } else if (userAgent.indexOf("iPod".toLowerCase()) !== -1) {
    platformType = "iPod";
  } else if (userAgent.indexOf("BlackBerry".toLowerCase()) !== -1) {
    platformType = "BlackBerry";
  } else if (userAgent.indexOf("BB".toLowerCase()) !== -1) {
    platformType = "BB";
  } else if (userAgent.indexOf("PlayBook".toLowerCase()) !== -1) {
    platformType = "PlayBook";
  } else {
    platformType = "desktop";
  }

  variable.html.setAttribute("data-type-platform", platformType);
}
