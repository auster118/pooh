$(document).ready(function () {
    $('.header--logo').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
          }, 600); // 스크롤 애니메이션 속도 조절
    });
    $('.nav--item button').on('click', function () {
      const index = $('.nav--item button').index(this);
      const targetSection = $('.content--section').eq(index + 1);
      
      if (targetSection.length) {
        $('html, body').animate({
          scrollTop: targetSection.offset().top
        }, 600); // 스크롤 애니메이션 속도 조절
      }
    });
  
    // 2. 스크롤 시 해당 content--section이 뷰포트에 들어오면 nav--item에 active 클래스 조정
    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop()-80;
      const windowHeight = $(window).height();
  
      $('.content--section').each(function (i) {
        const sectionTop = $(this).offset().top;
        const sectionBottom = sectionTop + $(this).outerHeight();
  
        if (scrollTop + windowHeight > sectionTop && scrollTop + windowHeight < sectionBottom) {
          $('.nav--item').removeClass('active');
          console.log(i)
          if(i != 0){
            $('.nav--item').eq(i - 1).addClass('active'); // index-1
          };
        }
      });
    });
  });