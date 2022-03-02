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
  slidesPerView: 3,
  slidesPreGroup: 1,
  initialSlide: 1,
  centeredSlides: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  grabCursor: true,
});