gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
  animation();
  mainVisual();
  aciveMenu();
  tagSkilks();
  getDataProject();

})

function animation() {
  const containers = document.querySelectorAll('.about__item');

  gsap.utils.toArray('.about__item').forEach(container => {
    const rvimg = container.querySelector('.about__img');
    const rvtext = container.querySelector('.about__text');
    const image = container.querySelector('about__img');

    const timeline = gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'slow'
      },
      scrollTrigger: {
        trigger: container,
        start: 'top center'
      }
    });
    timeline
      .to(rvimg, {
        xPercent: -100
      })
      .to(rvtext, {
        xPercent: 100,
        ease: 'power2.inOut'
      }, '-=2')
      .fromTo(image, {
        scale: 2
      }, {
        scale: 1
      }, 0.3);

  });
}

function mainVisual() {
  const text = document.querySelector(".mainVisual__title");
  const sub = document.querySelector(".mainVisual__sub");
  const icon = document.querySelector(".mainVisual__mouse-icon");

  const particlesJSON = {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "/images/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        // "onhover": {
        //   "enable": true,
        //   "mode": "repulse"
        // },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  particlesJS("particles", particlesJSON);

  // mouse icon animation
  const iconTl = gsap.timeline({
    repeat: -1,
    paused: true
  });
  iconTl
    .to(
      "#scroll", {
        y: 20,
        autoAlpha: 0,
        transformOrigin: "50% 100%",
        duration: 0.7
      },
      "icon"
    )
    .to("#outline", {
      y: 8,
      duration: 0.7
    }, "icon")
    .to("#outline", {
      y: 0,
      duration: 0.7
    }, "icon+=0.7");

  // Hero Parallax
  const tl = gsap.timeline({
    defaults: {
      ease: "none",
      transformOrigin: "50% 50%"
    },
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.utils.toArray("img").forEach((layer) => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, {
      y: -movement
    }, 0);
  });

  tl.to(
      text, {
        y: -text.offsetHeight * text.dataset.depth,
        autoAlpha: 0,
        scale: 1.08,
        duration: 0.2
      },
      0
    )
    .to(
      sub, {
        y: -sub.offsetHeight * sub.dataset.depth,
        autoAlpha: 0,
        scale: 1.05,
        duration: 0.2
      },
      0.06
    )
    .to(
      icon, {
        y: -icon.offsetHeight * icon.dataset.depth,
        autoAlpha: 0,
        duration: 0.2
      },
      0
    );
}

function aciveMenu() {
  $('a[href*=\\#]').bind('click', function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600);

    return false;
  });
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.header__menu a.active').removeClass('active');
        $('.header__menu a').eq(i).addClass('active');
      }
    });
  }).scroll();
}

