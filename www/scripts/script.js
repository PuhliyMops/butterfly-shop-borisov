$(document).ready(function(){

  $('.j-burger').on('click', function(){

    $('.j-menu').slideToggle();


  })


  // Табы в контактах


  // Фильтр в наших работах


  // Аккордеон
  let prevFaqBtn;

  $('.j-faq-btn').on('click',function(){

    if(prevFaqBtn === this) {
      $(this).next().slideToggle();

      return ;
    }

    $('.j-faq-btn').next().slideUp();
    $(this).next().slideDown();

    prevFaqBtn = this;
  });


// Отзывы-каруселька

  $('.j-carousel').slick({
  dots: true
  });



})
