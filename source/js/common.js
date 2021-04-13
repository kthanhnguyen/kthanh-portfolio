gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function () {
  loadingScreen();

  new WOW().init();

  aciveMenu();
  window.addEventListener('scroll', aciveMenu);

  menuMobile();
  window.addEventListener('resize', menuMobile);

  pageTop();
  effectTitle();
})

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
  const links = document.querySelectorAll('.header__menu a');
  const sections = document.querySelectorAll('.page-section');

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');


  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth"
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
        ease: Expo.easeInOut
      });
      elm.forEach(item => {
        TweenMax.to(item, 1.2, {
          x: -vw,
          scaleX: 1,
          delay: delay_time,
          ease: Expo.easeInOut
        });
        delay_time += .04;
        item.addEventListener('click', () => {
          document.body.className = "";
        })
      })
    } else {
      TweenMax.to(nav, 0.8, {
        x: 0,
        ease: Expo.easeInOut
      });
      elm.forEach(item => {
        TweenMax.to(item, 1, {
          x: 0,
          delay: delay_time,
          ease: Expo.easeInOut
        });
        delay_time += .02;
      })
    }
  })
}


function pageTop() {
  var top = document.getElementById('pageToTop');

  top.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  var last_pos = 0;

  window.addEventListener("scroll", function(){
    var current_pos = document.documentElement.scrollTop || document.body.scrollTop;

    if (current_pos < last_pos || current_pos == 0) {
      top.classList.remove("show");
    } else if (current_pos > last_pos) {
      top.classList.add("show");
    }
    last_pos = current_pos;
  })
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
    timeline
      .fromTo(
        lineBar, { width: 0 }, { width: "120px" }
      );
  })
}