let maindark = localStorage.getItem("darkoption");

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

// Dark Toggle

const themetoggle = document.querySelector(".toggle-menu");
const main = document.querySelector("main");
const circle = document.querySelector(".toggle-circle");
const sun = document.querySelector(".toggle-sun");


LightMode = () => {
  localStorage.setItem("darkoption", null);
  document.body.classList.remove("dark-theme");
  main.style.backgroundImage = "url(../images/triangles-3320452.png)";
  themetoggle.ariaLabel = "Switch to dark theme";
};
DarkMode = () => {
  localStorage.setItem("darkoption", "enabled");
  document.body.classList.add("dark-theme");
  main.style.backgroundImage = "none";
  themetoggle.ariaLabel = "Switch to light theme";
};

if (maindark != "enabled") {
  LightMode();
} else {
  DarkMode();
}

window.onload = () => {
  setTimeout(() => {
    themetoggle.classList.add("appear");
  }, 1000);
};


themetoggle.addEventListener("click", () => {
  circle.classList.toggle("change");
  sun.classList.toggle("change");
  if (document.body.classList.contains("dark-theme")) {
    LightMode();
  } else {
    DarkMode();
  }
});
