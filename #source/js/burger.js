const openingBtn = document.querySelector('.burger-menu');
const navMobile = document.querySelector('.header__nav-mobile');
const burgerIcon = document.querySelector('.burger__icon');
const navMobileList = document.querySelector('.nav-mobile__list');

openingBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navMobile.classList.toggle("_active"); 

  if (navMobile.classList.contains("_active")) {
  console.log("YOI!");
  burgerIcon.classList.toggle("_close") 
  burgerIcon.setAttribute('src', '/img/icons/close.svg')
  } else {
    console.log("no!");
    burgerIcon.classList.remove("_close")
    burgerIcon.setAttribute('src', '/img/icons/burger.svg') 
  }
});

navMobileList.addEventListener('click', function (e) {
  console.log("link clicked!");
  if (e.target.matches('a')) {
    navMobile.classList.remove("_active");
    burgerIcon.classList.remove("_close");
    burgerIcon.setAttribute('src', '/img/icons/burger.svg');
  }
});


