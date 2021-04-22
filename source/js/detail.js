window.addEventListener("load", function () {
  loadingScreen();
  effectTitle(3.2);

  menuChild();

  runWow();

  getInfoPro();
});

function get_query() {
  var url = location.search;
  var qs = url.substring(url.indexOf('?') + 1).split('&');
  for (var i = 0, result = {}; i < qs.length; i++) {
    qs[i] = qs[i].split('=');
    result[qs[i][0]] = decodeURIComponent(qs[i][1]);
  }
  return result;
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

function getInfoPro() {
  var pid = get_query().pid;

  var jsonPath = "/data/data.json";
  var _json = "";

  $.getJSON(jsonPath, function (data) {
    _json = data;

    let detailItem = _json.find(item => {
      return item.id === pid;
    })

    console.log(detailItem);

    var detailBody = document.querySelector(".detail-block");

    var detailInner = '<div class="detail">' +
      '      <div class="detail__name">' +
      detailItem.name +
      "</div>" +
      '      <div class="detail__share">' +
      '        <a href="' + detailItem.link + '" target="_blank" class="btn-4">' +
      '          <svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">' +
      '            <path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#e31b6d"></path>' +
      "          </svg>VISITS THIS WEBSITE" +
      "        </a>" +
      "      </div>" +
      '      <div class="detail__slide">' + getModalSlider(detailItem.id, detailItem.listImgs).join("") + "</div>" +
      '      <div class="detail__info">' +
      "        <h2>About this project</h2>" +
      "        <p>" + detailItem.about.aboutTop + "</p>" +
      "        <hr>" +
      "        <p>" + detailItem.about.aboutBottom + "</p>" +
      "      </div>" +
      '      <div class="detail__info">' +
      "        <h2>Technical Sheet</h2>" +
      "        <p><em>Code technologies I got involved while working on this project</em></p>" +
      "        <hr>" +
      '        <ul class="detail__keywords">' + getTech(detailItem.technical).join("") + '</ul>' +
      "      </div>" +
      "    </div>";

    detailBody.innerHTML += detailInner;

    $(".detail__slide").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      nextArrow: '<div class="slick-next"><span></span></div>',
      prevArrow: '<div class="slick-prev"><span></span></div>',
    });
  })
}