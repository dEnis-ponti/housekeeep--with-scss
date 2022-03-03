const openingBtn = document.querySelector('.burger-menu');
const navMobile = document.querySelector('.header__nav-mobile');

openingBtn.addEventListener('click', function () {
  navMobile.classList.toggle("_active");
});