function tagSkilks() {
  if(!$('#myCanvas').tagcanvas({
    textColour: '#ffffff',
    outlineThickness: 0.5,
    outlineColour: '#FE0853',
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: "sphere",
    zoom: 0.9,
    noSelect: true,
    textFont: null,
    pinchZoom: true,
    freezeDecel: true,
    fadeIn: 3000,
    initial: [0.3, -0.1],
    depth: 1.4
  },'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
}

function getItem(list) {
  var rs = list.map((i) => {
    return '<li>'+ i.tagname +'</li>';
  })
  return rs;
}

function getDataProject() {
  var jsonPath = '/data/data.json';
	var _json = '';

	$.getJSON(jsonPath, function(data){
		_json = data;

    var projectBody = $(".portfolio__list");

    var projectItem = _json.map((item) => {  
      return '<div class="grid-md-4">'
          + '<div class="image item" data-modal="'+ item.id +'">'
          + '<div class="bar">'
          +  '<h2>' + item.name + '</h2><i></i>'
          + '</div>'
          + '<div class="main">'
          + '  <div class="back"><img src="'+ item.imgMain +'" alt=""></div>'
          + ' <div class="tags">'
          + '    <div>'
          + '      <ul>' + getItem(item.tags) + '</ul>'
          + '    </div>'
          + '  </div>'
          + '  <div class="imgs"></div>'
          + ' </div>'
          + '</div>'
          + '</div>';
    });

    projectBody.html(projectItem);

    openModal();
	});
}

function openModal() {
  var jsonPath = '/data/data.json';
	var _json = '';

  $.getJSON(jsonPath, function(data){
		_json = data;

    var modalBody = $(".modal-block");



    var modalItem = _json.map((item) => {  
      return '<div class="modal" id="modal-'+ item.id +'">'
      + '<div class="modal__background">'
      + '  <div class="modal__content">'
      + '    <span class="modal__close">×</span>'
      + '    <div class="detail">'
      + '      <div class="detail__name">'+ item.name +'</div>'
      + '      <div class="detail__share">'
      + '        <a href="'+ item.link +'" target="_blank" class="btn-4">'
      + '          <svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">'
      + '            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#e31b6d"></path>'
      + '          </svg>VISITS THIS WEBSITE'
      + '        </a>'
      + '      </div>'
      + '      <div class="detail__slide">'
      + '        <div class="detail__slide-item"><img src="/images/project/01/01.png" alt=""></div>'
      + '        <div class="detail__slide-item"><img src="/images/project/01/02.png" alt=""></div>'
      + '        <div class="detail__slide-item"><img src="/images/project/01/03.png" alt=""></div>'
      + '        <div class="detail__slide-item"><img src="/images/project/01/04.png" alt=""></div>'
      + '      </div>'
      + '      <div class="detail__info">'
      + '        <h2>About this project</h2>'
      + '        <p>Project to buy online courses.</p>'
      + '        <hr>'
      + '        <p>This project I undertake the design, interface, and functionality of the product. The project uses Firebase to manage data.</p>'
      + '      </div>'
      + '      <div class="detail__info">'
      + '        <h2>Technical Sheet</h2>'
      + '        <p><em>Code technologies I got involved while working on this project</em></p>'
      + '        <hr>'
      + '        <ul class="detail__keywords">'
      + '          <li>Front-End Development</li>'
      + '          <li>Javascript ES6</li>'
      + '          <li>HTML5</li>'
      + '          <li>CSS3 preprocessed with SCSS</li>'
      + '        </ul>'
      + '      </div>'
      + '    </div>'
      + '  </div>'
      + ' </div>'
      + ' </div>';
    });

    modalBody.html(modalItem);

    $('.detail__slide').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      nextArrow: '<div class="slick-next"><span></span></div>',
      prevArrow: '<div class="slick-prev"><span></span></div>',
    });
	});

  $('.portfolio__list .item').click(function(){
    var modalId = $(this).data('modal');
    var modalClass = "#modal-" + modalId;
    var modal = $(modalClass);

    modal.removeClass('modal--out').addClass('modal--open');
    $('body').addClass('modal-active');
    $('body').css({ "padding-right": "17px" });
  }); 



  // $('.modal .modal__close').each((close) => {
  //   close.click(function(){
  //     $('.modal').map((modal) => {
  //       if(modal.hasClass("modal--open")){
  //         $(this).addClass('modal--out').removeClass('modal--open');
  //         $('body').removeClass('modal-active');
  //         $('body').css({ "padding-right": "17px" });
  //       }
  //     })
  //   })
  // })
  
  // $('.modal__close').click(function(){
  //   console.log(1);
  //   $(this).closest(".modal").addClass('modal--out').removeClass('modal--open');
  //   $('body').removeClass('modal-active');
  //   $('body').css({ "padding-right": "0" });
  // });

  $('.modal__background').click(function(){
    $(this).closest(".modal").addClass('modal--out').removeClass('modal--open');
    $('body').removeClass('modal-active');
    $('body').css({ "padding-right": "0" });
  });


}