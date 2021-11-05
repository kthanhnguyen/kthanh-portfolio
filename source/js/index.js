window.addEventListener("orientationchange resize load", init());

function init() {
  getDataProject();
  loadingScreen();
  effectTitle(0.5);
  fpMenu();

  fullPageScroll();
  mouseIcon();
  bgBlock();
  aboutAnimation();
  tagSkilks();
}




function fpMenu(){
  const body = document.body;
  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
  const menu = body.querySelector(".menu");
  const menuItems = menu.querySelectorAll(".menu__item");
  const menuBorder = menu.querySelector(".menu__border");
  let activeItem = menu.querySelector(".active");

  offsetMenuBorder(activeItem, menuBorder);
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
  })

  function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    if (activeItem == item) return;
    
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
  }
  
  function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  }
  window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
  });
  
}

function fullPageScroll() {
  if (!(isiPhone || isAndroid || isiPad)) {
    new fullpage('#pagescroll', {
      // anchors: ['home-page', 'about-page', 'skills-page', 'projects-page', 'contact-page'],
      menu: '#header__menu',
      navigation: true,
      navigationPosition: 'right',
      menu: '#fp-menu',
      // navigationTooltips: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
      scrollBar: true,
      autoScrolling: true,
      animateAnchor: true,
      afterLoad: function () {
        var secNumber = $('.fp-section.active').index() + 1;

        if (secNumber == 1) {
          document.getElementById("fp-nav").classList.add("home-nav");
        }
        if(secNumber == 2 || secNumber == 3 || secNumber == 4 || secNumber == 5) {
          document.getElementById("fp-nav").classList.remove("home-nav");
        }
        if (secNumber == 4) {
          
          var imgs = document.querySelectorAll('.screen-img');
          imgs.forEach((item) => {
            let imgFirHeight = item.height;
            item.style.transitionDuration = 0.005 * imgFirHeight + "s";
          })
        }
      },
      afterRender: function () {
        runWow();
        
      }
    });
  }
}

function aboutAnimation() {
  gsap.utils.toArray(".about__item").forEach((container) => {
    const rvimg = container.querySelector(".about__img");
    const rvtext = container.querySelector(".about__text");
    const image = container.querySelector(".about__pic img");

    const timeline = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: container,
        start: "top center",
      },
    });
    timeline
      .to(rvimg, {
        xPercent: -100,
      })
      .to(
        rvtext, {
        xPercent: 100
      },
        "-=2"
      )
  });
}

function bgBlock() {
  gsap.utils.toArray(".section").forEach((container) => {
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

function mouseIcon() {
  document.querySelector(".mainVisual__mouse-icon").addEventListener("click", function(e){
    e.preventDefault();
    const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
  })
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

function getDataProject() {
  var jsonPath = "/data/data.json";
  var _json = "";

  $.getJSON(jsonPath, function (data) {
    _json = data;

    var projectBody = document.querySelector(".portfolio__pro-list");
    var second = 0.5;
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