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
// 메뉴스크롤 이벤트
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

// menu끝;

$(".btn").on("click", function () {
  $(this).toggleClass("on");
});

// .special section 마우스이벤트
const sec = document.querySelector(".special");
gsap.set(".pointer", { xPercent: -50, yPercent: -50 });

let xSetter = gsap.quickSetter(".pointer", "x", "px");
let ySetter = gsap.quickSetter(".pointer", "y", "px");

$(".special .con").mouseenter(() => {
  $(".circle_v").addClass("on");
});
$(".special .con").mouseleave(() => {
  $(".circle_v").removeClass("on");
});

window.addEventListener("mousemove", (e) => {
  xSetter(e.x);
  ySetter(e.y);
});

// partner view more 버튼
