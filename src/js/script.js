import "/src/sass/style.scss";

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const percents = document.querySelectorAll(".skills__ratings-percent"),
  scales = document.querySelectorAll(".skills__ratings-scale span");

percents.forEach((item, i) => {
  scales[i].style.width = item.innerHTML;
});
