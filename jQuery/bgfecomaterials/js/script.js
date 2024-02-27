var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  slidesOffsetBefore: 300,
});
$("h3").hover(
  function () {
    $(".arrow").addClass("on");
  },
  function () {
    $(".arrow").removeClass("on");
  }
);
$(".swiper-slide").hover(
  function () {
    $(".txt span").addClass("on");
  },
  function () {
    $(".txt span").removeClass("on");
  }
);
