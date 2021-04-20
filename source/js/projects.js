window.addEventListener("load", function () {
  getDataProject();

  $('.menu-toggle').on('click', function(){
    $('body').toggleClass('open');
  });

});

function getItem(list) {
  var rs = list.map((i) => {
    return "<li>" + i.tagname + "</li>";
  });
  return rs;
}

function getDataProject() {
  var jsonPath = "/data/data.json";
  var _json = "";

  $.getJSON(jsonPath, function (data) {
    _json = data;

    var projectBody = document.querySelector(".portfolio__list");
    var second = 0;
    var mapSort = _json.sort((a, b) => b.id -  a.id);

    var projectItem = mapSort.map((item) => {
      second += 0.1;
      return (
        '<div class="grid-md-4 wow fadeInUp" data-wow-delay="' + second + 's">' +
        '<a class="image item" href="/detail.html?pid=' + item.id +'">' +
        '<div class="bar">' +
        "<h2>" +
        item.name +
        "</h2><i></i>" +
        "</div>" +
        '<div class="main">' +
        '  <div class="back"><img src="/images/project/' + item.id + '/' + item.imgMain +'" alt=""></div>' +
        ' <div class="tags">' +
        "    <div>" +
        "      <ul>" + getItem(item.tags).join("") + "</ul>" +
        "    </div>" +
        "  </div>" +
        '  <div class="imgs"></div>' +
        " </div>" +
        "</a>" +
        "</div>"
      );
    });

    projectBody.innerHTML += projectItem.join("");
  });
}