
$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      SlidesToScroll: 4,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      variableWidth: true,
      lazyLoad: 'ondemand'
    });
  });

  window.addEventListener('resize', () => {
      quoteSlider();
  })
  window.addEventListener('load', () => {
      quoteSlider();
  })

  const quoteSlider = function(){
    let size = window.innerWidth;
    if(size <= 950){
        $('.quotes').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            centerMode: true,
            prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
            nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
            centerPadding: '0px;',
            responsive: [
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                }
            ]
        })
    } else {
        $('.quotes').slick('unslick');
    }
  }