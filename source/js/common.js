$(document).ready(function () {
  aciveMenu();
  menuMobile();
});

function aciveMenu() {
  $("a[href*=\\#]").bind("click", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    $("html, body")
      .stop()
      .animate({
          scrollTop: $(target).offset().top,
        },
        600
      );

    return false;
  });
  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();

      $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".header__menu a.active").removeClass("active");
          $(".header__menu a").eq(i).addClass("active");
        }
      });
    })
    .scroll();
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