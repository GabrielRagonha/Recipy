$(document).ready(function(){
  if ($(".home").length > 0) {

    $('.home__top__carousel__content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.home__top__carousel--buttons .prev'),
      nextArrow: $('.home__top__carousel--buttons .next')
    });

  }
});
