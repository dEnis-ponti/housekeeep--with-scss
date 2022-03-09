new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
      ' из ' +
      '<span class="' + totalClass + '"></span>';
    },
  },
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPreGroup: 1,
  initialSlide: 1,
  centeredSlides: false,
  slideToClickedSlide: true,
  grabCursor: true,
  breakpoints: {
    920 : {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});

// let activeSlide = document.querySelector('.swiper-slide-active + .swiper-slide');
// console.log(activeSlide);
// if()
// activeSlide.classList.add('_active-tablet');