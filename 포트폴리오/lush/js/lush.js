let bg = document.querySelector(".lush_value");
let circle = document.querySelectorAll(".lush_value ul li");
let gnb = document.querySelectorAll(".topmain nav ul li a");

circle.forEach(function (value, index) {
  value.onmouseenter = function () {
    bg.style.backgroundImage = "url(images/main_value" + (index + 1) + ".jpg)";
    circle[index].classList.add("on");
  };
  value.onmouseleave = function () {
    circle[index].classList.remove("on");
    circle.classList.add("on");
  };
});

bg.onmouseleave = function () {
  bg.style.backgroundImage = "none";
};
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 0 && ht < 440) {
    document.querySelector("header").style.background = "none";
    document.querySelector("header").style.borderBottom = "none";
    document.querySelector(".logo").style.backgroundImage =
      "url(images/logo.svg)";
    gnb.forEach(function (value, index) {
      value.style.color = "#fff";
    });
  } else {
    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.borderBottom = "1px solid #ccc";
    document.querySelector(".logo").style.backgroundImage =
      "url(images/logo_black.svg)";
    gnb.forEach(function (value, index) {
      value.style.color = "#333";
    });
  }
};
