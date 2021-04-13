function hamburger() {
  const burger = document.querySelector(".header__hamburger");
  const navi = document.querySelector(".nav__list");

  burger.addEventListener("click", () => {
    navi.classList.toggle("nav__active");
  });
}

hamburger();






