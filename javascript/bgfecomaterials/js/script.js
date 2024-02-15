let bg = document.querySelector("header");
let menu = document.querySelectorAll(".gnb>li");
let sub = document.querySelectorAll(".sub");
let logo = document.querySelector(".logo a");

function myfnc() {
  sub.forEach(function (value, index) {
    value.style.height = 0 + "px";
  });
  bg.style.background = "none";
  bg.style.height = 0 + "px";
}

menu.forEach(function (value, index) {
  value.onmouseenter = function () {
    bg.style.background = "#fff";
    logo.style.background = "url(images/logo.svg)";
    value.querySelector("a").classList.add("on");
    sub.forEach(function (keys, item) {
      let ht = value.offsetHeight + 375;
      console.log(ht);
      value.querySelector(".sub").style.height = ht + "px";
      bg.style.height = ht + "px";
    });
    // document.querySelectorAll(".gnb>li a").forEach(function (o, i) {
    //   o.style.color = "#333";
    //   classList.add("on");
    // });
  };
  value.onmouseleave = function () {
    bg.style.background = "none";
    logo.style.background = "url(images/logo_white.svg)";
    myfnc();
    value.querySelector("a").classList.remove("on");
  };
});
