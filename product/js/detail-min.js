function get_query(){for(var e=location.search,g=e.substring(e.indexOf("?")+1).split("&"),i=0,t={};i<g.length;i++)g[i]=g[i].split("="),t[g[i][0]]=decodeURIComponent(g[i][1]);return t}function getModalSlider(e,g){return g.map(g=>'<div class="detail__slide-item"><img src="/images/project/'+e+"/"+g.imgname+'.png" alt=""></div>')}function getInfoPro(){var e=get_query().pid;$.getJSON("/data/data.json",function(g){let i=g.find(g=>g.id===e);document.title=i.name+" | NKT";var t=document.querySelector(".detail-block"),s='<div class="detail wow fadeInUp" data-wow-delay="3s">      <div class="detail__name">'+i.name+'</div>      <div class="detail__share">        <a href="'+i.link+'" target="_blank" class="btn-4">          <span><svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#e31b6d"></path>          </svg>VISITS THIS WEBSITE</span>        </a>        <a href="/projects.html" class="btn-1">          <span><svg class="i-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.676 26.676" style="enable-background:new 0 0 26.676 26.676;" xml:space="preserve"><g>            <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z" fill="#666666" />            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>          </g>          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>          </svg>BACK LIST PROJETCS</span>        </a>      </div>      <div class="detail__slide">'+getModalSlider(i.id,i.listImgs).join("")+'</div>      <div class="detail__info">        <h2>About this project</h2>        <p>'+i.about.aboutTop+"</p>        <hr>        <p>"+i.about.aboutBottom+'</p>      </div>      <div class="detail__info">        <h2>Technical Sheet</h2>        <p><em>Code technologies I got involved while working on this project</em></p>        <hr>        <ul class="detail__keywords">'+getTech(i.technical).join("")+"</ul>      </div>    </div>";t.innerHTML+=s,$(".detail__slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,nextArrow:'<div class="slick-next"><span></span></div>',prevArrow:'<div class="slick-prev"><span></span></div>'})})}window.addEventListener("load",function(){loadingScreen(),effectTitle(3.2),runWow(),getInfoPro()});