let menu = document.querySelectorAll(".deps1");
let menuA = document.querySelectorAll(".deps1 > li >a");
let sub = document.querySelectorAll(".deps2");

// menu시작
function menuIn() {
  $("header").addClass("on");
  $(".deps1_bg").addClass("on");
  $(menuA).addClass("on");
  $(sub).addClass("on");
  $(".deps2  a").css("color", "#000");
  $(".logo a").addClass("on");
}
function menuOut() {
  $("header").removeClass("on");
  $(".deps1_bg").removeClass("on");
  $(menuA).removeClass("on");
  $(sub).removeClass("on");
  $(".logo a").removeClass("on");
}
$(menu).mouseenter(function () {
  menuIn();
});
$(menu).mouseleave(function () {
  menuOut();
});

// menu끝;
$(".btn").on("click", function () {
  $(this).toggleClass("on");
});
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  if (ht >= 0 && ht < 90) {
    $(".share_btn button").removeClass("on");
  } else {
    $(menu).mouseenter(function () {
      menuIn();
    });
    $(menu).mouseleave(function () {
      menuOut();
      $("header").addClass("on");
      $(menuA).addClass("on");
      $(".logo a").addClass("on");
    });
    $("header").addClass("on");
    $(menuA).addClass("on");
    $(".logo a").addClass("on");
    $(".share_btn button").addClass("on");
  }
};
$(".con").mouseenter(function () {
  $(".pointer").addClass("on");
});
$(".con").mouseleave(function () {
  $(".pointer").removeClass("on");
});

const cursor = document.querySelector(".pointer");
const circle = document.querySelector(".circle_v");
const con = document.querySelector(".con");

let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

$(con).on("mouseenter", function () {
  $(cursor).addClass("on");
});
$(con).on("mouseleave", function () {
  $(cursor).removeClass("on");
});
