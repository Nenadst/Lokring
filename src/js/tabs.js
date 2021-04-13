function tabs() {
  const tab = document.querySelectorAll('.product__operations-tab');
  const tabContainer = document.querySelector('.product__operations-tab-container');
  const tabContent = document.querySelectorAll('.product__operations-content');

  tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.product__operations-tab');

    // Guard clause
    if (!clicked)
      return;

    // Remove active classes
    tab.forEach(t => t.classList.remove('product__operations-tab--active'));
    tabContent.forEach(c => c.classList.remove('product__operations-content--active'));

    // Activate tab
    clicked.classList.add('product__operations-tab--active');

    // Activate content area
    document
      .querySelector(`.product__operations-content--${clicked.dataset.tab}`)
      .classList.add('product__operations-content--active');
  });
}

tabs();
