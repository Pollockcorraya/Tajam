$(document).ready(function() {
    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow:'.img-left',
        nextArrow: '.img-right',
    });
})