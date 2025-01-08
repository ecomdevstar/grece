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

const setImageGallery = (section) => {
  const wrapper = section.querySelector(".image-gallery--button-wrapper");
  const button = wrapper?.querySelector("button");

  if (button) {
    button.addEventListener("click", function () {
      section.querySelectorAll(".image-gallery--item")?.forEach((el) => {
        el.classList.remove("hide");
      });

      wrapper.classList.add("hide");
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var logoList      = document.querySelector('.logo-list--logos');
  var imageGallery  = document.querySelector('section.es-image-gallery');

  if (logoList) {
    makeLogoList(logoList);
  }

  if (imageGallery) {
    setImageGallery(imageGallery);
  }
});