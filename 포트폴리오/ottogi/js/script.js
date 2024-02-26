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
    a.classList.add("on");
    bg.style.background = "#fff";
    sub.forEach(function (a, b) {
      a.style.height = "358px";
      a.style.background = "#fff";
    });
  };
});
inner.onmouseleave = function () {
  myfnc();
};

$(bg).mouseenter(function () {
  $("header.inner").addClass("on");
  $(".gnb>li>a").addClass("on");
  $(".sub li a").css("color", "#555");
  $(".lang a").css("color", "#333");
});
$(bg).mouseleave(function () {
  $(".gnb>li>a").removeClass("on");
  $(".lang a").css("color", "#fff");
});
