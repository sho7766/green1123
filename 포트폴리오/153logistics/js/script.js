let menu = document.querySelectorAll(".deps1");
let menuA = document.querySelectorAll(".deps1 > li >a");
let sub = document.querySelectorAll(".deps2");

$(menu).mouseenter(function () {
  $("header").css("background", "#fff");
  $(".deps1_bg").addClass("on");
  $(".deps1 a").css("color", "#000");
  $(sub).addClass("on");
  $(".deps2  a").css("color", "#000");
  $(".logo a img").attr("src", "images/logo_b.svg");
  $(".share_btn").css();
});
$(menu).mouseleave(function () {
  $("header").css("background", "none");
  $(".deps1_bg").removeClass("on");
  $(".deps1  a").css("color", "#fff");
  $(sub).removeClass("on");
  $(".logo a img").attr("src", "images/logo_w.svg");
});
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  if (ht >= 0 && ht < 90) {
    document.querySelector("header").style.background = "none";
    document.querySelector(".logo a img").src = "images/logo_w.svg";
    menuA.forEach(function (value, index) {
      value.style.color = "#fff";
    });
  } else {
    document.querySelector("header").style.background = "#fff";
    menuA.forEach(function (value, index) {
      value.style.color = "#000";
      document.querySelector(".logo a img").src = "images/logo_b.svg";
    });
  }
};

$(".btn").on("click", function () {
  $(this).toggleClass("on");
  // $(".autoplay-progress svg").toggleClass("on");
});
