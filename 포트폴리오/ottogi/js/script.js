let bg = document.querySelector("header");
let inner = document.querySelector(".inner");
let gnb = document.querySelectorAll(".gnb>li");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  bg.style.background = "none";
  sub.forEach(function (a, b) {
    a.style.height = "0px";
  });
  // sub.style.height = "0";
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
