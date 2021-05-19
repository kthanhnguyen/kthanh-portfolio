!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,f="fp-completely",d="fp-section",v="."+d,p=v+u,h="fp-tableCell",g="."+h,m="fp-auto-height",S="fp-normal-scroll",b="#fp-nav",w="fp-slide",y="."+w,E=y+u,L="fp-slides",x="."+L,A="fp-slidesContainer",T="."+A,k="fp-table",O="fp-slidesNav",M="."+O,C=M+" a",H=".fp-controlArrow",I="fp-prev",B=H+".fp-prev",R=H+".fp-next";function N(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function z(e,n){return(n=1<arguments.length?n:t)?n.querySelectorAll(e):null}function j(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=j(e[r],o[r]))}return e}function P(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function D(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function V(){return e.innerWidth}function W(e,t){var n;for(n in e=q(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++)e[o].style[n]=t[n];return e}function Y(e,t,n){for(var o=e[n];o&&!he(o,t);)o=o[n];return o}function F(e,t){return Y(e,t,"previousElementSibling")}function U(e,t){return Y(e,t,"nextElementSibling")}function X(e){return e.previousElementSibling}function K(e){return e.nextElementSibling}function _(e){return e[e.length-1]}function $(e,t){e=J(e)?e[0]:e;for(var n=null!=t?z(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function q(e){return J(e)?e:[e]}function Q(e){e=q(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function G(e){e=q(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function J(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Z(e,t){e=q(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ee(e,t){e=q(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function te(e,t){t.appendChild(e)}function ne(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function oe(e,t){ne(e,t,!0)}function re(e,t){for("string"==typeof t&&(t=me(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ie(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function le(e,t){return e&&1===e.nodeType?he(e,t)?e:le(e.parentNode,t):null}function ae(e,t){ce(e,e.nextSibling,t)}function se(e,t){ce(e,e,t)}function ce(e,t,n){J(n)||("string"==typeof n&&(n=me(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ue(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function fe(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function de(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ve(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function pe(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function he(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function ge(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function me(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Se(e){e=q(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function be(e,t,n){for(var o=e[n],r=[];o;)(he(o,t)||null==t)&&r.push(o),o=o[n];return r}function we(e,t){return be(e,t,"nextElementSibling")}function ye(e,t){return be(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:z,deepExtend:j,hasClass:P,getWindowHeight:D,css:W,until:Y,prevUntil:F,nextUntil:U,prev:X,next:K,last:_,index:$,getList:q,hide:Q,show:G,isArrayOrList:J,addClass:Z,removeClass:ee,appendTo:te,wrap:ne,wrapAll:oe,wrapInner:re,unwrap:ie,closest:le,after:ae,before:se,insertBefore:ce,getScrollTop:ue,siblings:fe,preventDefault:de,isFunction:ve,trigger:pe,matches:he,toggle:ge,createElementFromHTML:me,remove:Se,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:be,nextAll:we,prevAll:ye,showError:N},function(Y,q){var J=q&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(q.licenseKey)||-1<t.domain.indexOf("alvarotrigo.com"),ne=z("html, body"),ce=z("html")[0],be=z("body")[0];if(!P(ce,a)){var Ee={};q=j({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof Y?z(Y)[0]:Y,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},q);var Le,xe,Ae,Te,ke=!1,Oe=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Me="ontouchstart"in e||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,Ce="string"==typeof Y?z(Y)[0]:Y,He=D(),Ie=V(),Be=!1,Re=!0,Ne=!0,ze=[],je={m:{up:!0,down:!0,left:!0,right:!0}};je.k=j({},je.m);var Pe,De,Ve,We,Ye,Fe,Ue,Xe,Ke,_e=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},$e={touchmove:"ontouchmove"in e?"touchmove":_e.move,touchstart:"ontouchstart"in e?"touchstart":_e.down},qe='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Qe=!1;try{var Ge=Object.defineProperty({},"passive",{get:function(){Qe=!0}});e.addEventListener("testPassive",null,Ge),e.removeEventListener("testPassive",null,Ge)}catch(Y){}var Je,Ze,et,tt=j({},q),nt=!1,ot=!0,rt=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Xn(),e.fp_easings=j(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Ce&&(Ee.version="3.1.1",Ee.setAutoScrolling=ht,Ee.setRecordHistory=gt,Ee.setScrollingSpeed=mt,Ee.setFitToSection=St,Ee.setLockAnchors=function(e){q.lockAnchors=e},Ee.setMouseWheelScrolling=bt,Ee.setAllowScrolling=wt,Ee.setKeyboardScrolling=Et,Ee.moveSectionUp=Lt,Ee.moveSectionDown=xt,Ee.silentMoveTo=At,Ee.moveTo=Tt,Ee.moveSlideRight=kt,Ee.moveSlideLeft=Ot,Ee.fitToSection=Vt,Ee.reBuild=Mt,Ee.setResponsive=Ht,Ee.getFullpageData=function(){return q},Ee.destroy=function(n){ht(!1,"internal"),wt(!0),yt(!1),Et(!1),Z(Ce,l),[Ye,We,De,Fe,Ue,Ke,Ve,et].forEach(function(e){clearTimeout(e)}),e.removeEventListener("scroll",Dt),e.removeEventListener("hashchange",dn),e.removeEventListener("resize",En),t.removeEventListener("keydown",pn),t.removeEventListener("keyup",hn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,It)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Rt,!0)}),n&&(Wn(0),z("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ce).forEach(function(e){nn(e,"src")}),z("img[data-srcset]").forEach(function(e){nn(e,"srcset")}),Se(z(b+", "+M+", "+H)),W(z(v),{height:"","background-color":"",padding:""}),W(z(y),{width:""}),W(Ce,{height:"",position:"","-ms-touch-action":"","touch-action":""}),W(ne,{overflow:"",height:""}),ee(ce,a),ee(be,r),be.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&ee(be,e)}),z(v+", "+y).forEach(function(e){q.scrollOverflowHandler&&q.scrollOverflow&&q.scrollOverflowHandler.remove(e),ee(e,k+" "+c+" "+f),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),P(e,d)&&!nt&&e.removeAttribute("data-anchor")}),Tn(Ce),[g,T,x].forEach(function(e){z(e,Ce).forEach(function(e){ie(e)})}),W(Ce,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[d,w,A].forEach(function(e){ee(z("."+e),e)}))},Ee.getActiveSection=function(){return new qn(z(p)[0])},Ee.getActiveSlide=function(){return Zt(z(E,z(p)[0])[0])},Ee.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<z(q.sectionSelector,Ce).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<z(q.sectionSelector,Ce).length;t++)e.push(0);return e}(),options:q,setAutoScrolling:ht},Ee.shared={afterRenderActions:Pt,isNormalScrollElement:!1},e.fullpage_api=Ee,q.$&&Object.keys(Ee).forEach(function(e){q.$.fn.fullpage[e]=Ee[e]}),q.css3&&(q.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&0<n.length&&"none"!==n}()),q.scrollBar=q.scrollBar||q.hybrid,function(){if(!q.anchors.length){var e="[data-anchor]",t=z(q.sectionSelector.split(",").join(e+",")+e,Ce);t.length&&t.length===z(q.sectionSelector,Ce).length&&(nt=!0,t.forEach(function(e){q.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!q.navigationTooltips.length){var n="[data-tooltip]",o=z(q.sectionSelector.split(",").join(n+",")+n,Ce);o.length&&o.forEach(function(e){q.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){W(Ce,{height:"100%",position:"relative"}),Z(Ce,n),Z(ce,a),He=D(),ee(Ce,l),Z(z(q.sectionSelector,Ce),d),Z(z(q.slideSelector,Ce),w);for(var e=z(v),r=0;r<e.length;r++){var i=r,s=e[r],u=z(y,s),f=u.length;s.setAttribute("data-fp-styles",s.getAttribute("style")),m=s,(S=i)||null!=z(p)[0]||Z(m,c),Te=z(p)[0],W(m,{height:He+"px"}),q.paddingTop&&W(m,{"padding-top":q.paddingTop}),q.paddingBottom&&W(m,{"padding-bottom":q.paddingBottom}),void 0!==q.sectionsColor[S]&&W(m,{"background-color":q.sectionsColor[S]}),void 0!==q.anchors[S]&&m.setAttribute("data-anchor",q.anchors[S]),h=s,g=i,void 0!==q.anchors[g]&&P(h,c)&&kn(q.anchors[g],g),q.menu&&q.css3&&null!=le(z(q.menu)[0],o)&&z(q.menu).forEach(function(e){be.appendChild(e)}),0<f?zt(s,u,f):q.verticalCentered&&Mn(s)}var h,g,m,S;q.fixedElements&&q.css3&&z(q.fixedElements).forEach(function(e){be.appendChild(e)}),q.navigation&&function(){var e=t.createElement("div");e.setAttribute("id","fp-nav");var n=t.createElement("ul");e.appendChild(n),te(e,be);var o=z(b)[0];Z(o,"fp-"+q.navigationPosition),q.showActiveTooltip&&Z(o,"fp-show-active");for(var r="",i=0;i<z(v).length;i++){var l="";q.anchors.length&&(l=q.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+jt(i,"Section")+"</span><span></span></a>";var a=q.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="fp-tooltip fp-'+q.navigationPosition+'">'+a+"</div>"),r+="</li>"}z("ul",o)[0].innerHTML=r,Z(z("a",z("li",z(b)[0])[$(z(p)[0],v)]),c)}(),z('iframe[src*="youtube.com/embed/"]',Ce).forEach(function(e){var t,n;n=(t=e).getAttribute("src"),t.setAttribute("src",n+(/\?/.test(n)?"&":"?")+"enablejsapi=1")}),q.scrollOverflow&&(Pe=q.scrollOverflowHandler.init(q))}(),wt(!0),yt(!0),ht(q.autoScrolling,"internal"),xn(),Pn(),"complete"===t.readyState&&fn(),e.addEventListener("load",fn),q.scrollOverflow||Pt(),function(){for(var e=1;e<4;e++)Ke=setTimeout(Nt,350*e)}(),e.addEventListener("scroll",Dt),e.addEventListener("hashchange",dn),e.addEventListener("focus",function(){Re=!0}),e.addEventListener("blur",function(){Ae=Re=!1}),e.addEventListener("resize",En),t.addEventListener("keydown",pn),t.addEventListener("keyup",hn),["click","touchstart"].forEach(function(e){t.addEventListener(e,It)}),q.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Bt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Bt(e,!0)})));var it=!1,lt=0,at=0,st=0,ct=0,ut=0,ft=(new Date).getTime(),dt=0,vt=0,pt=He;return Ee}function ht(e,t){e||Wn(0),Un("autoScrolling",e,t);var n=z(p)[0];if(q.autoScrolling&&!q.scrollBar)W(ne,{overflow:"hidden",height:"100%"}),gt(tt.recordHistory,"internal"),W(Ce,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Wn(n.offsetTop);else if(W(ne,{overflow:"visible",height:"initial"}),gt(!!q.autoScrolling&&tt.recordHistory,"internal"),W(Ce,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=en(n.offsetTop);o.element.scrollTo(0,o.options)}}function gt(e,t){Un("recordHistory",e,t)}function mt(e,t){Un("scrollingSpeed",e,t)}function St(e,t){Un("fitToSection",e,t)}function bt(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Qe&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",_t,i):t[n](o+r,_t,i)}(),Ce.addEventListener("mousedown",gn),Ce.addEventListener("mouseup",mn)):(t.addEventListener?(t.removeEventListener("mousewheel",_t,!1),t.removeEventListener("wheel",_t,!1),t.removeEventListener("MozMousePixelScroll",_t,!1)):t.detachEvent("onmousewheel",_t),Ce.removeEventListener("mousedown",gn),Ce.removeEventListener("mouseup",mn))}function wt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Fn(e,t,"m")}):Fn(e,"all","m")}function yt(e){e?(bt(!0),function(){if(Oe||Me){q.autoScrolling&&(be.removeEventListener($e.touchmove,Yt,{passive:!1}),be.addEventListener($e.touchmove,Yt,{passive:!1}));var e=q.touchWrapper;e.removeEventListener($e.touchstart,Xt),e.removeEventListener($e.touchmove,Ft,{passive:!1}),e.addEventListener($e.touchstart,Xt),e.addEventListener($e.touchmove,Ft,{passive:!1})}}()):(bt(!1),function(){if(Oe||Me){q.autoScrolling&&(be.removeEventListener($e.touchmove,Ft,{passive:!1}),be.removeEventListener($e.touchmove,Yt,{passive:!1}));var e=q.touchWrapper;e.removeEventListener($e.touchstart,Xt),e.removeEventListener($e.touchmove,Ft,{passive:!1})}}())}function Et(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Fn(e,t,"k")}):(Fn(e,"all","k"),q.keyboardScrolling=e)}function Lt(){var e=F(z(p)[0],v);e||!q.loopTop&&!q.continuousVertical||(e=_(z(v))),null!=e&&Qt(e,null,!0)}function xt(){var e=U(z(p)[0],v);e||!q.loopBottom&&!q.continuousVertical||(e=z(v)[0]),null!=e&&Qt(e,null,!1)}function At(e,t){mt(0,"internal"),Tt(e,t),mt(tt.scrollingSpeed,"internal")}function Tt(e,t){var n=In(e);void 0!==t?Bn(e,t):null!=n&&Qt(n)}function kt(e){$t("right",e)}function Ot(e){$t("left",e)}function Mt(t){if(!P(Ce,l)){Be=!0,He=D(),Ie=V();for(var n=z(v),o=0;o<n.length;++o){var r=n[o],i=z(x,r)[0],a=z(y,r);q.verticalCentered&&W(z(g,r),{height:Cn(r)+"px"}),W(r,{height:He+"px"}),1<a.length&&wn(i,z(E,i)[0])}q.scrollOverflow&&Pe.createScrollBarForAll();var s=$(z(p)[0],v);s&&At(s+1),Be=!1,ve(q.afterResize)&&t&&q.afterResize.call(Ce,e.innerWidth,e.innerHeight),ve(q.afterReBuild)&&!t&&q.afterReBuild.call(Ce)}}function Ct(){return P(be,r)}function Ht(e){var t=Ct();e?t||(ht(!1,"internal"),St(!1,"internal"),Q(z(b)),Z(be,r),ve(q.afterResponsive)&&q.afterResponsive.call(Ce,e),q.scrollOverflow&&Pe.createScrollBarForAll()):t&&(ht(tt.autoScrolling,"internal"),St(tt.autoScrolling,"internal"),G(z(b)),ee(be,r),ve(q.afterResponsive)&&q.afterResponsive.call(Ce,e))}function It(e){var t=e.target;t&&le(t,b+" a")?function(e){de(e);var t=$(le(this,b+" li"));Qt(z(v)[t])}.call(t,e):he(t,".fp-tooltip")?function(){pe(X(this),"click")}.call(t):he(t,H)?function(){var e=le(this,v);P(this,I)?je.m.left&&Ot(e):je.m.right&&kt(e)}.call(t,e):he(t,C)||null!=le(t,C)?function(e){de(e);var t=z(x,le(this,v))[0];wn(t,z(y,t)[$(le(this,"li"))])}.call(t,e):le(t,q.menu+" [data-menuanchor]")&&function(e){!z(q.menu)[0]||!q.lockAnchors&&q.anchors.length||(de(e),Tt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Bt(e,n){t["fp_"+e]=n,t.addEventListener(e,Rt,!0)}function Rt(e){var n=e.type,o=!1,r=q.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return yt(!0),void(r&&q.scrollOverflowHandler.setIscroll(i,!0));"touchend"===n&&(ot=!1,setTimeout(function(){ot=!0},800)),("mouseenter"!==n||ot)&&(q.normalScrollElements.split(",").forEach(function(e){if(!o){var t=he(i,e),n=le(i,e);(t||n)&&(Ee.shared.isNormalScrollElement||(yt(!1),r&&q.scrollOverflowHandler.setIscroll(i,!1)),Ee.shared.isNormalScrollElement=!0,o=!0)}}),!o&&Ee.shared.isNormalScrollElement&&(yt(!0),r&&q.scrollOverflowHandler.setIscroll(i,!0),Ee.shared.isNormalScrollElement=!1))}function Nt(){var e=D(),t=V();He===e&&Ie===t||(He=e,Ie=t,Mt(!0))}function zt(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=L,oe(n,l);var a,s,u=t.createElement("div");u.className=A,oe(n,u),W(z(T,e),{width:r+"%"}),1<o&&(q.controlArrows&&(a=e,s=[me('<div class="fp-controlArrow fp-prev"></div>'),me('<div class="fp-controlArrow fp-next"></div>')],ae(z(x,a)[0],s),"#fff"!==q.controlArrowColor&&(W(z(R,a),{"border-color":"transparent transparent transparent "+q.controlArrowColor}),W(z(B,a),{"border-color":"transparent "+q.controlArrowColor+" transparent transparent"})),q.loopHorizontal||Q(z(B,a))),q.slidesNavigation&&function(e,t){te(me('<div class="'+O+'"><ul></ul></div>'),e);var n=z(M,e)[0];Z(n,"fp-"+q.slidesNavPosition);for(var o=0;o<t;o++){te(me('<li><a href="#"><span class="fp-sr-only">'+jt(o,"Slide",z(y,e)[o])+"</span><span></span></a></li>"),z("ul",n)[0])}W(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Z(z("a",z("li",n)[0]),c)}(e,o)),n.forEach(function(e){W(e,{width:i+"%"}),q.verticalCentered&&Mn(e)});var f=z(E,e)[0];null!=f&&(0!==$(z(p),v)||0===$(z(p),v)&&0!==$(f))?Vn(f,"internal"):Z(n[0],c)}function jt(e,t,n){var o="Section"===t?q.anchors[e]:n.getAttribute("data-anchor");return q.navigationTooltips[e]||o||t+" "+(e+1)}function Pt(){var e,t,n=z(p)[0];Z(n,f),rn(n),on(),an(n),q.scrollOverflow&&q.scrollOverflowHandler.afterLoad(),t=In((e=vn()).section),e.section&&t&&(void 0===t||$(t)!==$(Te))||!ve(q.afterLoad)||Gt("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:$(n,v)}),ve(q.afterRender)&&Gt("afterRender")}function Dt(){var e,t,n,o,r,i;if(!Be&&(!q.autoScrolling||q.scrollBar)){var l=ue(),a=(i=lt<(r=l)?"down":"up",dt=lt=r,i),s=0,u=l+D()/2,d=be.offsetHeight-D()===l,h=z(v);if(d)s=h.length-1;else if(l)for(var g=0;g<h.length;++g)h[g].offsetTop<=u&&(s=g);else s=0;if(t=a,o=(n=z(p)[0].offsetTop)+D(),("up"!=t?n<=ue():o>=ue()+D())&&(P(z(p)[0],f)||(Z(z(p)[0],f),ee(fe(z(p)[0]),f))),!P(e=h[s],c)){it=!0;var m,S,b=z(p)[0],w=$(b,v)+1,y=On(e),L=e.getAttribute("data-anchor"),x=$(e,v)+1,A=z(E,e)[0],T={activeSection:b,sectionIndex:x-1,anchorLink:L,element:e,leavingSection:w,direction:y};A&&(S=A.getAttribute("data-anchor"),m=$(A)),Ne&&(Z(e,c),ee(fe(e),c),ve(q.onLeave)&&Gt("onLeave",T),ve(q.afterLoad)&&Gt("afterLoad",T),cn(b),rn(e),an(e),kn(L,x-1),q.anchors.length&&(Le=L),Nn(m,S,L)),clearTimeout(Fe),Fe=setTimeout(function(){it=!1},100)}q.fitToSection&&(clearTimeout(Ue),Ue=setTimeout(function(){q.fitToSection&&z(p)[0].offsetHeight<=He&&Vt()},q.fitToSectionDelay))}}function Vt(){Ne&&(Be=!0,Qt(z(p)[0]),Be=!1)}function Wt(e){if(je.m[e]){var t="down"===e?xt:Lt;if(q.scrollOverflow){var n=q.scrollOverflowHandler.scrollable(z(p)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!q.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Yt(e){q.autoScrolling&&Ut(e)&&je.m.up&&de(e)}function Ft(t){var n=le(t.target,v)||z(p)[0];if(Ut(t)){q.autoScrolling&&de(t);var o=Dn(t);ct=o.y,ut=o.x,z(x,n).length&&Math.abs(st-ut)>Math.abs(at-ct)?!ke&&Math.abs(st-ut)>V()/100*q.touchSensitivity&&(ut<st?je.m.right&&kt(n):je.m.left&&Ot(n)):q.autoScrolling&&Ne&&Math.abs(at-ct)>e.innerHeight/100*q.touchSensitivity&&(ct<at?Wt("down"):at<ct&&Wt("up"))}}function Ut(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Xt(e){if(q.fitToSection&&(Je=!1),Ut(e)){var t=Dn(e);at=t.y,st=t.x}}function Kt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function _t(t){var n=(new Date).getTime(),o=P(z(".fp-completely")[0],S);if(!je.m.down&&!je.m.up)return de(t),!1;if(q.autoScrolling&&!Ae&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;149<ze.length&&ze.shift(),ze.push(Math.abs(r)),q.scrollBar&&de(t);var s=n-ft;if(ft=n,200<s&&(ze=[]),Ne){var c=Kt(ze,10);Kt(ze,70)<=c&&a&&Wt(i<0?"down":"up")}return!1}q.fitToSection&&(Je=!1)}function $t(e,t){var n=null==t?z(p)[0]:t,o=z(x,n)[0];if(!(null==o||ke||z(y,o).length<2)){var r=z(E,o)[0],i=null;if(null==(i="left"===e?F(r,y):U(r,y))){if(!q.loopHorizontal)return;var l=fe(r);i="left"===e?l[l.length-1]:l[0]}ke=!Ee.test.isTesting,wn(o,i,e)}}function qt(){for(var e=z(E),t=0;t<e.length;t++)Vn(e[t],"internal")}function Qt(e,t,n){if(null!=e){var o,r,i,l,a,s,u,f,d,h={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=dt<(l=i),s=l-He+r,u=q.bigSectionsDestination,He<r?(a||u)&&"bottom"!==u||(l=s):(a||Be&&null==K(o))&&(l=s),dt=l),yMovement:On(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:$(e,v),activeSlide:z(E,e)[0],activeSection:z(p)[0],leavingSection:$(z(p),v)+1,localIsResizing:Be};if(!(h.activeSection==e&&!Be||q.scrollBar&&ue()===h.dtop&&!P(e,m))){if(null!=h.activeSlide&&(f=h.activeSlide.getAttribute("data-anchor"),d=$(h.activeSlide)),!h.localIsResizing){var g=h.yMovement;if(void 0!==n&&(g=n?"up":"down"),h.direction=g,ve(q.onLeave)&&!1===Gt("onLeave",h))return}q.autoScrolling&&q.continuousVertical&&void 0!==h.isMovementUp&&(!h.isMovementUp&&"up"==h.yMovement||h.isMovementUp&&"down"==h.yMovement)&&((S=h).isMovementUp?se(z(p)[0],we(S.activeSection,v)):ae(z(p)[0],ye(S.activeSection,v).reverse()),Wn(z(p)[0].offsetTop),qt(),S.wrapAroundElements=S.activeSection,S.dtop=S.element.offsetTop,S.yMovement=On(S.element),h=S),h.localIsResizing||cn(h.activeSection),q.scrollOverflow&&q.scrollOverflowHandler.beforeLeave(),Z(e,c),ee(fe(e),c),rn(e),q.scrollOverflow&&q.scrollOverflowHandler.onLeave(),Ne=Ee.test.isTesting,Nn(d,f,h.anchorLink,h.sectionIndex),function(e){var t=q.scrollingSpeed<700,n=t?700:q.scrollingSpeed;if(q.css3&&q.autoScrolling&&!q.scrollBar){Hn("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),q.scrollingSpeed?(clearTimeout(We),We=setTimeout(function(){tn(e),Ne=!t},q.scrollingSpeed)):tn(e)}else{var o=en(e.dtop);Ee.test.top=-e.dtop+"px",W(ne,{"scroll-behavior":"unset"}),Kn(o.element,o.options,q.scrollingSpeed,function(){q.scrollBar?setTimeout(function(){tn(e)},30):(tn(e),Ne=!t)})}t&&(clearTimeout(et),et=setTimeout(function(){Ne=!0},n))}(h),Le=h.anchorLink,kn(h.anchorLink,h.sectionIndex)}}var S}function Gt(e,t){var n,o,r,i,l=(o=e,r=t,(i=q.v2compatible?{afterRender:function(){return[Ce]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Jt(z(p)[0]),slide:Zt(z(E,z(p)[0])[0])}},onLeave:function(){return{origin:Jt(r.activeSection),destination:Jt(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Jt(r.section),origin:Zt(r.prevSlide),destination:Zt(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(q.v2compatible){if(!1===q[e].apply(l[0],l.slice(1)))return!1}else if(pe(Ce,e,l),!1===q[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Jt(e){return e?new qn(e):null}function Zt(e){return e?new Qn(e):null}function en(t){var n={};return q.autoScrolling&&!q.scrollBar?(n.options=-t,n.element=z(o)[0]):(n.options=t,n.element=e),n}function tn(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?se(z(v)[0],t.wrapAroundElements):ae(z(v)[z(v).length-1],t.wrapAroundElements),Wn(z(p)[0].offsetTop),qt()),ve(q.afterLoad)&&!e.localIsResizing&&Gt("afterLoad",e),q.scrollOverflow&&q.scrollOverflowHandler.afterLoad(),e.localIsResizing||an(e.element),Z(e.element,f),ee(fe(e.element),f),on(),Ne=!0,ve(e.callback)&&e.callback()}function nn(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function on(){var e=z(".fp-auto-height")[0]||Ct()&&z(".fp-auto-height-responsive")[0];q.lazyLoading&&e&&z(v+":not("+u+")").forEach(function(e){var t,n,o;n=(t=e.getBoundingClientRect()).top,o=t.bottom,(n+2<He&&0<n||2<o&&o<He)&&rn(e)})}function rn(e){q.lazyLoading&&z("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",un(e)).forEach(function(t){if(["src","srcset"].forEach(function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(nn(t,n),t.addEventListener("load",function(){ln(e)}))}),he(t,"source")){var n=le(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){ln(e)})}})}function ln(e){q.scrollOverflow&&(clearTimeout(Ze),Ze=setTimeout(function(){P(be,r)||Pe.createScrollBar(e)},200))}function an(e){var t=un(e);z("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),z('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&sn(e),e.onload=function(){e.hasAttribute("data-autoplay")&&sn(e)}})}function sn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function cn(e){var t=un(e);z("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),z('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function un(e){var t=z(E,e);return t.length&&(e=t[0]),e}function fn(){var e=vn(),t=e.section,n=e.slide;t&&(q.animateAnchor?Bn(t,n):At(t,n))}function dn(){if(!it&&!q.lockAnchors){var e=vn(),t=e.section,n=e.slide,o=void 0===Le,r=void 0===Le&&void 0===n&&!ke;t&&t.length&&(t&&t!==Le&&!o||r||!ke&&xe!=n)&&Bn(t,n)}}function vn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=-1<o.indexOf("#/");t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function pn(e){clearTimeout(Xe);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n,o,r,i,l,a,s=e.shiftKey,c=t.activeElement,u=Sn(un(z(p)[0]));function f(e){return de(e),u[0]?u[0].focus():null}n=e,r=(o=Sn(t)).indexOf(t.activeElement),l=Zt(le(i=o[n.shiftKey?r-1:r+1],y)),a=Jt(le(i,v)),(l||a)&&(c?null==le(c,p+","+p+" "+E)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&de(e))}(e):he(n,"textarea")||he(n,"input")||he(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!q.keyboardScrolling||!q.autoScrolling||(-1<[40,38,32,33,34].indexOf(o)&&de(e),Ae=e.ctrlKey,Xe=setTimeout(function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=he(o,"video")||he(o,"audio");if(Ne||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:je.k.up&&Lt();break;case 32:if(n&&je.k.up&&!r){Lt();break}case 40:case 34:je.k.down&&(32===e.keyCode&&r||xt());break;case 36:je.k.up&&Tt(1);break;case 35:je.k.down&&Tt(z(v).length);break;case 37:je.k.left&&Ot();break;case 39:je.k.right&&kt()}}(e)},150))}function hn(e){Re&&(Ae=e.ctrlKey)}function gn(e){2==e.which&&(vt=e.pageY,Ce.addEventListener("mousemove",bn))}function mn(e){2==e.which&&Ce.removeEventListener("mousemove",bn)}function Sn(e){return[].slice.call(z(qe,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function bn(e){q.autoScrolling&&(Ne&&(e.pageY<vt&&je.m.up?Lt():e.pageY>vt&&je.m.down&&xt()),vt=e.pageY)}function wn(e,t,n){var o,r,i=le(e,v),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:$(t),section:i,sectionIndex:$(i,v),anchorLink:i.getAttribute("data-anchor"),slidesNav:z(M,i)[0],slideAnchor:jn(t),prevSlide:z(E,i)[0],prevSlideIndex:$(z(E,i)[0]),localIsResizing:Be};l.xMovement=(o=l.prevSlideIndex)==(r=l.slideIndex)?"none":r<o?"left":"right",l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(Ne=!1),q.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&ve(q.onSlideLeave)&&!1===Gt("onSlideLeave",l)?ke=!1:(Z(t,c),ee(fe(t),c),l.localIsResizing||(cn(l.prevSlide),rn(t)),!q.loopHorizontal&&q.controlArrows&&(ge(z(B,i),0!==l.slideIndex),ge(z(R,i),null!=K(t))),P(i,c)&&!l.localIsResizing&&Nn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(q.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";Ee.test.translate3dH[t.sectionIndex]=r,W(An(z(T,e)),Yn(r)),Ye=setTimeout(function(){yn(t)},q.scrollingSpeed)}else Ee.test.left[t.sectionIndex]=Math.round(o.left),Kn(e,Math.round(o.left),q.scrollingSpeed,function(){yn(t)})}(e,l))}function yn(e){var t,n;t=e.slidesNav,n=e.slideIndex,q.slidesNavigation&&null!=t&&(ee(z(u,t),c),Z(z("a",z("li",t)[n]),c)),e.localIsResizing||(ve(q.afterSlideLoad)&&Gt("afterSlideLoad",e),Ne=!0,an(e.destiny)),ke=!1}function En(){clearTimeout(De),De=setTimeout(function(){for(var e=0;e<4;e++)Ve=setTimeout(Ln,200*e)},200)}function Ln(){if(Be=!0,xn(),Oe){var e=t.activeElement;if(!he(e,"textarea")&&!he(e,"input")&&!he(e,"select")){var n=D();Math.abs(n-pt)>20*Math.max(pt,n)/100&&(Mt(!0),pt=n)}}else Nt();Be=!1}function xn(){var t=q.responsive||q.responsiveWidth,n=q.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Ht(o||r):t?Ht(o):n&&Ht(r)}function An(e){var t="all "+q.scrollingSpeed+"ms "+q.easingcss3;return ee(e,i),W(e,{"-webkit-transition":t,transition:t})}function Tn(e){return Z(e,i)}function kn(e,t){var n,o,r;n=e,z(q.menu).forEach(function(e){q.menu&&null!=e&&(ee(z(u,e),c),Z(z('[data-menuanchor="'+n+'"]',e),c))}),o=e,r=t,q.navigation&&null!=z(b)[0]&&(ee(z(u,z(b)[0]),c),Z(o?z('a[href="#'+o+'"]',z(b)[0]):z("a",z("li",z(b)[0])[r]),c))}function On(e){var t=$(z(p)[0],v),n=$(e,v);return t==n?"none":n<t?"up":"down"}function Mn(e){if(!P(e,k)){var n=t.createElement("div");n.className=h,n.style.height=Cn(e)+"px",Z(e,k),re(e,n)}}function Cn(e){var t=He;if(q.paddingTop||q.paddingBottom){var n=e;P(n,d)||(n=le(e,v));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=He-o}return t}function Hn(e,t){t?An(Ce):Tn(Ce),W(Ce,Yn(e)),Ee.test.translate3d=e,setTimeout(function(){ee(Ce,i)},10)}function In(e){var t=z(v+'[data-anchor="'+e+'"]',Ce)[0];if(!t){var n=void 0!==e?e-1:0;t=z(v)[n]}return t}function Bn(e,t){var n=In(e);if(null!=n){var o,r,i,l=(null==(i=z(y+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=z(y,r)[o]),i);jn(n)===Le||P(n,c)?Rn(l):Qt(n,function(){Rn(l)})}}function Rn(e){null!=e&&wn(le(e,x),e)}function Nn(e,t,n,o){var r="";q.anchors.length&&!q.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),zn(r+"/"+(xe=t))):(null!=e&&(xe=t),zn(n))),Pn()}function zn(t){if(q.recordHistory)location.hash=t;else if(Oe||Me)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function jn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=$(e);return null==t&&(t=n),t}function Pn(){var e=z(p)[0],t=z(E,e)[0],n=jn(e),o=jn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");be.className=be.className.replace(i,""),Z(be,s+"-"+r)}function Dn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Me&&Ut(e)&&q.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Vn(e,t){mt(0,"internal"),void 0!==t&&(Be=!0),wn(le(e,x),e),void 0!==t&&(Be=!1),mt(tt.scrollingSpeed,"internal")}function Wn(e){var t=Math.round(e);if(q.css3&&q.autoScrolling&&!q.scrollBar)Hn("translate3d(0px, -"+t+"px, 0px)",!1);else if(q.autoScrolling&&!q.scrollBar)W(Ce,{top:-t+"px"}),Ee.test.top=-t+"px";else{var n=en(t);_n(n.element,n.options)}}function Yn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Fn(e,t,n){"all"!==t?je[n][t]=e:Object.keys(je[n]).forEach(function(t){je[n][t]=e})}function Un(e,t,n){q[e]=t,"internal"!==n&&(tt[e]=t)}function Xn(){var e=q.licenseKey,t="font-size: 15px;background:yellow;";J?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(N("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),N("error","https://github.com/alvarotrigo/fullPage.js#options")),P(ce,a)?N("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(q.continuousVertical&&(q.loopTop||q.loopBottom)&&(q.continuousVertical=!1,N("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!q.scrollOverflow||!q.scrollBar&&q.autoScrolling||N("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!q.continuousVertical||!q.scrollBar&&q.autoScrolling||(q.continuousVertical=!1,N("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),q.scrollOverflow&&null==q.scrollOverflowHandler&&(q.scrollOverflow=!1,N("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),rt.forEach(function(e){q[e]&&N("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),q.anchors.forEach(function(e){var t=[].slice.call(z("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(z("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});if(n.length||t.length){N("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&N("error",'"'+e+'" is is being used by another element `'+o+"` property")}}))}function Kn(t,n,o,r){var i,l=(i=t).self!=e&&P(i,L)?i.scrollLeft:!q.autoScrolling||q.scrollBar?ue():i.offsetTop,a=n-l,s=0;Je=!0;var c=function(){if(Je){var i=n;s+=20,o&&(i=e.fp_easings[q.easing](s,l,a,o)),_n(t,i),s<o?setTimeout(c,20):void 0!==r&&r()}else s<o&&r()};c()}function _n(t,n){!q.autoScrolling||q.scrollBar||t.self!=e&&P(t,L)?t.self!=e&&P(t,L)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function $n(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=$(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function qn(e){$n.call(this,e,v)}function Qn(e){$n.call(this,e,y)}Xn()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e}),new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);