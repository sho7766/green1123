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

// main .slide_move play & pause button toggle
$(".btn").on("click", function () {
  $(this).toggleClass("on");
});

// service .slide_box 스크롤 효과

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

// goTop 클릭시 상단으로 이동
$(".goTop_btn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 300);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".goTop_btn").addClass("on");
  } else {
    $(".goTop_btn").removeClass("on");
  }
});

let ani1 = gsap.timeline();
ani1.from(".service .tit_box", { autoAlpha: 0, x: -100 });
ScrollTrigger.create({
  animation: ani1,
  trigger: ".service",
  start: "top",
});

// let ani1 = gsap.timeline();
// ani1
//   .to(".scroll_img ", {
//     scale: 0,
//     rotation: 720,
//     borderRadius: 200,
//   })
//   .to("#section1 .item_img", {
//     scale: 1,
//     rotation: 720,
//     borderRadius: 20,
//   });
// ScrollTrigger.create({
//   animation: ani1,
//   trigger: "#section1",
//   start: "top top ",
//   end: "+=2000",
//   //#section1 시작위치에서 2000픽셀 떨어진 곳에서 끝나도록 설정
//   // markers: true,
//   scrub: true,
//   pin: true,
// });
// let ani2 = gsap.timeline({
//   defaults: { autoAlpha: 0, borderRadius: 200 },
// });
// ani2
//   .from("#section2 .i1", { y: -100 })
//   .from("#section2 .i2", { y: 100 })
//   .from("#section2 .i3", { y: -100 });
// ScrollTrigger.create({
//   animation: ani2,
//   trigger: "#section2",
//   start: "top top ",
//   end: "+=2000",
//   //#section1 시작위치에서 2000픽셀 떨어진 곳에서 끝나도록 설정
//   // markers: true,
//   scrub: true,
//   pin: true,
// });

// let ani3 = gsap.timeline();
// ani3.from("#section3 .item_img", {
//   autoAlpha: 0,
//   y: -100,
//   ease: "back.out(4)",
//   stagger: { amount: 3, from: "random" },
// });
// ScrollTrigger.create({
//   animation: ani3,
//   trigger: "#section3",
//   start: "top top ",
//   end: "+=3000",
//   // markers: true,
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
// });

// let ani4 = gsap.timeline();
// ani4.to("#section4 .item_img", {
//   autoAlpha: 0,
//   scale: 3,
//   width: "100vw",
//   height: "100vh",
// });
// ScrollTrigger.create({
//   animation: ani4,
//   trigger: "#section4",
//   start: "top top ",
//   end: "+=3000",
//   // markers: true,
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
// });
