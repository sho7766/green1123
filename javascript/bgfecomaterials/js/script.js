let bg = document.querySelector("header");
let nav = document.querySelector(".menu");
let menu = document.querySelectorAll(".gnb>li");
let sub = document.querySelectorAll(".sub");
let logo = document.querySelector(".logo a");

function myfnc() {
  sub.forEach(function (value, index) {
    value.style.height = 0 + "px";
  });
  bg.style.background = "none";
  document.querySelector(".inner").classList.remove("on");
}
nav.onmouseenter = function () {
  menu.forEach(function (value, index) {
    value.querySelector("a").classList.add("on");
    logo.style.background = "url(images/logo_white.svg)";
    document.querySelector(".linkmenu").classList.add("on");
  });
};
nav.onmouseleave = function () {
  menu.forEach(function (value, index) {
    value.querySelector("a").classList.remove("on");
  });
  document.querySelector(".linkmenu").classList.remove("on");
};

menu.forEach(function (value, index) {
  value.onmouseenter = function () {
    document.querySelector(".inner").classList.add("on");
    document.querySelector(".search").classList.add("on");
    document.querySelector(".lang").classList.add("on");
    bg.style.background = "#fff";
    logo.style.background = "url(images/logo.svg)";
    sub.forEach(function (value, index) {
      value.style.height = "295px";
    });
  };
  value.onmouseleave = function () {
    document.querySelector(".search").classList.remove("on");
    document.querySelector(".lang").classList.remove("on");
    logo.style.background = "url(images/logo_white.svg)";
    myfnc();
  };
});
