$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab("show");

  $(".nav-tabs a").click(function (e) {
    $(this).tab("show");
  });
});
$(".hp-tabs__matches").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button class="c-matchboard__btn c-matchboard__btnprev"><img src="images/ico/slider-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="c-matchboard__btn  c-matchboard__btnnext"><img src="images/ico/slider-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
