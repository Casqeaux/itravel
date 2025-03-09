// Бургер

$('.header__menu-mobile').click(function (event) {
  $('.header__menu-mobile, .menu__body').toggleClass('active');
  $('body').toggleClass('lock');


});
 