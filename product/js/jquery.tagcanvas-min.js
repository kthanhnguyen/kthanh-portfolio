!function(t){var i,e,s,h,n,a,o,r,l,u,g=Math.abs,c=Math.sin,f=Math.cos,d=Math.max,m=Math.min,p=Math.ceil,w=Math.sqrt,x=Math.pow,v={},T={},y={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},S=document,b={};for(i=0;i<256;++i)e=i.toString(16),i<16&&(e="0"+e),T[e]=T[e.toUpperCase()]=i.toString()+",";function C(t){return void 0!==t}function z(t){return"object"==typeof t&&null!=t}function D(t,i,e){return isNaN(t)?e:m(e,d(i,t))}function A(){return!1}function I(){return(new Date).valueOf()}function M(t){for(var i,e,s=t.length-1;s;)e=~~(Math.random()*s),i=t[s],t[s]=t[e],t[e]=i,--s}function F(t,i,e){this.x=t,this.y=i,this.z=e}function O(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}function k(t,i,e,s,h){var n,a,o,r,l,u=[],g=2/t;for(l=Math.PI*(3-w(5)+(parseFloat(h)?parseFloat(h):0)),n=0;n<t;++n)o=w(1-(a=n*g-1+g/2)*a),r=n*l,u.push([f(r)*o*i,a*e,c(r)*o*s]);return u}function P(t,i,e,s,h,n){var a,o,r,l,u,g,d=[],m=2/t;for(o=Math.PI*(3-w(5)+(parseFloat(n)?parseFloat(n):0)),r=0;r<t;++r)l=r*m-1+m/2,u=f(a=r*o),g=c(a),d.push(i?[l*e,u*s,g*h]:[u*e,l*s,g*h]);return d}function E(t,i,e,s,h,n){var a,o,r,l,u=[],g=2*Math.PI/i;for(o=0;o<i;++o)r=f(a=o*g),l=c(a),u.push(t?[n*e,r*s,l*h]:[r*e,n*s,l*h]);return u}function R(t,i,e,s,h){return P(t,0,i,e,s,h)}function B(t,i,e,s,h){return P(t,1,i,e,s,h)}function N(t,i,e,s,h){return E(0,t,i,e,s,h=isNaN(h)?0:1*h)}function _(t,i,e,s,h){return E(1,t,i,e,s,h=isNaN(h)?0:1*h)}function L(t,i){if(window.G_vmlCanvasManager)return null;var e=S.createElement("canvas");return e.width=t,e.height=i,e}function H(t,i,e,s){var h,n=t.createLinearGradient(0,0,i,0);for(h in s)n.addColorStop(1-h,s[h]);t.fillStyle=n,t.fillRect(0,e,i,1)}function W(t,i,e){var s,h,n,a,o=1,r=t.weightGradient;if(t.gCanvas)h=t.gCanvas.getContext("2d"),o=t.gCanvas.height;else{if(z(r[0])?o=r.length:r=[r],t.gCanvas=s=L(1024,o),!s)return null;for(h=s.getContext("2d"),n=0;n<o;++n)H(h,1024,n,r[n])}return e=d(m(e||0,o-1),0),"rgba("+(a=h.getImageData(~~(1023*i),e,1,1).data)[0]+","+a[1]+","+a[2]+","+a[3]/255+")"}function X(t,i,e,s,h,n,a,o,r,l,u,c){var f,d,m=h+(o||0)+(r.length&&r[0]<0?g(r[0]):0),p=n+(o||0)+(r.length&&r[1]<0?g(r[1]):0);for(t.font=i,t.textBaseline="top",t.fillStyle=e,a&&(t.shadowColor=a),o&&(t.shadowBlur=o),r.length&&(t.shadowOffsetX=r[0],t.shadowOffsetY=r[1]),f=0;f<s.length;++f)d=0,u&&("right"==c?d=l-u[f]:"centre"==c&&(d=(l-u[f])/2)),t.fillText(s[f],m+d,p),p+=parseInt(i)}function Y(t,i,e,s,h,n,a){n?(t.beginPath(),t.moveTo(i,e+h-n),t.arcTo(i,e,i+n,e,n),t.arcTo(i+s,e,i+s,e+n,n),t.arcTo(i+s,e+h,i+s-n,e+h,n),t.arcTo(i,e+h,i,e+h-n,n),t.closePath(),t[a?"stroke":"fill"]()):t[a?"strokeRect":"fillRect"](i,e,s,h)}function U(t,i,e,s,h,n,a,o,r){this.strings=t,this.font=i,this.width=e,this.height=s,this.maxWidth=h,this.stringWidths=n,this.align=a,this.valign=o,this.scale=r}function V(t,i,e){var s=L(i,e);return s?(s.getContext("2d").drawImage(t,(i-t.width)/2,(e-t.height)/2),s):null}function q(t,i,e){var s=L(i,e);return s?(s.getContext("2d").drawImage(t,0,0,i,e),s):null}function G(t,i,e,s,h,n,a,o,r,l){var u,g,c,f,d,p,w,x,v=i+(2*o+n)*s,T=e+(2*o+n)*s,y=L(v,T);return y?(r*=s,f=v-(n*=s),d=T-n,o=o*s+(g=c=n/2),u=y.getContext("2d"),x=m(r,f/2,d/2),h&&(u.fillStyle=h,Y(u,g,c,f,d,x)),n&&(u.strokeStyle=a,u.lineWidth=n,Y(u,g,c,f,d,x,!0)),l?((w=(p=L(v,T)).getContext("2d")).drawImage(t,o,o,i,e),w.globalCompositeOperation="source-in",w.fillStyle=a,w.fillRect(0,0,v,T),w.globalCompositeOperation="destination-over",w.drawImage(y,0,0),w.globalCompositeOperation="source-over",u.drawImage(p,0,0)):u.drawImage(t,o,o,t.width,t.height),{image:y,width:v/s,height:T/s}):null}function j(t,i,e){var s,h,n,a,o,r,l,u,g=parseInt(t.toString().length*e),c=parseInt(2*e*t.length),f=L(g,c);if(!f)return null;for((s=f.getContext("2d")).fillStyle="#000",s.fillRect(0,0,g,c),X(s,e+"px "+i,"#fff",t,0,0,0,0,[],"centre"),u={min:{x:n=(h=s.getImageData(0,0,g,c)).width,y:a=h.height},max:{x:-1,y:-1}},r=0;r<a;++r)for(o=0;o<n;++o)l=4*(r*n+o),h.data[l+1]>0&&(o<u.min.x&&(u.min.x=o),o>u.max.x&&(u.max.x=o),r<u.min.y&&(u.min.y=r),r>u.max.y&&(u.max.y=r));return n!=g&&(u.min.x*=g/n,u.max.x*=g/n),a!=c&&(u.min.y*=g/a,u.max.y*=g/a),f=null,u}function Z(t){return"'"+t.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function Q(t,i,e){(e=e||S).addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)}function J(t,i,e){(e=e||S).removeEventListener?e.removeEventListener(t,i):e.detachEvent("on"+t,i)}function K(t,i,e,s){var h,n,a,o,r,l,u=s.imageScale;return i.complete?t.complete?(i.width=i.width,i.height=i.height,u&&(t.width=i.width*u,t.height=i.height*u),e.iw=t.width,e.ih=t.height,s.txtOpt&&(n=t,h=s.zoomMax*s.txtScale,r=e.iw*h,l=e.ih*h,r<i.naturalWidth||l<i.naturalHeight?(n=q(t,r,l))&&(e.fimage=n):(r=e.iw,l=e.ih,h=1),parseFloat(s.imageRadius)&&(e.image=e.fimage=t=function(t,i,e,s,h){var n,a,o=parseFloat(i),r=d(e,s);return(n=L(e,s))?(i.indexOf("%")>0?o=r*o/100:o*=h,(a=n.getContext("2d")).globalCompositeOperation="source-over",a.fillStyle="#fff",o>=r/2?(o=m(e,s)/2,a.beginPath(),a.moveTo(e/2,s/2),a.arc(e/2,s/2,o,0,2*Math.PI,!1),a.fill(),a.closePath()):(Y(a,0,0,e,s,o=m(e/2,s/2,o),!0),a.fill()),a.globalCompositeOperation="source-in",a.drawImage(t,0,0,e,s),n):null}(e.image,s.imageRadius,r,l,h)),e.HasText()||(s.shadow&&(n=function(t,i,e,s,h,n,a){var o,r,l=g(a[0]),u=g(a[1]),c=i+(l>n?l+n:2*n)*s,f=e+(u>n?u+n:2*n)*s,d=s*((n||0)+(a[0]<0?l:0)),m=s*((n||0)+(a[1]<0?u:0));return(o=L(c,f))?(r=o.getContext("2d"),h&&(r.shadowColor=h),n&&(r.shadowBlur=n*s),a&&(r.shadowOffsetX=a[0]*s,r.shadowOffsetY=a[1]*s),r.drawImage(t,d,m,i,e),{image:o,width:c/s,height:f/s}):null}(e.image,r,l,h,s.shadow,s.shadowBlur,s.shadowOffset))&&(e.fimage=n.image,e.w=n.width,e.h=n.height),(s.bgColour||s.bgOutlineThickness)&&(a="tag"==s.bgColour?$(e.a,"background-color"):s.bgColour,o="tag"==s.bgOutline?$(e.a,"color"):s.bgOutline||s.textColour,r=e.fimage.width,l=e.fimage.height,"colour"==s.outlineMethod&&(n=G(e.fimage,r,l,h,a,s.bgOutlineThickness,e.outline.colour,s.padding,s.bgRadius,1))&&(e.oimage=n.image),(n=G(e.fimage,r,l,h,a,s.bgOutlineThickness,o,s.padding,s.bgRadius))&&(e.fimage=n.image,e.w=n.width,e.h=n.height)),"size"==s.outlineMethod&&(s.outlineIncrease>0?(e.iw+=2*s.outlineIncrease,e.ih+=2*s.outlineIncrease,r=h*e.iw,l=h*e.ih,n=q(e.fimage,r,l),e.oimage=n,e.fimage=V(e.fimage,e.oimage.width,e.oimage.height)):(r=h*(e.iw+2*s.outlineIncrease),l=h*(e.ih+2*s.outlineIncrease),n=q(e.fimage,r,l),e.oimage=V(n,e.fimage.width,e.fimage.height))))),void e.Init()):Q("load",function(){K(t,i,e,s)},t):Q("load",function(){K(t,i,e,s)},i)}function $(t,i){var e=S.defaultView,s=i.replace(/\-([a-z])/g,function(t){return t.charAt(1).toUpperCase()});return e&&e.getComputedStyle&&e.getComputedStyle(t,null).getPropertyValue(i)||t.currentStyle&&t.currentStyle[s]}function tt(t,i,e){var s,h=1;return i?h=1*(t.getAttribute(i)||e):(s=$(t,"font-size"))&&(h=s.indexOf("px")>-1&&1*s.replace("px","")||s.indexOf("pt")>-1&&1.25*s.replace("pt","")||3.3*s),h}function it(t){return t.target&&C(t.target.id)?t.target.id:t.srcElement.parentNode.id}function et(t,i){var e,s,h=parseInt($(i,"width"))/i.width,n=parseInt($(i,"height"))/i.height;return C(t.offsetX)?e={x:t.offsetX,y:t.offsetY}:(s=dt(i.id),C(t.changedTouches)&&(t=t.changedTouches[0]),t.pageX&&(e={x:t.pageX-s.x,y:t.pageY-s.y})),e&&h&&n&&(e.x/=h,e.y/=n),e}function st(t){var i=t.target||t.fromElement.parentNode,e=xt.tc[i.id];e&&(e.mx=e.my=-1,e.UnFreeze(),e.EndDrag())}function ht(t){var i,e,s,h=xt,n=it(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);n&&h.tc[n]&&((s=et(t,(e=h.tc[n]).canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s)),e.drawn=0)}function nt(t){var i=xt,e=S.addEventListener?0:1,s=it(t);s&&t.button==e&&i.tc[s]&&i.tc[s].BeginDrag(t)}function at(t){var i,e=xt,s=S.addEventListener?0:1,h=it(t);h&&t.button==s&&e.tc[h]&&(i=e.tc[h],ht(t),i.EndDrag()||i.touchState||i.Clicked(t))}function ot(t){var i,e=it(t),s=e&&xt.tc[e];s&&t.changedTouches&&(1==t.touches.length&&0==s.touchState?(s.touchState=1,s.BeginDrag(t),(i=et(t,s.canvas))&&(s.mx=i.x,s.my=i.y,s.drawn=0)):2==t.targetTouches.length&&s.pinchZoom?(s.touchState=3,s.EndDrag(),s.BeginPinch(t)):(s.EndDrag(),s.EndPinch(),s.touchState=0))}function rt(t){var i=it(t),e=i&&xt.tc[i];if(e&&t.changedTouches){switch(e.touchState){case 1:e.Draw(),e.Clicked();break;case 2:e.EndDrag();break;case 3:e.EndPinch()}e.touchState=0}}function lt(t){var i,e,s,h=xt,n=it(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);if((e=n&&h.tc[n])&&t.changedTouches&&e.touchState){switch(e.touchState){case 1:case 2:(s=et(t,e.canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s)&&(e.touchState=2));break;case 3:e.Pinch(t)}e.drawn=0}}function ut(t){var i=xt,e=it(t);e&&i.tc[e]&&(t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault(),i.tc[e].Wheel((t.wheelDelta||t.detail)>0))}function gt(t){var i,e=xt;for(i in clearTimeout(e.scrollTimer),e.tc)e.tc[i].Pause();e.scrollTimer=setTimeout(function(){var t,i=xt;for(t in i.tc)i.tc[t].Resume()},e.scrollPause)}function ct(){ft(I())}function ft(t){var i,e=xt.tc;for(i in xt.NextFrame(xt.interval),t=t||I(),e)e[i].Draw(t)}function dt(t){var i=S.getElementById(t).getBoundingClientRect(),e=S.documentElement,s=S.body,h=window,n=h.pageXOffset||e.scrollLeft,a=h.pageYOffset||e.scrollTop,o=e.clientLeft||s.clientLeft,r=e.clientTop||s.clientTop;return{x:i.left+n-o,y:i.top+a-r}}function mt(t){this.e=t,this.br=0,this.line=[],this.text=[],this.original=t.innerText||t.textContent}function pt(t,i){this.ts=null,this.tc=t,this.tag=i,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=t.pulsateTo<1,this.colour=t.outlineColour,this.adash=~~t.outlineDash,this.agap=~~t.outlineDashSpace||this.adash,this.aspeed=1*t.outlineDashSpeed,"tag"==this.colour?this.colour=$(i.a,"color"):"tagbg"==this.colour&&(this.colour=$(i.a,"background-color")),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=0|t.outlineRadius,this.SetMethod(t.outlineMethod)}function wt(t,i,e,s,h,n,a,o,r,l,u,g,c,f){this.tc=t,this.image=null,this.text=i,this.text_original=f,this.line_widths=[],this.title=e.title||null,this.a=e,this.position=new F(s[0],s[1],s[2]),this.x=this.y=this.z=0,this.w=h,this.h=n,this.colour=a||t.textColour,this.bgColour=o||t.bgColour,this.bgRadius=0|r,this.bgOutline=l||this.colour,this.bgOutlineThickness=0|u,this.textFont=g||t.textFont,this.padding=0|c,this.sc=this.alpha=1,this.weighted=!t.weight,this.outline=new pt(t,this)}function xt(t,i,e){var s,h,n,a,o=S.getElementById(t),r=["id","class","innerHTML"];if(!o)throw 0;if(C(window.G_vmlCanvasManager)&&(o=window.G_vmlCanvasManager.initElement(o),this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])),o&&(!o.getContext||!o.getContext("2d").fillText)){for(h=S.createElement("DIV"),s=0;s<r.length;++s)h[r[s]]=o[r[s]];throw o.parentNode.insertBefore(h,o),o.parentNode.removeChild(o),0}for(s in xt.options)this[s]=e&&C(e[s])?e[s]:C(xt[s])?xt[s]:xt.options[s];if(this.canvas=o,this.ctxt=o.getContext("2d"),this.z1=250/d(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=.0075*m(o.height,o.width),this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&Z(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=D(this.pulsateTo,0,1),this.minBrightness=D(this.minBrightness,0,1),this.maxBrightness=D(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline="top",this.lx=(this.lock+"").indexOf("x")+1,this.ly=(this.lock+"").indexOf("y")+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=i||t,this.repeatTags=m(64,~~this.repeatTags),this.minTags=m(200,~~this.minTags),~~this.scrollPause>0?xt.scrollPause=~~this.scrollPause:this.scrollPause=0,this.minTags>0&&this.repeatTags<1&&(s=this.GetTags().length)&&(this.repeatTags=p(this.minTags/s)-1),this.transform=O.Identity(),this.startTime=this.time=I(),this.mx=this.my=-1,this.centreImage&&function(t){var i=new Image;i.onload=function(){var e=i.width/2,s=i.height/2;t.centreFunc=function(t,h,n,a,o){t.setTransform(1,0,0,1,0,0),t.globalAlpha=1,t.drawImage(i,a-e,o-s)}},i.src=t.centreImage}(this),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming="function"==typeof xt[this.animTiming]?xt[this.animTiming]:xt.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=function(){var t,i=L(3,3);return!!i&&((t=i.getContext("2d")).strokeStyle="#000",t.shadowColor="#fff",t.shadowBlur=3,t.globalAlpha=0,t.strokeRect(2,2,2,2),t.globalAlpha=1,i=null,t.getImageData(2,2,1,1).data[0]>0)}()):delete this.shadow,this.Load(),i&&this.hideTags&&(a=this,xt.loaded?a.HideTags():Q("load",function(){a.HideTags()},window)),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=o.title,o.title="","native"==this.tooltip?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=S.createElement("div"),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position="absolute",this.ttdiv.style.zIndex=o.style.zIndex+1,Q("mouseover",function(t){t.target.style.display="none"},this.ttdiv),S.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!b[t])for(b[t]=[["mousemove",ht],["mouseout",st],["mouseup",at],["touchstart",ot],["touchend",rt],["touchcancel",rt],["touchmove",lt]],this.dragControl&&(b[t].push(["mousedown",nt]),b[t].push(["selectstart",A])),this.wheelZoom&&(b[t].push(["mousewheel",ut]),b[t].push(["DOMMouseScroll",ut])),this.scrollPause&&b[t].push(["scroll",gt,window]),s=0;s<b[t].length;++s)Q((h=b[t][s])[0],h[1],h[2]?h[2]:o);xt.started||(n=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,xt.NextFrame=n?xt.NextFrameRAF:xt.NextFrameTimeout,xt.interval=this.interval,xt.NextFrame(this.interval),xt.started=1)}function vt(t){var i=t.targetTouches[0],e=t.targetTouches[1];return w(x(e.pageX-i.pageX,2)+x(e.pageY-i.pageY,2))}function Tt(t,i){xt.tc[i]&&xt.tc[i][t]()}for(i in(o=F.prototype).length=function(){return w(this.x*this.x+this.y*this.y+this.z*this.z)},o.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},o.cross=function(t){return new F(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},o.angle=function(t){var i,e=this.dot(t);return 0==e?Math.PI/2:(i=e/(this.length()*t.length()))>=1?0:i<=-1?Math.PI:Math.acos(i)},o.unit=function(){var t=this.length();return new F(this.x/t,this.y/t,this.z/t)},a=O.prototype,O.Identity=function(){return new O([1,0,0,0,1,0,0,0,1])},O.Rotation=function(t,i){var e=c(t),s=f(t),h=1-s;return new O([s+x(i.x,2)*h,i.x*i.y*h-i.z*e,i.x*i.z*h+i.y*e,i.y*i.x*h+i.z*e,s+x(i.y,2)*h,i.y*i.z*h-i.x*e,i.z*i.x*h-i.y*e,i.z*i.y*h+i.x*e,s+x(i.z,2)*h])},a.mul=function(t){var i,e,s=[],h=t.xform?1:0;for(i=1;i<=3;++i)for(e=1;e<=3;++e)h?s.push(this[i][1]*t[1][e]+this[i][2]*t[2][e]+this[i][3]*t[3][e]):s.push(this[i][e]*t);return new O(s)},a.xform=function(t){var i={},e=t.x,s=t.y,h=t.z;return i.x=e*this[1][1]+s*this[2][1]+h*this[3][1],i.y=e*this[1][2]+s*this[2][2]+h*this[3][2],i.z=e*this[1][3]+s*this[2][3]+h*this[3][3],i},(l=U.prototype).SetImage=function(t,i,e,s,h,n,a,o){this.image=t,this.iwidth=i*this.scale,this.iheight=e*this.scale,this.ipos=s,this.ipad=h*this.scale,this.iscale=o,this.ialign=n,this.ivalign=a},l.Align=function(t,i,e){var s=0;return"right"==e||"bottom"==e?s=i-t:"left"!=e&&"top"!=e&&(s=(i-t)/2),s},l.Create=function(t,i,e,s,h,n,a,o,r){var l,u,c,f,p,w,x,v,T,y,S,b,C,z,D,A,I,M=g(a[0]),F=g(a[1]);return p=2*((o=d(o,M+n,F+n))+s),x=2*(o+s),u=this.width+p,c=this.height+x,T=y=o+s,this.image&&(S=b=o+s,C=this.iwidth,z=this.iheight,"top"==this.ipos||"bottom"==this.ipos?(C<this.width?S+=this.Align(C,this.width,this.ialign):T+=this.Align(this.width,C,this.align),"top"==this.ipos?y+=z+this.ipad:b+=this.height+this.ipad,u=d(u,C+p),c+=z+this.ipad):(z<this.height?b+=this.Align(z,this.height,this.ivalign):y+=this.Align(this.height,z,this.valign),"right"==this.ipos?S+=this.width+this.ipad:T+=C+this.ipad,u+=C+this.ipad,c=d(c,z+x))),(l=L(u,c))?(p=x=s/2,D=m(r,(w=u-s)/2,(v=c-s)/2),f=l.getContext("2d"),i&&(f.fillStyle=i,Y(f,p,x,w,v,D)),s&&(f.strokeStyle=e,f.lineWidth=s,Y(f,p,x,w,v,D,!0)),(n||M||F)&&(A=L(u,c))&&(I=f,f=A.getContext("2d")),X(f,this.font,t,this.strings,T,y,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&f.drawImage(this.image,S,b,C,z),I&&(f=I,h&&(f.shadowColor=h),n&&(f.shadowBlur=n),f.shadowOffsetX=a[0],f.shadowOffsetY=a[1],f.drawImage(A,0,0)),l):null},(r=mt.prototype).Empty=function(){for(var t=0;t<this.text.length;++t)if(this.text[t].length)return!1;return!0},r.Lines=function(t){var i,e,s,h=t?1:0;for(e=(i=(t=t||this.e).childNodes).length,s=0;s<e;++s)"BR"==i[s].nodeName?(this.text.push(this.line.join(" ")),this.br=1):3==i[s].nodeType?this.br?(this.line=[i[s].nodeValue],this.br=0):this.line.push(i[s].nodeValue):this.Lines(i[s]);return h||this.br||this.text.push(this.line.join(" ")),this.text},r.SplitWidth=function(t,i,e,s){var h,n,a,o=[];for(i.font=s+"px "+e,h=0;h<this.text.length;++h){for(a=this.text[h].split(/\s+/),this.line=[a[0]],n=1;n<a.length;++n)i.measureText(this.line.join(" ")+" "+a[n]).width>t?(o.push(this.line.join(" ")),this.line=[a[n]]):this.line.push(a[n]);o.push(this.line.join(" "))}return this.text=o},(s=pt.prototype).SetMethod=function(t){var i={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],size:["PreDraw","DrawSize"],none:["LastDraw"]},e=i[t]||i.outline;"none"==t?this.Draw=function(){return 1}:this.drawFunc=this[e[1]],this[e[0]]=this.Draw},s.Update=function(t,i,e,s,h,n,a,o){var r=this.tc.outlineOffset,l=2*r;this.x=h*t+a-r,this.y=h*i+o-r,this.w=h*e+l,this.h=h*s+l,this.sc=h,this.z=n},s.Ants=function(t){if(this.adash){var i,e=this.adash,s=this.agap,h=this.aspeed,n=e+s,a=0,o=e,r=s,l=0,u=0;h&&(u=g(h)*(I()-this.ts)/50,h<0&&(u=864e4-u),h=~~u%n),h?(e>=h?(a=e-h,o=h):l=s-(r=n-h),i=[a,r,o,l]):i=[e,s],t.setLineDash(i)}},s.DrawOutline=function(t,i,e,s,h,n){var a=m(this.radius,h/2,s/2);t.strokeStyle=n,this.Ants(t),Y(t,i,e,s,h,a,!0)},s.DrawSize=function(t,i,e,s,h,n,a,o,r){var l,u,g,c=a.w,f=a.h;return this.pulsate?(g=a.image?(a.image.height+this.tc.outlineIncrease)/a.image.height:a.oscale,u=a.fimage||a.image,l=1+(g-1)*(1-this.pulse),a.h*=l,a.w*=l):u=a.oimage,a.alpha=1,a.Draw(t,o,r,u),a.h=f,a.w=c,1},s.DrawColour=function(t,i,e,s,h,n,a,o,r){return a.oimage?(this.pulse<1?(a.alpha=1-x(this.pulse,2),a.Draw(t,o,r,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(t,o,r,a.oimage),1):this[a.image?"DrawColourImage":"DrawColourText"](t,i,e,s,h,n,a,o,r)},s.DrawColourText=function(t,i,e,s,h,n,a,o,r){var l=a.colour;return a.colour=n,a.alpha=1,a.Draw(t,o,r),a.colour=l,1},s.DrawColourImage=function(t,i,e,s,h,n,a,o,r){var l=t.canvas,g=~~d(i,0),c=~~d(e,0),f=m(l.width-g,s)+.5|0,p=m(l.height-c,h)+.5|0;return u?(u.width=f,u.height=p):u=L(f,p),u?(u.getContext("2d").drawImage(l,g,c,f,p,0,0,f,p),t.clearRect(g,c,f,p),this.pulsate?a.alpha=1-x(this.pulse,2):a.alpha=1,a.Draw(t,o,r),t.setTransform(1,0,0,1,0,0),t.save(),t.beginPath(),t.rect(g,c,f,p),t.clip(),t.globalCompositeOperation="source-in",t.fillStyle=n,t.fillRect(g,c,f,p),t.restore(),t.globalAlpha=1,t.globalCompositeOperation="destination-over",t.drawImage(u,0,0,f,p,g,c,f,p),t.globalCompositeOperation="source-over",1):this.SetMethod("outline")},s.DrawBlock=function(t,i,e,s,h,n){var a=m(this.radius,h/2,s/2);t.fillStyle=n,Y(t,i,e,s,h,a)},s.DrawSimple=function(t,i,e,s,h,n){var a=this.tc;return t.setTransform(1,0,0,1,0,0),t.strokeStyle=this.colour,t.lineWidth=a.outlineThickness,t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0,t.globalAlpha=n?h:1,this.drawFunc(t,this.x,this.y,this.w,this.h,this.colour,i,e,s)},s.DrawPulsate=function(t,i,e,s){var h=I()-this.ts,n=this.tc,a=n.pulsateTo+(1-n.pulsateTo)*(.5+f(2*Math.PI*h/(1e3*n.pulsateTime))/2);return this.pulse=a=xt.Smooth(1,a),this.DrawSimple(t,i,e,s,a,1)},s.Active=function(t,i,e){var s=i>=this.x&&e>=this.y&&i<=this.x+this.w&&e<=this.y+this.h;return this.ts=s?this.ts||I():null,s},s.PreDraw=s.PostDraw=s.LastDraw=A,(h=wt.prototype).Init=function(t){var i=this.tc;this.textHeight=i.textHeight,this.HasText()?this.Measure(i.ctxt,i):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(i)},h.Draw=A,h.HasText=function(){return this.text&&this.text[0].length>0},h.EqualTo=function(t){var i=t.getElementsByTagName("img");return this.a.href!=t.href?0:i.length?this.image.src==i[0].src:(t.innerText||t.textContent)==this.text_original},h.SetImage=function(t){this.image=this.fimage=t},h.SetDraw=function(t){this.Draw=this.fimage?t.ie>7?this.DrawImageIE:this.DrawImage:this.DrawText,t.noSelect&&(this.CheckActive=A)},h.MeasureText=function(t){var i,e,s=this.text.length,h=0;for(i=0;i<s;++i)this.line_widths[i]=e=t.measureText(this.text[i]).width,h=d(h,e);return h},h.Measure=function(t,i){var e,s,h,n,a,o,r,l,u,g=j(this.text,this.textFont,this.textHeight);r=g?g.max.y+g.min.y:this.textHeight,t.font=this.font=this.textHeight+"px "+this.textFont,o=this.MeasureText(t),i.txtOpt&&(h=(s=(e=i.txtScale)*this.textHeight)+"px "+this.textFont,n=[e*i.shadowOffset[0],e*i.shadowOffset[1]],t.font=h,a=this.MeasureText(t),u=new U(this.text,h,a+e,e*r+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&u.SetImage(this.image,this.iw,this.ih,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),l=u.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),"colour"==i.outlineMethod?this.oimage=u.Create(this.outline.colour,this.bgColour,this.outline.colour,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius):"size"==i.outlineMethod&&(s=(g=j(this.text,this.textFont,this.textHeight+i.outlineIncrease)).max.y+g.min.y,h=e*(this.textHeight+i.outlineIncrease)+"px "+this.textFont,t.font=h,a=this.MeasureText(t),u=new U(this.text,h,a+e,e*s+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&u.SetImage(this.image,this.iw+i.outlineIncrease,this.ih+i.outlineIncrease,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),this.oimage=u.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),this.oscale=this.oimage.width/l.width,i.outlineIncrease>0?l=V(l,this.oimage.width,this.oimage.height):this.oimage=V(this.oimage,l.width,l.height)),l&&(this.fimage=l,o=this.fimage.width/e,r=this.fimage.height/e),this.SetDraw(i),i.txtOpt=!!this.fimage),this.h=r,this.w=o},h.SetFont=function(t,i,e,s){this.textFont=t,this.colour=i,this.bgColour=e,this.bgOutline=s,this.Measure(this.tc.ctxt,this.tc)},h.SetWeight=function(t){var i,e,s=this.tc,h=s.weightMode.split(/[, ]/),n=t.length;if(this.HasText()){for(this.weighted=!0,e=0;e<n;++e)"both"==(i=h[e]||"size")?(this.Weight(t[e],s.ctxt,s,"size",s.min_weight[e],s.max_weight[e],e),this.Weight(t[e],s.ctxt,s,"colour",s.min_weight[e],s.max_weight[e],e)):this.Weight(t[e],s.ctxt,s,i,s.min_weight[e],s.max_weight[e],e);this.Measure(s.ctxt,s)}},h.Weight=function(t,i,e,s,h,n,a){var o=((t=isNaN(t)?1:t)-h)/(n-h);"colour"==s?this.colour=W(e,o,a):"bgcolour"==s?this.bgColour=W(e,o,a):"bgoutline"==s?this.bgOutline=W(e,o,a):"outline"==s?this.outline.colour=W(e,o,a):"size"==s&&(e.weightSizeMin>0&&e.weightSizeMax>e.weightSizeMin?this.textHeight=e.weightSize*(e.weightSizeMin+(e.weightSizeMax-e.weightSizeMin)*o):this.textHeight=d(1,t*e.weightSize))},h.SetShadowColourFixed=function(t,i,e){t.shadowColor=i},h.SetShadowColourAlpha=function(t,i,e){t.shadowColor=function(t,i){var e,s,h=t,n=(1*i).toPrecision(3)+")";return"#"===t[0]?(v[t]||(4===t.length?v[t]="rgba("+y[t[1]]+y[t[2]]+y[t[3]]:v[t]="rgba("+T[t.substr(1,2)]+T[t.substr(3,2)]+T[t.substr(5,2)]),h=v[t]+n):"rgb("===t.substr(0,4)||"hsl("===t.substr(0,4)?h=t.replace("(","a(").replace(")",","+n):"rgba("!==t.substr(0,5)&&"hsla("!==t.substr(0,5)||(e=t.lastIndexOf(",")+1,s=t.indexOf(")"),i*=parseFloat(t.substring(e,s)),h=t.substr(0,e)+i.toPrecision(3)+")"),h}(i,e)},h.DrawText=function(t,i,e){var s,h,n=this.tc,a=this.x,o=this.y,r=this.sc;for(t.globalAlpha=this.alpha,t.fillStyle=this.colour,n.shadow&&this.SetShadowColour(t,n.shadow,this.alpha),t.font=this.font,a+=i/r,o+=e/r-this.h/2,s=0;s<this.text.length;++s)h=a,"right"==n.textAlign?h+=this.w/2-this.line_widths[s]:"centre"==n.textAlign?h-=this.line_widths[s]/2:h-=this.w/2,t.setTransform(r,0,0,r,r*h,r*o),t.fillText(this.text[s],0,0),o+=this.textHeight},h.DrawImage=function(t,i,e,s){var h=this.x,n=this.y,a=this.sc,o=s||this.fimage,r=this.w,l=this.h,u=this.alpha,g=this.shadow;t.globalAlpha=u,g&&this.SetShadowColour(t,g,u),h+=i/a-r/2,n+=e/a-l/2,t.setTransform(a,0,0,a,a*h,a*n),t.drawImage(o,0,0,r,l)},h.DrawImageIE=function(t,i,e){var s=this.fimage,h=this.sc,n=s.width=this.w*h,a=s.height=this.h*h,o=this.x*h+i-n/2,r=this.y*h+e-a/2;t.setTransform(1,0,0,1,0,0),t.globalAlpha=this.alpha,t.drawImage(s,o,r)},h.Calc=function(t,i){var e,s=this.tc,h=s.minBrightness,n=s.maxBrightness,a=s.max_radius;return e=t.xform(this.position),this.xformed=e,e=function(t,i,e,s){var h=t.radius*t.z1/(t.z1+t.z2+i.z);return{x:i.x*h*e,y:i.y*h*s,z:i.z,w:(t.z1-i.z)/t.z2}}(s,e,s.stretchX,s.stretchY),this.x=e.x,this.y=e.y,this.z=e.z,this.sc=e.w,this.alpha=i*D(h+(n-h)*(a-this.z)/(2*a),0,1),this.xformed},h.UpdateActive=function(t,i,e){var s=this.outline,h=this.w,n=this.h,a=this.x-h/2,o=this.y-n/2;return s.Update(a,o,h,n,this.sc,this.z,i,e),s},h.CheckActive=function(t,i,e){var s=this.tc,h=this.UpdateActive(t,i,e);return h.Active(t,s.mx,s.my)?h:null},h.Clicked=function(t){var i,e=this.a,s=e.target,h=e.href;if(""==s||"_self"==s){if(S.createEvent){if((i=S.createEvent("MouseEvents")).initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null),!e.dispatchEvent(i))return}else if(e.fireEvent&&!e.fireEvent("onclick"))return;S.location=h}else if(self.frames[s])self.frames[s].document.location=h;else{try{if(top.frames[s])return void(top.frames[s].document.location=h)}catch(t){}window.open(h,s)}},(n=xt.prototype).SourceElements=function(){return S.querySelectorAll?S.querySelectorAll("#"+this.source):[S.getElementById(this.source)]},n.HideTags=function(){var t,i=this.SourceElements();for(t=0;t<i.length;++t)i[t].style.display="none"},n.GetTags=function(){var t,i,e,s,h=this.SourceElements(),n=[];for(s=0;s<=this.repeatTags;++s)for(i=0;i<h.length;++i)for(t=h[i].getElementsByTagName("a"),e=0;e<t.length;++e)n.push(t[e]);return n},n.Message=function(t){var i,e,s,h,n,a,o=[],r=t.split("");for(i=0;i<r.length;++i)" "!=r[i]&&(e=i-r.length/2,(s=S.createElement("A")).href="#",s.innerText=r[i],n=100*c(e/9),a=-100*f(e/9),(h=new wt(this,r[i],s,[n,0,a],2,18,"#000","#fff",0,0,0,"monospace",2,r[i])).Init(),o.push(h));return o},n.CreateTag=function(t){var i,e,s,h,n,a,o,r,l=[0,0,0];return"text"!=this.imageMode&&(i=t.getElementsByTagName("img")).length&&((e=new Image).src=i[0].src,!this.imageMode)?((s=new wt(this,"",t,l,0,0)).SetImage(e),K(e,i[0],s,this),s):("image"!=this.imageMode&&(h=(n=new mt(t)).Lines(),n.Empty()?n=null:(a=this.textFont||Z($(t,"font-family")),this.splitWidth&&(h=n.SplitWidth(this.splitWidth,this.ctxt,a,this.textHeight)),o="tag"==this.bgColour?$(t,"background-color"):this.bgColour,r="tag"==this.bgOutline?$(t,"color"):this.bgOutline)),n||e?(s=new wt(this,h,t,l,2,this.textHeight+2,this.textColour||$(t,"color"),o,this.bgRadius,r,this.bgOutlineThickness,a,this.padding,n&&n.original),e?(s.SetImage(e),K(e,i[0],s,this)):s.Init(),s):void 0)},n.UpdateTag=function(t,i){var e=this.textColour||$(i,"color"),s=this.textFont||Z($(i,"font-family")),h="tag"==this.bgColour?$(i,"background-color"):this.bgColour,n="tag"==this.bgOutline?$(i,"color"):this.bgOutline;t.a=i,t.title=i.title,t.colour==e&&t.textFont==s&&t.bgColour==h&&t.bgOutline==n||t.SetFont(s,e,h,n)},n.Weight=function(t){var i,e,s,h,n=t.length,a=[],o=this.weightFrom?this.weightFrom.split(/[, ]/):[null],r=o.length;for(e=0;e<n;++e)for(a[e]=[],s=0;s<r;++s)i=tt(t[e].a,o[s],this.textHeight),(!this.max_weight[s]||i>this.max_weight[s])&&(this.max_weight[s]=i),(!this.min_weight[s]||i<this.min_weight[s])&&(this.min_weight[s]=i),a[e][s]=i;for(s=0;s<r;++s)this.max_weight[s]>this.min_weight[s]&&(h=1);if(h)for(e=0;e<n;++e)t[e].SetWeight(a[e])},n.Load=function(){var t,i,e,s,h,n,a,o,r=this.GetTags(),l=[],u=[],g={sphere:k,vcylinder:R,hcylinder:B,vring:N,hring:_};if(r.length){for(u.length=r.length,o=0;o<r.length;++o)u[o]=o;for(this.shuffleTags&&M(u),s=100*this.radiusX,h=100*this.radiusY,n=100*this.radiusZ,this.max_radius=d(s,d(h,n)),o=0;o<r.length;++o)(i=this.CreateTag(r[u[o]]))&&l.push(i);for(this.weight&&this.Weight(l,!0),this.shapeArgs?this.shapeArgs[0]=l.length:(t=(e=this.shape.toString().split(/[(),]/)).shift(),"function"==typeof window[t]?this.shape=window[t]:this.shape=g[t]||g.sphere,this.shapeArgs=[l.length,s,h,n].concat(e)),a=this.shape.apply(this,this.shapeArgs),this.listLength=l.length,o=0;o<l.length;++o)l[o].position=new F(a[o][0],a[o][1],a[o][2])}this.noTagsMessage&&!l.length&&(o=this.imageMode&&"both"!=this.imageMode?this.imageMode+" ":"",l=this.Message("No "+o+"tags")),this.taglist=l},n.Update=function(){var t,i,e,s,h,n,a=this.GetTags(),o=[],r=this.taglist,l=[],u=[];if(!this.shapeArgs)return this.Load();if(a.length){for(s=this.listLength=a.length,e=r.length,h=0;h<e;++h)o.push(r[h]),u.push(h);for(h=0;h<s;++h){for(n=0,t=0;n<e;++n)r[n].EqualTo(a[h])&&(this.UpdateTag(o[n],a[h]),t=u[n]=-1);t||l.push(h)}for(h=0,n=0;h<e;++h)-1==u[n]?u.splice(n,1):++n;if(u.length){for(M(u);u.length&&l.length;)h=u.shift(),n=l.shift(),o[h]=this.CreateTag(a[n]);for(u.sort(function(t,i){return t-i});u.length;)o.splice(u.pop(),1)}for(n=o.length/(l.length+1),h=0;l.length;)o.splice(p(++h*n),0,this.CreateTag(a[l.shift()]));for(this.shapeArgs[0]=s=o.length,i=this.shape.apply(this,this.shapeArgs),h=0;h<s;++h)o[h].position=new F(i[h][0],i[h][1],i[h][2]);this.weight&&this.Weight(o)}this.taglist=o},n.SetShadow=function(t){t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffset[0],t.shadowOffsetY=this.shadowOffset[1]},n.Draw=function(t){if(!this.paused){var i,e,s,h,n=this.canvas,a=n.width,o=n.height,r=0,l=(t-this.time)*xt.interval/1e3,u=a/2+this.offsetX,g=o/2+this.offsetY,c=this.ctxt,f=-1,d=this.taglist,m=d.length,p=this.frontSelect,w=this.centreFunc==A;if(this.time=t,this.frozen&&this.drawn)return this.Animate(a,o,l);for(h=this.AnimateFixed(),c.setTransform(1,0,0,1,0,0),s=0;s<m;++s)d[s].Calc(this.transform,this.fixedAlpha);if(d=function(t,i){var e,s=[],h=t.length;for(e=0;e<h;++e)s.push(t[e]);return s.sort(i),s}(d,function(t,i){return i.z-t.z}),h&&this.fixedAnim.active)i=this.fixedAnim.tag.UpdateActive(c,u,g);else{for(this.active=null,s=0;s<m;++s)(e=this.mx>=0&&this.my>=0&&this.taglist[s].CheckActive(c,u,g))&&e.sc>r&&(!p||e.z<=0)&&(f=s,(i=e).tag=this.taglist[s],r=e.sc);this.active=i}for(this.txtOpt||this.shadow&&this.SetShadow(c),c.clearRect(0,0,a,o),s=0;s<m;++s){if(!w&&d[s].z<=0){try{this.centreFunc(c,a,o,u,g)}catch(t){alert(t),this.centreFunc=A}w=!0}i&&i.tag==d[s]&&i.PreDraw(c,d[s],u,g)||d[s].Draw(c,u,g),i&&i.tag==d[s]&&i.PostDraw(c)}this.freezeActive&&i?this.Freeze():(this.UnFreeze(),this.drawn=m==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),h||this.Animate(a,o,l),i&&i.LastDraw(c),n.style.cursor=i?this.activeCursor:"",this.Tooltip(i,this.taglist[f])}},n.TooltipNone=function(){},n.TooltipNative=function(t,i){this.canvas.title=t?i&&i.title?i.title:"":this.ctitle},n.SetTTDiv=function(t,i){var e=this,s=e.ttdiv.style;t!=e.ttdiv.innerHTML&&(s.display="none"),e.ttdiv.innerHTML=t,i&&(i.title=e.ttdiv.innerHTML),"none"!=s.display||e.tttimer||(e.tttimer=setTimeout(function(){var t=dt(e.canvas.id);s.display="block",s.left=t.x+e.mx+"px",s.top=t.y+e.my+24+"px",e.tttimer=null},e.tooltipDelay))},n.TooltipDiv=function(t,i){t&&i&&i.title?this.SetTTDiv(i.title,i):!t&&-1!=this.mx&&-1!=this.my&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display="none"},n.Transform=function(t,i,e){if(i||e){var s=c(i),h=f(i),n=c(e),a=f(e),o=new O([a,0,n,0,1,0,-n,0,a]),r=new O([1,0,0,0,h,-s,0,s,h]);t.transform=t.transform.mul(o.mul(r))}},n.AnimateFixed=function(){var t,i,e,s,h;return this.fadeIn&&((i=I()-this.startTime)>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=i/this.fadeIn),!!this.fixedAnim&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),t=this.fixedAnim,i=I()-t.t0,e=t.angle,h=this.animTiming(t.t,i),this.transform=t.transform,i>=t.t?(this.fixedCallbackTag=t.tag,this.fixedCallback=t.cb,this.fixedAnim=this.yaw=this.pitch=0):e*=h,s=O.Rotation(e,t.axis),this.transform=this.transform.mul(s),0!=this.fixedAnim)},n.AnimatePosition=function(t,i,e){var s,h,n=this,a=n.mx,o=n.my;!n.frozen&&a>=0&&o>=0&&a<t&&o<i?(s=n.maxSpeed,h=n.reverse?-1:1,n.lx||(n.yaw=(2*a*s/t-s)*h*e),n.ly||(n.pitch=(2*o*s/i-s)*-h*e),n.initial=null):n.initial||(n.frozen&&!n.freezeDecel?n.yaw=n.pitch=0:n.Decel(n)),this.Transform(n,n.pitch,n.yaw)},n.AnimateDrag=function(t,i,e){var s=this,h=100*e*s.maxSpeed/s.max_radius/s.zoom;s.dx||s.dy?(s.lx||(s.yaw=s.dx*h/s.stretchX),s.ly||(s.pitch=s.dy*-h/s.stretchY),s.dx=s.dy=0,s.initial=null):s.initial||s.Decel(s),this.Transform(s,s.pitch,s.yaw)},n.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},n.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},n.Decel=function(t){var i=t.minSpeed,e=g(t.yaw),s=g(t.pitch);!t.lx&&e>i&&(t.yaw=e>t.z0?t.yaw*t.decel:0),!t.ly&&s>i&&(t.pitch=s>t.z0?t.pitch*t.decel:0)},n.Zoom=function(t){this.z2=this.z1*(1/t),this.drawn=0},n.Clicked=function(t){var i=this.active;try{i&&i.tag&&(!1===this.clickToFront||null===this.clickToFront?i.tag.Clicked(t):this.TagToFront(i.tag,this.clickToFront,function(){i.tag.Clicked(t)},!0))}catch(t){}},n.Wheel=function(t){var i=this.zoom+this.zoomStep*(t?1:-1);this.zoom=m(this.zoomMax,d(this.zoomMin,i)),this.Zoom(this.zoom)},n.BeginDrag=function(t){this.down=et(t,this.canvas),t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault()},n.Drag=function(t,i){if(this.dragControl&&this.down){var e=this.dragThreshold*this.dragThreshold,s=i.x-this.down.x,h=i.y-this.down.y;(this.dragging||s*s+h*h>e)&&(this.dx=s,this.dy=h,this.dragging=1,this.down=i)}return this.dragging},n.EndDrag=function(){var t=this.dragging;return this.dragging=this.down=null,t},n.BeginPinch=function(t){this.pinched=[vt(t),this.zoom],t.preventDefault&&t.preventDefault()},n.Pinch=function(t){var i,e,s=this.pinched;s&&(e=vt(t),i=s[1]*e/s[0],this.zoom=m(this.zoomMax,d(this.zoomMin,i)),this.Zoom(this.zoom))},n.EndPinch=function(t){this.pinched=null},n.Pause=function(){this.paused=!0},n.Resume=function(){this.paused=!1},n.SetSpeed=function(t){this.initial=t,this.yaw=t[0]*this.maxSpeed,this.pitch=t[1]*this.maxSpeed},n.FindTag=function(t){if(!C(t))return null;if(C(t.index)&&(t=t.index),!z(t))return this.taglist[t];var i,e,s;for(C(t.id)?(i="id",e=t.id):C(t.text)&&(i="innerText",e=t.text),s=0;s<this.taglist.length;++s)if(this.taglist[s].a[i]==e)return this.taglist[s]},n.RotateTag=function(t,i,e,s,h,n){var a=t.Calc(this.transform,1),o=new F(a.x,a.y,a.z),r=function(t,i){return i=i*Math.PI/180,t=t*Math.PI/180,new F(c(t)*f(i),-c(i),-f(t)*f(i))}(e,i),l=o.angle(r),u=o.cross(r).unit();0==l?(this.fixedCallbackTag=t,this.fixedCallback=h):this.fixedAnim={angle:-l,axis:u,t:s,t0:I(),cb:h,tag:t,active:n}},n.TagToFront=function(t,i,e,s){this.RotateTag(t,0,0,i,e,s)},xt.Start=function(t,i,e){xt.Delete(t),xt.tc[t]=new xt(t,i,e)},xt.Linear=function(t,i){return i/t},xt.Smooth=function(t,i){return.5-f(i*Math.PI/t)/2},xt.Pause=function(t){Tt("Pause",t)},xt.Resume=function(t){Tt("Resume",t)},xt.Reload=function(t){Tt("Load",t)},xt.Update=function(t){Tt("Update",t)},xt.SetSpeed=function(t,i){return!(!z(i)||!xt.tc[t]||isNaN(i[0])||isNaN(i[1]))&&(xt.tc[t].SetSpeed(i),!0)},xt.TagToFront=function(t,i){return!!z(i)&&(i.lat=i.lng=0,xt.RotateTag(t,i))},xt.RotateTag=function(t,i){if(z(i)&&xt.tc[t]){isNaN(i.time)&&(i.time=500);var e=xt.tc[t].FindTag(i);if(e)return xt.tc[t].RotateTag(e,i.lat,i.lng,i.time,i.callback,i.active),!0}return!1},xt.Delete=function(t){var i,e;if(b[t]&&(e=S.getElementById(t)))for(i=0;i<b[t].length;++i)J(b[t][i][0],b[t][i][1],e);delete b[t],delete xt.tc[t]},xt.NextFrameRAF=function(){requestAnimationFrame(ft)},xt.NextFrameTimeout=function(t){setTimeout(ct,t)},xt.tc={},xt.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!1,freezeDecel:!1,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:"#ffff99",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",outlineRadius:0,textColour:"#ff99ff",textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#000",shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:!0,zoom:1,weight:!1,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",.33:"#ff0",.66:"#0f0",1:"#00f"},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.3,zoomMax:3,zoomStep:.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:A,splitWidth:0,animTiming:"Smooth",clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:"centre",textVAlign:"middle",imageMode:null,imagePosition:null,imagePadding:2,imageAlign:"centre",imageVAlign:"middle",noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1},xt.options)xt[i]=xt.options[i];window.TagCanvas=xt,jQuery.fn.tagcanvas=function(i,e){var s={pause:function(){t(this).each(function(){Tt("Pause",t(this)[0].id)})},resume:function(){t(this).each(function(){Tt("Resume",t(this)[0].id)})},reload:function(){t(this).each(function(){Tt("Load",t(this)[0].id)})},update:function(){t(this).each(function(){Tt("Update",t(this)[0].id)})},tagtofront:function(){t(this).each(function(){xt.TagToFront(t(this)[0].id,e)})},rotatetag:function(){t(this).each(function(){xt.RotateTag(t(this)[0].id,e)})},delete:function(){t(this).each(function(){xt.Delete(t(this)[0].id)})},setspeed:function(){t(this).each(function(){xt.SetSpeed(t(this)[0].id,e)})}};return"string"==typeof i&&s[i]?(s[i].apply(this),this):(xt.jquery=1,t(this).each(function(){xt.Start(t(this)[0].id,e,i)}),xt.started)},Q("load",function(){xt.loaded=1},window)}(jQuery);