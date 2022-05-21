const scrollUp = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    scrollUp.classList.add("active-top");
  }else{
      scrollUp.classList.remove("active-top");
  }
});

var options = {
  strings: ['Front-End Developer', 'UI/UX Designer', 'Sound Designer'],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30,
};

var typed = new Typed('.typing-text', options);