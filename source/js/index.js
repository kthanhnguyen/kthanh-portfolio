gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  loadingScreen();

  aciveMenu();
  window.addEventListener("scroll", aciveMenu);

  menuMobile();
  window.addEventListener("resize", menuMobile);

  mainVisual();

  effectTitle();
  animation();

  bgBlock();
  tagSkilks();

  getDataProject();

  fullPageScroll();
});

function loadingScreen() {
  var loadingScreen = document.getElementById("loading");
  var progressBar = document.getElementById("progress-bar_bg");

  setTimeout(() => {
    TweenLite.fromTo(
      loadingScreen,
      0.6,
      {
        immediateRender: false,
        x: "0%",
        ease: "Power4.easeIn",
      },
      {
        x: "100%",
      },
      0
    );
  }, 2500);

  TweenLite.fromTo(
    progressBar,
    1,
    { width: 0 },
    { width: "100%", duration: 1 }
  );
}

function aciveMenu() {
  const links = document.querySelectorAll(".header__menu a");
  const sections = document.querySelectorAll(".section");

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

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
    timeline.fromTo(lineBar, { width: 0 }, { width: "120px" });
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
        rvtext,
        {
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
  // var bgBlockLeft = document.querySelector(".bg-block--left .bg-block__content");
  // var bg = document.querySelector(".bg-block--right");
  var bgBlockRight = document.querySelector("bg-block__content");

  const timeBg = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "Power4.easeIn",
    },
    scrollTrigger: {
      trigger: bgBlock,
      start: "top center",
    },
  });
  timeBg.fromTo(
    bgBlockRight,
    {
      immediateRender: false,
      x: "100%",
      ease: "Power4.easeIn",
    },
    {
      x: "0",
    },
    0.5
  );

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

    var projectBody = document.querySelector(".portfolio__list");
    var second = 0;
    var projectItem = _json.map((item) => {
      second += 0.1;
      return (
        '<div class="grid-md-4 wow fadeInUp" data-wow-delay="' +
        second +
        's">' +
        '<div class="image item" data-modal="modal-' +
        item.id +
        '">' +
        '<div class="bar">' +
        "<h2>" +
        item.name +
        "</h2><i></i>" +
        "</div>" +
        '<div class="main">' +
        '  <div class="back"><img src="' +
        item.imgMain +
        '" alt=""></div>' +
        ' <div class="tags">' +
        "    <div>" +
        "      <ul>" +
        getItem(item.tags).join("") +
        "</ul>" +
        "    </div>" +
        "  </div>" +
        '  <div class="imgs"></div>' +
        " </div>" +
        "</div>" +
        "</div>"
      );
    });

    projectBody.innerHTML += projectItem.join("");

    openModal();
  });
}

function getModalSlider(id, list) {
  var rs = list.map((i) => {
    return (
      '<div class="detail__slide-item"><img src="/images/project/' +
      id +
      "/" +
      i.imgname +
      '.png" alt=""></div>'
    );
  });
  return rs;
}

function openModal() {
  var jsonPath = "/data/data.json";
  var _json = "";

  $.getJSON(jsonPath, function (data) {
    _json = data;

    var modalBody = document.querySelector(".modal-block");

    var modalItem = _json.map((item) => {
      return (
        '<div class="modal" id="modal-' +
        item.id +
        '">' +
        '<div class="modal__background">' +
        '  <div class="modal__content">' +
        '    <span class="modal__close">×</span>' +
        '    <div class="detail">' +
        '      <div class="detail__name">' +
        item.name +
        "</div>" +
        '      <div class="detail__share">' +
        '        <a href="' +
        item.link +
        '" target="_blank" class="btn-4">' +
        '          <svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">' +
        '            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#e31b6d"></path>' +
        "          </svg>VISITS THIS WEBSITE" +
        "        </a>" +
        "      </div>" +
        '      <div class="detail__slide">' +
        getModalSlider(item.id, item.listImgs).join("") +
        "</div>" +
        '      <div class="detail__info">' +
        "        <h2>About this project</h2>" +
        "        <p>" +
        item.about.aboutTop +
        "</p>" +
        "        <hr>" +
        "        <p>" +
        item.about.aboutBottom +
        "</p>" +
        "      </div>" +
        '      <div class="detail__info">' +
        "        <h2>Technical Sheet</h2>" +
        "        <p><em>Code technologies I got involved while working on this project</em></p>" +
        "        <hr>" +
        '        <ul class="detail__keywords">' +
        "          <li>Front-End Development</li>" +
        "          <li>Javascript ES6</li>" +
        "          <li>HTML5</li>" +
        "          <li>CSS3 preprocessed with SCSS</li>" +
        "        </ul>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        " </div>" +
        " </div>"
      );
    });

    modalBody.innerHTML += modalItem.join("");

    $(".detail__slide").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      nextArrow: '<div class="slick-next"><span></span></div>',
      prevArrow: '<div class="slick-prev"><span></span></div>',
    });
  });

  var btn = document.querySelectorAll(".portfolio .item");

  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      modal = document.getElementById(this.dataset.modal);
      modal.classList.remove("modal--out");
      modal.classList.add("modal--open");
      document.body.classList.add("modal-active");
      document.body.style.paddingRight = "17px";

      /* close modal */
      var modals = document.querySelectorAll(".modal");
      var spans = document.querySelectorAll(".modal__close");
      for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
          modals.forEach((index) => {
            if (index.classList.contains("modal--open")) {
              index.classList.add("modal--out");
              index.classList.remove("modal--open");
              document.body.classList.remove("modal-active");
              document.body.style.paddingRight = "0";
            }
          });
        };

        window.onclick = function (event) {
          if (event.target.classList.contains("modal__background")) {
            modals.forEach((index) => {
              if (index.classList.contains("modal--open")) {
                index.classList.add("modal--out");
                index.classList.remove("modal--open");
                document.body.classList.remove("modal-active");
                document.body.style.paddingRight = "0";
              }
            });
          }
        };
      }
    };
  }
}

function fullPageScroll() {
  if ($("#pagescroll").length > 0) {
    $("#pagescroll").fullpage({
      navigation: false,
      autoScrolling: true,
      scrollBar: true,
      animateAnchor: true,
      css3: true,
      verticalCentered: true,
      afterRender: function (index) {
        new WOW().init();
      },
    });
  }
}
