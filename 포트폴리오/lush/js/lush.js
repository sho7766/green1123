document.querySelector(".lush_value ul li").classList.add("on");

let bg = document.querySelector(".lush_value");
let circle = document.querySelectorAll(".lush_value ul li");

circle.forEach(function (value, index) {
  value.onmouseenter = function () {
    bg.style.backgroundImage = "url(images/main_value" + (index + 1) + ".jpg)";
    circle[index].classList.add("on");
  };
  value.onmouseleave = function () {
    circle[index].classList.remove("on");
  };
});

bg.onmouseleave = function () {
  bg.style.backgroundImage = "none";
};
