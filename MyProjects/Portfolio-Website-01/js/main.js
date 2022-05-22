const scrollUp = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    scrollUp.classList.add("active-top");
  }else{
      scrollUp.classList.remove("active-top");
  }
});

var options = {
  strings: ['Front-End Developer', 'UI/UX Designer', 'Sound Designer', 'Photographer'],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30,
};

var typed = new Typed('.typing-text', options);

const navLinks = document.querySelectorAll('.nav-card-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})