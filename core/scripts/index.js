// Navbar elements
const nav = $("#nav");
const img1 = $("#img1");
const img2 = $("#img2");
const goTop = $("#goTop");

// Scroll to top functionality
goTop.on("click", function () {
  $(window).scrollTop(0);
});

// Scroll event listener
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 60) {
    nav.addClass("navScroll pt-4").removeClass("pt-4");
    $("nav li a").addClass("black").removeClass("white");
    img1.addClass("d-none");
    img2.removeClass("d-none");
    goTop.removeClass("d-none");
  } else {
    nav.removeClass("navScroll pt-4").addClass("pt-4");
    $("nav li a").addClass("white").removeClass("black");
    img2.addClass("d-none");
    img1.removeClass("d-none");
    goTop.addClass("d-none");
  }
});