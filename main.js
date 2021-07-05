const burger = document.querySelector(".bars");
const links = document.querySelector(".links");
const scrollpop = document.querySelector(".scrollpop");

burger.addEventListener("click", () => {
  links.classList.toggle("show");
  burger.classList.toggle("change");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollpop.classList.add("change");
  } else {
    scrollpop.classList.remove("change");
  }
  scrollpop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
