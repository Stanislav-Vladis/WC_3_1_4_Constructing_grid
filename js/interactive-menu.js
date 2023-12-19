const CLASS_NAME_ACTIVE = 'active';

const headerBurgerButton = document.querySelector('.header .header__burger');
const closeButton = document.querySelector('.main__menu-header-close');
const mainMenu = document.querySelector('.main__menu');

headerBurgerButton.addEventListener('click', function () {
  mainMenu.classList.add(CLASS_NAME_ACTIVE);
});

document.addEventListener('click', function (event) {
  if (mainMenu.classList.contains(CLASS_NAME_ACTIVE) &&
    !headerBurgerButton.contains(event.target) &&
    !mainMenu.contains(event.target) ||
    event.target === closeButton) {
    mainMenu.classList.remove(CLASS_NAME_ACTIVE);
  }
});
