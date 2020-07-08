var wHeight = $(window).height();
var dHeight = $(document).height();
var navHeight = $("nav").outerHeight();
var lastScrollTop = 0;
var moveScroll;

$(window).scroll(function (event) {
  moveScroll = true;
});

setInterval(function () {
  if (moveScroll) {
    hasScroll();
    moveScroll = false;
  }
}, 250);

function hasScroll() {
  var wScroll = $(this).scrollTop();

  if (wScroll > lastScrollTop && wScroll > navHeight) {
    $("nav").addClass("on");
  } else {
    if (wScroll + wHeight < dHeight) {
      $("nav").removeClass("on");
    }
  }

  lastScrollTop = wScroll;
}
