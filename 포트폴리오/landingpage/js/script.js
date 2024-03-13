window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  if (ht >= 0) {
    document.querySelector("header").style.background = "#fbf7ef";
  }
};

gsap.from(".point", {
  autoAlpha: 0,
  duration: 0.5,
  delay: 0.8,
  scrollTrigger: { trigger: ".intro", start: "top 10%" },
});
gsap.from(".haeon", {
  autoAlpha: 0,
  duration: 0.5,
  delay: 1.2,
  scrollTrigger: { trigger: ".intro", start: "top 10%" },
});
gsap.from(".profile span", {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: { trigger: ".profile", start: "top 25%" },
});
gsap.from(".profile h1", {
  x: -100,
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: { trigger: ".profile", start: "top 40%" },
});
gsap.from(".circle", {
  y: -20,
  autoAlpha: 0,
  duration: 0.5,
  ease: "bounce.out",
  scrollTrigger: { trigger: ".profile", start: "top 35%" },
});
gsap.from(".right p:nth-child(2)", {
  x: -20,
  autoAlpha: 0,
  delay: 0.2,
  scrollTrigger: { trigger: ".profile", start: "top 30%" },
});
gsap.from(".right p:nth-child(3)", {
  x: -20,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".profile", start: "top 30%" },
});
gsap.from(".right ul", {
  x: -20,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".profile", start: "top 30%" },
});
gsap.from(".work1 h1", {
  x: -20,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".work1", start: "top 90%" },
});
gsap.from(".work1 .tit", {
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".work1", start: "top 90%" },
});
gsap.from(".work2 h1", {
  x: 20,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".work2", start: "top 90%" },
});
gsap.from(".work3 h1", {
  x: -20,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: { trigger: ".work3", start: "top 90%" },
});
