let intro = gsap.timeline();
intro
  .from(".hello", { x: -30, autoAlpha: 0 })
  .from(".point", {
    autoAlpha: 0,
    duration: 0.5,
  })
  .from(
    ".intro .img",
    {
      autoAlpha: 0,
      y: 500,
      duration: 0.8,
    },
    "same"
  )
  .from(
    ".haeon",
    {
      autoAlpha: 0,
      duration: 0.8,
    },
    "same"
  );
ScrollTrigger.create({
  trigger: ".intro",
  animation: intro,
  pin: true,
});

let profile = gsap.timeline();
profile
  .from(
    ".profile h1",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "same1"
  )
  .from(
    ".circle",
    {
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
      ease: "bounce.out",
    },
    "same1"
  )
  .from(
    ".right p:nth-child(2)",
    {
      x: -20,
      autoAlpha: 0,
      delay: 0.2,
    },
    "same1"
  )
  .from(
    ".right p:nth-child(3)",
    {
      x: -20,
      autoAlpha: 0,
      delay: 0.4,
    },
    "same1"
  )
  .from(
    ".right ul",
    {
      x: -20,
      autoAlpha: 0,
      delay: 0.4,
    },
    "same1"
  );
ScrollTrigger.create({
  trigger: ".profile",
  animation: profile,
  pin: true,
});

// let work1 = gsap.timeline();

gsap.from(".work1 h1", {
  x: -20,
  autoAlpha: 0,
  ScrollTrigger: { trigger: ".work1", pin: true },
});
gsap.from(".work1 .tit", { autoAlpha: 0 });
ScrollTrigger.create({
  trigger: ".work1",
  animation: work1,
  pin: true,
});

let work2 = gsap.timeline();
work2
  .from(".work2 h1", {
    x: 20,
    autoAlpha: 0,
    delay: 0.5,
  })
  .from(".work2 .tit", {
    autoAlpha: 0,
    delay: 0.5,
  });
ScrollTrigger.create({
  trigger: ".work2",
  animation: work2,
  pin: true,
});

let work3 = gsap.timeline();
work3
  .from(".work3 h1", {
    x: -20,
    autoAlpha: 0,
    delay: 0.5,
  })
  .from(".work3 .tit", {
    autoAlpha: 0,
    delay: 0.5,
  });
ScrollTrigger.create({
  trigger: ".work3",
  animation: work3,
  pin: true,
});

$(".nav li").click(function (e) {
  e.preventDefault();
  $(this).addClass("on").siblings().removeClass("on");

  let idx = $(this).index();
  let section = $("section").eq(idx);
  let sectionDistance = section.offset().top;
  $("html,body").stop().animate({ scrollTop: sectionDistance });
});

$(window).scroll(function () {
  $("section").each(function () {
    if ($(this).offset().top <= $(window).scrollTop()) {
      let idx = $(this).index();
      $(".nav li a").removeClass("on");
      $(".nav li a").eq(idx).addClass("on");
    }
  });
});
