// Находим кнопку, на которую будем нажимать
const buttonCatalog = document.querySelector('.main-header__toggle');
buttonCatalog.classList.remove('visibility-none');

// Находим меню, которое скрыто
const navigationCategoryContainer = document.querySelector('.main-nav__wrapper');
navigationCategoryContainer.classList.add('main-nav__wrapper--open', 'visibility-none');

// Находим иконки плюс и минус внутри кнопки
const buttonIconPlus = buttonCatalog.querySelector('.main-header__hamburger');
const buttonIconMinus = buttonCatalog.querySelector('.main-header__cross');

// Добавляем действие клика на кнопку
buttonCatalog.addEventListener('click', () => {

  // При нажатии на кнопку переключаем класс visibility-container у найденных элементов
  navigationCategoryContainer.classList.toggle('visibility-none');
  buttonIconPlus.classList.toggle('visibility-none');
  buttonIconMinus.classList.toggle('visibility-none');
});
