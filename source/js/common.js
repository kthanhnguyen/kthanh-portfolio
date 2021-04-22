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

  var header = document.querySelector(".header-child");
  var sticky = header.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header-child--sticky");
    } else {
      header.classList.remove("header-child--sticky");
    }
  };
}

/** Effect Title */
const effectTitle = function(time) {
  gsap.utils.toArray(".page-section").forEach((container) => {
    const lineBar = container.querySelector(".ttl-bar");

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
  var rs = list.map((i) => {
    return "<li>" + i.tagname + "</li>";
  });
  return rs;
}

const getTech = function(list) {
  var rs = list.map((i) => {
    return "<li>" + i.technicalName + "</li>";
  });
  return rs;
}