gsap.registerPlugin(ScrollTrigger);

/*--------------------------------------------------
LIMIT SKIP
----------------------------------------------------*/
function limit(c) {
  return this.filter((x, i) => {
    if (i <= (c - 1)) {
      return true
    }
  })
}
Array.prototype.limit = limit;

function skip(c) {
  return this.filter((x, i) => {
    if (i > (c - 1)) {
      return true
    }
  })
}
Array.prototype.skip = skip;

/*--------------------------------------------------
USE AGENT CHECK
----------------------------------------------------*/
var g_ua = window.navigator.userAgent.toLowerCase();
let $html = document.documentElement;

var isIE11 = (g_ua.indexOf('trident/7') > -1);
var isEdge = (g_ua.indexOf('edge') > -1);
var isChrome = (g_ua.indexOf('chrome') > -1) && (g_ua.indexOf('edge') == -1);
var isFirefox = (g_ua.indexOf('firefox') > -1);
var isSafari = (g_ua.indexOf('safari') > -1) && (g_ua.indexOf('chrome') == -1);
var isOpera = (g_ua.indexOf('opera') > -1);
var isiPhone = (g_ua.indexOf('iphone') > -1);
var isiPad = (g_ua.indexOf('ipad') > -1);
var isAndroid = (g_ua.indexOf('android') > -1) && (g_ua.indexOf('mobile') > -1);
var isAndroidTablet = (g_ua.indexOf('android') > -1) && (g_ua.indexOf('mobile') == -1);

function uaCheck() {
  if (isIE11) {
    $html.classList.add("ie");
  }
  if (isEdge) {
    $html.classList.add("edge");
  }
  if (isChrome) {
    $html.classList.add("chrome");
  }
  if (isFirefox) {
    $html.classList.add("firefox");
  }
  if (isSafari) {
    $html.classList.add("safari");
  }
  if (isOpera) {
    $html.classList.add("opera");
  }
  if (isiPad) {
    $html.classList.add("ipad");
  }
  if (isiPhone) {
    $html.classList.add("iphone");
  }
  if (isAndroid) {
    $html.addClass("android");
  }
  if (isAndroidTablet) {
    $html.addClass("androidTablet");
  }

  if($html.classList.contains("ipad") || $html.classList.contains("androidTablet")) {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=1280, maximum-scale=1.0');
  }
}
uaCheck();

/*--------------------------------------------------
HEADER NAV PAGE
----------------------------------------------------*/
function menuMobile() {
  var btnMoblie = document.getElementById("mobile-link");
  var nav = document.querySelector(".header__menu");
  var vw = window.innerWidth,
    delay_time = 0;
  var elm = document.querySelectorAll(".header__menu li");
  var body = document.body;

  const checkMenu = function () {
    if (body.classList.contains("menu-open")) {
      TweenMax.to(nav, 0.5, {
        x: -vw,
        ease: Expo.easeInOut,
      });
      elm.forEach((item) => {
        TweenMax.to(item, 1.2, {
          x: -vw,
          scaleX: 1,
          delay: delay_time,
          ease: Expo.easeInOut,
        });
        delay_time += 0.04;
        item.addEventListener("click", () => {
          document.body.className = "";
        });
      });
    } else {
      TweenMax.to(nav, 0.8, {
        x: 0,
        ease: Expo.easeInOut,
      });
      elm.forEach((item) => {
        TweenMax.to(item, 1, {
          x: 0,
          delay: delay_time,
          ease: Expo.easeInOut,
        });
        delay_time += 0.02;
      });
    }
  }

  const links = document.querySelectorAll(".header__menu a");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      body.classList.remove("menu-open");
      const href = this.getAttribute("href");


      const path = window.location.pathname;
      if(path == "/index.html" || path == "/") {
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      else {
        location.replace("/" + href);
      }
      checkMenu();
    });
  }

  btnMoblie.addEventListener("click", function () {
    body.classList.toggle("menu-open");

    checkMenu();
  });
}
menuMobile();

/*--------------------------------------------------
EFFECT TITLE
----------------------------------------------------*/
const effectTitle = function (time) {
  gsap.utils.toArray(".section").forEach((container) => {
    const lineBar = container.querySelector(".ttl-bar");
    const title = container.querySelector(".h2-ttl-line");

    const timeline = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "expo",
      },
      scrollTrigger: {
        trigger: container,
        start: "top center",
      },
    });
    timeline.fromTo(lineBar, {
      width: 0
    }, {
      width: "120px"
    }, time);
    timeline.fromTo(title, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    }, time + 0.3);
  });
}

/*--------------------------------------------------
LOADING SCREEN
----------------------------------------------------*/
const loadingScreen = function () {
  var loading = document.getElementById("loading");
  var progressBar = document.getElementById("progress-bar_bg");

  setTimeout(() => {
    TweenLite.fromTo(
      loading,
      0.6, {
      immediateRender: false,
      x: "0%",
      ease: "Power4.easeIn",
    }, {
      x: "100%",
    },
      0
    );
  }, 2500);

  TweenLite.fromTo(
    progressBar,
    1, {
    width: 0
  }, {
    width: "100%",
    duration: 1
  }
  );
}

/*--------------------------------------------------
WOW.JS
----------------------------------------------------*/
const runWow = function () {
  wow = new WOW(
    {
      mobile: false,
    }
  )
  wow.init();
}

/*--------------------------------------------------
FUNCTIONS LOAD PROJECTS
----------------------------------------------------*/
const getItem = function (list) {
  var rs = list.map((i) => "<li>" + i.tagname + "</li>");
  return rs;
}

const getTech = function (list) {
  var rs = list.map((i) => "<li>" + i.technicalName + "</li>");
  return rs;
}

