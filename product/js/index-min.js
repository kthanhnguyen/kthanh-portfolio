function init(){loadingScreen(),effectTitle(.5),fullPageScroll(),mouseIcon(),bgBlock(),aboutAnimation(),tagSkilks(),getDataProject()}function fullPageScroll(){isiPhone||isAndroid||isiPad||new fullpage("#pagescroll",{anchors:["home-page","about-page","skills-page","projects-page","contact-page"],menu:"#header__menu",navigation:!0,navigationPosition:"right",navigationTooltips:["Home","About","Skills","Projects","Contact"],scrollBar:!0,autoScrolling:!0,animateAnchor:!0,afterLoad:function(e){var t=$(".fp-section.active").index()+1;(1==t&&document.getElementById("fp-nav").classList.add("home-nav"),2!=t&&3!=t&&4!=t&&5!=t||document.getElementById("fp-nav").classList.remove("home-nav"),4==t)&&document.querySelectorAll(".screen-img").forEach(e=>{let t=e.height;e.style.transitionDuration=.005*t+"s"})},afterRender:function(){runWow()}})}function aboutAnimation(){gsap.utils.toArray(".about__item").forEach(e=>{const t=e.querySelector(".about__img"),o=e.querySelector(".about__text");e.querySelector(".about__pic img");gsap.timeline({defaults:{duration:2,ease:"power2.inOut"},scrollTrigger:{trigger:e,start:"top center"}}).to(t,{xPercent:-100}).to(o,{xPercent:100},"-=2")})}function bgBlock(){gsap.utils.toArray(".section").forEach(e=>{const t=e.querySelector(".bg-block__content");gsap.timeline({defaults:{duration:2,ease:"expo"},scrollTrigger:{trigger:e,start:"top center"}}).fromTo(t,{immediateRender:!1,x:"100%",ease:"Power4.easeIn"},{x:"0"},.5)})}function mouseIcon(){document.querySelector(".mainVisual__mouse-icon").addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href"),o=document.querySelector(t).offsetTop;scroll({top:o,behavior:"smooth"})})}function tagSkilks(){try{TagCanvas.Start("myCanvas","tags",{textColour:"#e31b6d",outlineThickness:.5,outlineColour:"#FE0853",maxSpeed:.06,freezeActive:!0,shuffleTags:!0,shape:"sphere",zoom:.9,noSelect:!0,noMouse:!0,textFont:null,pinchZoom:!0,freezeDecel:!0,fadeIn:3e3,initial:[.3,-.1],depth:1.4})}catch(e){document.getElementById("myCanvasContainer").style.display="none"}}function getDataProject(){var e="";$.getJSON("/data/data.json",function(t){e=t;var o=document.querySelector(".portfolio__pro-list"),n=.5,i=e.sort((e,t)=>t.id-e.id).limit(6).map(e=>'<div class="grid-md-4 wow fadeInUp" data-wow-delay="'+(n+=.1)+'s"><div class="pro-list__item"><a href="/detail.html?pid='+e.id+'"><div class="screen"><img src="/images/project/'+e.id+'/main.png" alt="" class="screen-img"></div><p class="pro-name">'+e.name+"</p></a></div></div>");o.innerHTML+=i.join("");for(var a=document.querySelectorAll(".pro-list__item"),r=document.querySelectorAll(".screen-img"),s=0;s<a.length;s++)a[s].onmouseout=function(){r.forEach(e=>{let t=e.height;e.style.transitionDuration=.005*t+"s"})},a[s].onmouseover=function(){r.forEach(e=>{let t=e.height;e.style.transitionDuration=.001*t+"s"})}})}window.addEventListener("orientationchange resize load",init());