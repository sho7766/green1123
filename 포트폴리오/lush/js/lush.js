let bg = document.querySelector(".lush_value");
let circle = document.querySelectorAll(".lush_value ul li");
let gnb = document.querySelectorAll(".topmain nav ul li a");

// lush_value 시작
circle.forEach(function (value, index) {
  value.classList.add("on");
  value.onmouseenter = function () {
    bg.style.backgroundImage = "url(images/main_value" + (index + 1) + ".jpg)";
  };
});
bg.onmouseleave = function () {
  bg.style.backgroundImage = "none";
};
$(circle).mouseenter(function () {
  $(this).siblings().removeClass("on");
});
$(circle).mouseleave(function () {
  $(this).siblings().addClass("on");
});
// lush_value 끝

window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
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

$(".mainqr button").click(function () {
  $(".qrbox").hide();
});
