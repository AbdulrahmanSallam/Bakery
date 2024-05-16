/// <reference types="../@types/jquery" />;
// navbar
const nav = document.getElementById("nav");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const goTop = document.getElementById("goTop");

goTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

$(window).on("scroll", function () {
  if (scrollY > 60) {
    nav.classList.add("navScroll", "pt-4");
    nav.classList.remove("pt-4");
    $("nav li a").addClass("black");
    $("nav li a").removeClass("white");
    img1.classList.add("d-none");
    img2.classList.remove("d-none");
    goTop.classList.remove("d-none");
  } else {
    nav.classList.remove("navScroll", "pt-4");
    nav.classList.add("pt-4");
    $("nav li a").addClass("white");
    $("nav li a").removeClass("black");
    img2.classList.add("d-none");
    img1.classList.remove("d-none");
    goTop.classList.add("d-none");
  }
});
