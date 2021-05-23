"use strict";

$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });
  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [{
      breakpoint: 1800,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    }, {
      breakpoint: 1510,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    }, {
      breakpoint: 1140,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }, {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 541,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-prev"><img src="images/blog/left-slider-arrow.svg" alt="left arrow"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-next"><img src="images/blog/right-slider-arrow.svg" alt="right arrow"></button>'
  });
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.category-bedroom'
    }
  });
});