// Находим кнопку, на которую будем нажимать
const buttonCatalog = document.querySelector('.main-header__toggle');

// Находим меню, которое скрыто
const navigationCategoryContainer = document.querySelector('.navigation-category-container');

// Находим иконки плюс и минус внутри кнопки
const buttonIconPlus = buttonCatalog.querySelector('.main-header__toggle--open');
const buttonIconMinus = buttonCatalog.querySelector('..main-header__toggle--close');


// Добавляем действие клика на кнопку
buttonCatalog.addEventListener('click', () => {

  // При нажатии на кнопку переключаем класс visibility-container у найденных элементов
  navigationCategoryContainer.classList.toggle('main-nav__wrapper-close');
  buttonIconPlus.classList.toggle('visibility-container');
  buttonIconMinus.classList.toggle('visibility-container');
});