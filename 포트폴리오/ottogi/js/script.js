let bg = document.querySelector("header");
let inner = document.querySelector(".inner");
let gnb = document.querySelectorAll(".gnb>li");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  bg.style.background = "none";
  sub.forEach(function (a, b) {
    a.style.height = "0px";
  });
}

gnb.forEach(function (a, b) {
  a.onmouseenter = function () {
    bg.style.background = "#fff";
    sub.forEach(function (a, b) {
      a.style.height = "375px";
      a.style.background = "#fff";
    });
  };
});
inner.onmouseleave = function () {
  myfnc();
};

$(bg).mouseenter(function () {
  $(".gnb>li>a").css("color", "#333");
  $(".sub li a").css("color", "#333");
  $(".lang a").css("color", "#333");
  $(".sub").css("width", "100%");
});
