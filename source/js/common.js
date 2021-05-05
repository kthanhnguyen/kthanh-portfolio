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
HEADER NAV PAGE CHILD
----------------------------------------------------*/
const menuChild = function () {
  const menu = document.querySelector(".menu-toggle");
  menu.addEventListener("click", function () {
    document.body.classList.toggle("open");
  })
}

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

