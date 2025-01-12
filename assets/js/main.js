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

const setMediaSwiper = (section) => {
  const sw = new Swiper(section.querySelector('.swiper'), {
    slidesPerView: 2,
    spaceBetween: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 2,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var logoList      = document.querySelector('.logo-list--logos');
  var imageGallery  = document.querySelector('section.es-image-gallery');
  var mediaSwiper   = document.querySelector('.media-slider');

  if (logoList) {
    makeLogoList(logoList);
  }

  if (imageGallery) {
    setImageGallery(imageGallery);
  }

  if (mediaSwiper) {
    setMediaSwiper(mediaSwiper);
  }
});

$(function () {
  'use strict';

  var $date = $('.docs-date');
  var $container = $('.docs-datepicker-container');
  var $trigger = $('.docs-datepicker-trigger');
  var options = {
    show: function (e) {
      console.log(e.type, e.namespace);
    },
    hide: function (e) {
      console.log(e.type, e.namespace);
    },
    pick: function (e) {
      console.log(e.type, e.namespace, e.view);
    }
  };

  $date.on({
    'show.datepicker': function (e) {
      console.log(e.type, e.namespace);
    },
    'hide.datepicker': function (e) {
      console.log(e.type, e.namespace);
    },
    'pick.datepicker': function (e) {
      console.log(e.type, e.namespace, e.view);
    }
  }).datepicker(options);

  $('.docs-options, .docs-toggles').on('change', function (e) {
    var target = e.target;
    var $target = $(target);
    var name = $target.attr('name');
    var value = target.type === 'checkbox' ? target.checked : $target.val();
    var $optionContainer;

    switch (name) {
      case 'container':
        if (value) {
          value = $container;
          $container.show();
        } else {
          $container.hide();
        }

        break;

      case 'trigger':
        if (value) {
          value = $trigger;
          $trigger.prop('disabled', false);
        } else {
          $trigger.prop('disabled', true);
        }

        break;

      case 'inline':
        $optionContainer = $('input[name="container"]');

        if (!$optionContainer.prop('checked')) {
          $optionContainer.click();
        }

        break;

      case 'language':
        $('input[name="format"]').val($.fn.datepicker.languages[value].format);
        break;
    }

    options[name] = value;
    $date.datepicker('reset').datepicker('destroy').datepicker(options);
  });

  $('.docs-actions').on('click', 'button', function (e) {
    var data = $(this).data();
    var args = data.arguments || [];
    var result;

    e.stopPropagation();

    if (data.method) {
      if (data.source) {
        $date.datepicker(data.method, $(data.source).val());
      } else {
        result = $date.datepicker(data.method, args[0], args[1], args[2]);

        if (result && data.target) {
          $(data.target).val(result);
        }
      }
    }
  });

  $('[data-toggle="datepicker"]').datepicker();
  $('[data-toggle="tooltip"]').tooltip();
});



$(document).ready(function () {
  $(".input-phone")?.intlInputPhone();

  $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '8',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '8:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });

  $(".booking-form .form-check .form-check-input").change(e => {
    if (e.target.checked) {
      $('.booking-form button[type="submit"]').attr("disabled", false);
    } else {
      $('.booking-form button[type="submit"]').attr("disabled", true);
    }
  })
});
