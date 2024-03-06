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
// window.onscroll = function () {
//   let ht = document.documentElement.scrollTop;
//   if (ht >= 0 && ht < 90) {
//     menuOut();
//     $(".share_btn button").removeClass("on");
//     $(menu).mouseleave(function () {
//       menuOut();
//     });
//   } else {
//     menuIn();
//     $(sub).removeClass("on");
//     $(".deps1_bg").removeClass("on");
//     $(".share_btn button").addClass("on");
//     $(menu).mouseleave(function () {
//       // menuOut();
//       $("header").addClass("on");
//       $(menuA).addClass("on");
//       $(".logo a").addClass("on");
//     });
//   }
// };
// menu끝
$(".btn").on("click", function () {
  $(this).toggleClass("on");
  // $(".autoplay-progress svg").toggleClass("on");
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

let con = document.querySelector(".con");
$(".con").mousemove(function (e) {
  var mouseX = con.e.pageX;
  var mouseY = e.pageY;
  $(".pointer").css({ left: mouseX + "px", top: mouseY + "px" });
});
