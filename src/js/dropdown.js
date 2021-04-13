function dropdown() {
  const tabsContainer = document.querySelector(".hero__side-menu");
  ;

  tabsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".hero__menu-heading");

    if (!clicked)
      return;

    document
      .querySelector(`.hero__menu-list--${clicked.dataset.btn}`)
      .classList.toggle("hero__active");
  });
}

dropdown();