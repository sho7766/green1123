let menu = document.querySelectorAll(".deps1");
let sub = document.querySelectorAll(".deps2");

$(menu).mouseenter(function () {
  $("header").css("background", "#fff");
  $(".deps1 a").css("color", "#000");
  $(sub).addClass("on");
  $(".deps2  a").css("color", "#000");
  $(".logo a").addClass("on");
  $(".share_btn").css();
  $(".inner").addClass("on");
});
$(menu).mouseleave(function () {
  $("header").css("background", "none");
  $(".deps1  a").css("color", "#fff");
  $(sub).removeClass("on");
  $(".logo a").removeClass("on");
});
