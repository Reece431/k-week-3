let steps = document.querySelectorAll('.step');
steps.forEach((x,i) => {
    let step = document.createElement('p');
    step.innerText = i+1;
    step.classList.add('index');
    x.appendChild(step)
    console.log(step);
})

$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      SlidesToScroll: 4,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      variableWidth: true
    });
  });

  window.addEventListener('resize', (e) => {
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
  })