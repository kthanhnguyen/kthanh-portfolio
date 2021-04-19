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

window.addEventListener("load", function () {
  loadingScreen();

  effectTitle();
});


function loadingScreen() {
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



function effectTitle() {
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
    });
  });
}