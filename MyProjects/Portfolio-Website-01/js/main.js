const scrollUp = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 880) {
    scrollUp.classList.add("active-top");
  } else {
    scrollUp.classList.remove("active-top");
  }
});

var options = {
  strings: [
    "Front-End Developer",
    "UI/UX Designer",
    "Sound Designer",
    "Photographer",
  ],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30,
};

var typed = new Typed(".typing-text", options);

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});
VanillaTilt.init(document.querySelector(".img"), {
  max: 10,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  "max-glare": 0.4,
  startX: 0,
  startY: 0,
  glare: true,
});

VanillaTilt.init(document.querySelector(".bio-img"), {
  max: 10,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  "max-glare": 0.4,
  startX: 0,
  startY: 0,
  glare: true,
});
