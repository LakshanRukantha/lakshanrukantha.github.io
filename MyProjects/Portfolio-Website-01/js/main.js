const scrollUp = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    scrollUp.classList.add("active-top");
  }else{
      scrollUp.classList.remove("active-top");
  }
});