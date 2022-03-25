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
    },
    620 : {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 25,
      freeMode: {
      enabled: false,
      sticky: false,
    },
    },
    560 : {
      centeredSlides: false,
      slidesPerView: 1.5,
      spaceBetween: 25,
      freeMode: {
      enabled: true,
      sticky: false,
      },
    },
    320 : {
      centeredSlides: false,
      slidesPerView: 1,
      spaceBetween: 15,
      freeMode: {
      enabled: true,
      sticky: false,
      },
    }
  },
});