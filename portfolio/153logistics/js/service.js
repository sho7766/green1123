let fixed_cont = gsap.timeline();
fixed_cont;
// .to(".fade_box1", { autoAlpha: 0, duration: 0.1 })
// .to(".fade_box2", { autoAlpha: 1, duration: 0.1 });
ScrollTrigger.create({
  animation: fixed_cont,
  trigger: ".fixed_cont",
  start: "top top",
  end: () => innerWidth * 4,
  toggleClass: "on",
  scrub: true,
  pin: true,
  // markers: true,
});
let fade_box = gsap.timeline();
fade_box.to(".fade_box", {
  scrollTrigger: {
    scrub: true,
    start: "top 10%",
    end: () => innerWidth * 4,
  },
});
let fade_box1 = gsap.timeline();
fade_box1.to(".fade_box1", {
  animation: fade_box1,
  autoAlpha: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: ".fade_box1",
    start: "top 15%",
    end: () => innerWidth * 1,
    // scrub: true,
    markers: true,
  },
});
let fade_box2 = gsap.timeline();
fade_box2.fromTo(
  ".fade_box2",
  {
    autoAlpha: 1,
    duration: 0.1,
  },
  { autoAlpha: 0 }
);
ScrollTrigger.create({
  animation: fade_box2,
  trigger: ".fade_box2",
  start: "",
  end: () => innerWidth * 1,
  // scrub: true,
  markers: true,
});

// .to(".fade_box1", {
//   autoAlpha: 0,
//   scrollTrigger: {
//     scrub: true,
//     trigger: ".fade_box1",
//     start: 2000,
//     end: 2500,
//   },
// });

// gsap.to(".fade_box2", {
//   autoAlpha: 1,

//   scrollTrigger: {
//     scrub: true,
//     trigger: ".fade_box2",
//     start: 2500,
//     end: 2500,
//   },
// });

// gsap.to(".fixed_cont", {
//   xPercent: -100,
//   x: () => innerWidth,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".fixed_cont",
//     start: "top top",
//     end: () => innerWidth * 4,
//     scrub: true,
//     pin: true,
//     toggleClass: "on",
//     start: 500,
//   },
// });

// gsap.to(".scroll_img", {
//   x: -500,
//   autoAlpha: 0,
//   scrollTrigger: {
//     scrub: true,
//     trigger: "img.img1",
//     start: 2000,
//     end: 2500,
//     toggleClass: "on",
//   },
// });
// gsap.to(".scroll_img", {
//   x: -2500,
//   // autoAlpha: 0,
//   scrollTrigger: {
//     scrub: true,
//     trigger: ".img_wrap .img:nth-child(2n)",
//     start: 2500,
//     end: 4000,
//     toggleClass: "on",
//   },
// });
