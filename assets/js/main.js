const makeLogoList = (el) => {
  if (window.innerWidth < 768) {
    const sw = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 36,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var logoList = document.querySelector('.logo-list--logos');

  makeLogoList(logoList);
});