gsap.registerPlugin(ScrollTrigger);

function limit(c){
  return this.filter((x,i)=>{
      if(i<=(c-1)){return true}
  })
}
  
Array.prototype.limit= limit;

function skip(c){
  return this.filter((x,i)=>{
  if(i>(c-1)){return true}
  })
}

Array.prototype.skip = skip;

window.addEventListener("load", function () {
  loadingScreen();

  aciveMenu();
  window.addEventListener("scroll", aciveMenu);

  menuMobile();
  window.addEventListener("resize", menuMobile);

  effectTitle();
});

function loadingScreen() {
  var loadingScreen = document.getElementById("loading");
  var progressBar = document.getElementById("progress-bar_bg");

  setTimeout(() => {
    TweenLite.fromTo(
      loadingScreen,
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