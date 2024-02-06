let gnb = document.querySelectorAll(".menu li");
let lnb = document.querySelectorAll(".lnb");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  lnb.forEach(function (keys, item) {
    keys.style.height = 0 + "px";
  });
  document.querySelector("header").style.background = "none";
  document.querySelector(".logo").classList.remove("on");
  document.querySelector("a").classList.remove("on");
}

gnb.forEach(function (keys, item) {
  keys.onmouseenter = function () {
    sub.forEach(function (o, i) {
      let ht = sub[item].offsetHeight;
      lnb[item].style.height = ht + "px";
    });
    document.querySelector("header").style.background = "#fff";
    document.querySelector("header").classList.add("on");
    document.querySelector(".logo").classList.add("on");
    document.querySelector("a").classList.add("on");
    document.querySelector(".lnb").classList.add("on");
  };
  keys.onmouseleave = function () {
    myfnc();
  };
});
