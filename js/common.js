// Home page slider
$('.main-carousel').slick({
    // autoplay: true,
    autoplaySpeed: 20000,
    swipe: false,
    prevArrow: $('.main-section__carousel-prev'),
    nextArrow: $('.main-section__carousel-next')
});
// bar slider
$('.bar-slider').slick({
    dots: true,
    autoplay: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1170,
          settings: {
            arrows: false,
            autoplaySpeed: 3000,
          }
        },
    ]
});


// Girl Card Modal
$('.models-section__item').on('click', function() {
    $('.girl-card').addClass('show');
});

$('.closeGirlCard').on('click', function() {
    $('.girl-card').removeClass('show');
});


$('.button').click(function(){
    var buttonId = $(this).attr('data-id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
});


// // Gallery Slider
// $('.gallery-section__inner').slick({
//     slidesToShow: 3,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false
// });
