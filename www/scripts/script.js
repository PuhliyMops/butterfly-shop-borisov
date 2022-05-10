$(document).ready(function(){

  $('.j-burger').on('click', function(){

    $('.j-menu').slideToggle();


  })


// Табы в контактах

  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active')

    let index = $(this).index('.j-tabs-link')

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');
  })
// Фильтр в наших работах

  $('.j-catalog-item').on('click', function (event) {
    event.preventDefault();

  let filterData = $(this).data('filter');

    if(filterData === 'all'){
      $('.catalog-pic').show();
      return;
    }


  $('.catalog-pic').each(function(){
    let typeData = $(this).data('type');

    if(filterData === typeData){
      $(this).show();
    }else{
      $(this).hide();
    }
    })

  })

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
  });



})
