$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-prev"><img src="../images/blog/left-slider-arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-next"><img src="../images/blog/right-slider-arrow.svg" alt="right arrow"></button>'
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-bedroom'
        }
    });
    
})