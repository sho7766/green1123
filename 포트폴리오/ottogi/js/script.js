let bg = document.querySelector("header");
let inner = document.querySelector(".inner");
let gnb = document.querySelectorAll(".gnb>li");
let sub = document.querySelectorAll(".sub");

$(gnb).mouseenter(function () {
  $(".gnb>li>a").addClass("on");
  $(".lang a").css({ color: "#333", textShadow: "none" }).addClass("on");
  $(bg).addClass("on");
  $(sub).css("height", "358px");
});
$(gnb).mouseleave(function () {
  $(".gnb>li>a").removeClass("on");
  $(".lang a").css("color", "#fff");
  $(".lang a").removeClass("on");
  $(sub).css("height", "0");
  $(bg).removeClass("on");
});
