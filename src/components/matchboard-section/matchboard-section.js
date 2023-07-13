$(".c-matchboard__slider").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow:
    '<button class="c-matchboard__btn c-matchboard__btnprev"><img src="images/ico/slider-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="c-matchboard__btn  c-matchboard__btnnext"><img src="images/ico/slider-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
