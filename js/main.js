$(document).ready(function(){

  //depth2 메뉴

  $(".depth2, .depth2-bg").hide();

  $(".gnb > li").hover(function(){
    $(".depth2, .depth2-bg").stop().slideToggle();

    
  });



  //메인비주얼 슬라이드

  var mv = new Swiper(".mv", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
      loop: true,
      effect : "fade",

    pagination: {
      el: ".swiper-pagination",

    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var bs = new Swiper(".bs", {
    navigation: {
      nextEl: ".bs-slide .swiper-button-next",
      prevEl: ".bs-slide .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
  });



  //탭메뉴
  $(".tab-con > ul > li").hide();
  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-con > ul > li").eq(0).show();
 
  $(".tab-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var Num = $(this).index();
    $(".tab-con > ul > li").eq(Num).show().siblings().hide();

  });

  





});

  

