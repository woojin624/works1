window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

var cont = $("#sc_icons > div");

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  for (var i = 0; i < 15; i++) {
    if (wScroll >= cont.eq(i).offset().top - $(window).height() * 0.9) {
      cont.eq(i).addClass("show");
    }
  }
});
