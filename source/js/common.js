gsap.registerPlugin(ScrollTrigger);

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


/* Header menu page child */
const menuChild = function() {
  const menu = document.querySelector(".menu-toggle");
  menu.addEventListener("click", function(){
    document.body.classList.toggle("open");
  })
}

/** Effect Title */
const effectTitle = function(time) {
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

/** Loading screen */
const loadingScreen = function() {
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


/** Loading Wow.js */
const runWow = function() {
  wow = new WOW(
    {
      mobile: false,
    }
  )
  wow.init();
}

/** function load projects */
const getItem = function(list) {
  var rs = list.map((i) => "<li>" + i.tagname + "</li>");
  return rs;
}

const getTech = function(list) {
  var rs = list.map((i) => "<li>" + i.technicalName + "</li>");
  return rs;
}