window.addEventListener("load", function () {
  aciveMenu();
  window.addEventListener("scroll", aciveMenu);

  menuMobile();
  window.addEventListener("resize", menuMobile);

  mainVisual();

  animation();

  bgBlock();
  tagSkilks();

  getDataProject();

  fullPageScroll();
});

function aciveMenu() {
  const links = document.querySelectorAll(".header__menu a");
  const sections = document.querySelectorAll(".section");

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  }
}

function menuMobile() {
  var btnMoblie = document.getElementById("mobile-link");
  var nav = document.querySelector(".header__menu");
  var vw = window.innerWidth,
    delay_time = 0;
  var elm = document.querySelectorAll(".header__menu li");

  btnMoblie.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");

    if (btnMoblie.classList.contains("active")) {
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
  });
}

function animation() {
  gsap.utils.toArray(".about__item").forEach((container) => {
    const rvimg = container.querySelector(".about__img");
    const rvtext = container.querySelector(".about__text");
    const image = container.querySelector(".about__pic img");

    const timeline = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "slow",
      },
      scrollTrigger: {
        trigger: container,
        start: "top center",
      },
    });
    timeline
      .to(rvimg, {
        xPercent: 100,
      })
      .to(
        rvtext, {
        xPercent: -100,
        ease: "power2.inOut",
      },
        "-=2"
      );
    // .fromTo(
    //   image, {
    //   scale: 2,
    // }, {
    //   scale: 1,
    // },
    //   0.3
    // );
  });
}

function bgBlock() {
  gsap.utils.toArray(".page-section").forEach((container) => {
    const bg = container.querySelector(".bg-block__content");

    const timeBg = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "expo",
      },
      scrollTrigger: {
        trigger: container,
        start: "top center",
      },
    });
    timeBg.fromTo(
      bg, {
      immediateRender: false,
      x: "100%",
      ease: "Power4.easeIn",
    }, {
      x: "0",
    },
      0.5
    );
  });

}

function mainVisual() {
  const particlesJSON = {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        stroke: {
          width: 3,
          color: "#ffffff",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "/images/starburst_white_300_drop_2.png",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 50,
        color: "#ffffff",
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 300,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        // "onhover": {
        //   "enable": true,
        //   "mode": "repulse"
        // },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.2,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  particlesJS("particles", particlesJSON);

  document
    .querySelector(".mainVisual__mouse-icon")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
}

function tagSkilks() {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "#e31b6d",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.9,
      noSelect: true,
      noMouse: true,
      textFont: null,
      pinchZoom: true,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.4,
    });
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById("myCanvasContainer").style.display = "none";
  }
}

function getItem(list) {
  var rs = list.map((i) => {
    return "<li>" + i.tagname + "</li>";
  });
  return rs;
}

function getDataProject() {
  var jsonPath = "/data/data.json";
  var _json = "";

  $.getJSON(jsonPath, function (data) {
    _json = data;

    var projectBody = document.querySelector(".portfolio__pro-list");
    var second = 0;
    var mapSort = _json.sort((a, b) => b.id - a.id);
    var mapLimit = mapSort.limit(6);

    var projectItem = mapLimit.map((item) => {
      second += 0.1;
      return (
        '<div class="grid-md-4 wow fadeInUp" data-wow-delay="' + second + 's">' +
        '<div class="pro-list__item">' +
        '<a href="/detail.html?pid=' + item.id + '">' +
        '<div class="screen"><img src="/images/project/' + item.id + '/main.png" alt="" class="screen-img"></div>' +
        '<p class="pro-name">' + item.name + '</p>' +
        '</a>' +
        '</div>' +
        '</div>'
      );
    });

    projectBody.innerHTML += projectItem.join("");

    var itemImg = document.querySelectorAll(".pro-list__item");
    var imgs = document.querySelectorAll('.screen-img');

    for (var i = 0; i < itemImg.length; i++) {
      itemImg[i].onmouseout = function () {
        imgs.forEach((index) => {
          let imgHeight = index.height;
          index.style.transitionDuration = 0.005 * imgHeight + "s";
        })

      };
      itemImg[i].onmouseover = function () {
        imgs.forEach((index) => {
          let imgHeight = index.height;
          index.style.transitionDuration = 0.001 * imgHeight + "s";

        })
      };
    }
  });
}

function fullPageScroll() {
  if ($("#pagescroll").length > 0) {
    $("#pagescroll").fullpage({
      navigation: false,
      autoScrolling: true,
      scrollBar: true,
      verticalCentered: true,
      responsiveWidth: 768,
      afterRender: function (index) {
        wow = new WOW(
          {
            mobile: false,
          }
        )
        wow.init();
      },
    });
  }
}