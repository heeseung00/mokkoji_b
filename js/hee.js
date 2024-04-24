window.addEventListener("load", function () {
  //   var reviewSwiper = new Swiper(".reviewSwiper", {
  //     slidesPerView: 1,
  //     centeredSlides: true,
  //     loop: true,
  //     spaceBetween: 10,
  //     autoplay: {
  //       delay: 2500, // 자동 재생 간격 설정 (5초)
  //     },
  //     speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
  //     pagination: {
  //       el: ".review-pagination",
  //       dynamicBullets: true,
  //     },
  //   });

  var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    pagination: {
      el: ".swiper-pagination-review1",
      clickable: true,
    },
    navigation: {
      nextEl: ".review .swiper-button-next-review1",
      prevEl: ".review .swiper-button-prev-review1",
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  var reviewSwiper2 = new Swiper(".reviewSwiper2", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    pagination: {
      el: ".swiper-pagination-review2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-review2",
      prevEl: ".swiper-button-prev-review2",
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  //   이벤트 스와이퍼
  var eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    pagination: {
      el: ".review-pagination",
      dynamicBullets: true,
    },
  });
});

// =========================================================================================================
// 제이쿼리
$(function () {
  // 장날 안내: 버튼 클릭 색깔
  $(".market-btn-color").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    // $(".market-btn-color").removeClass("on");
    // $(this).addClass("on");
  });

  // 방문 후기: 버튼 클릭 색깔
  $(".reveiw-btn-color").click(function () {
    // $(this).addClass("on").siblings().removeClass("on");
    $(".reveiw-btn-color").removeClass("on");
    $(this).addClass("on");
  });

  // 장날 안내: 버튼 클릭 이벤트
  $(".market-btn-color:nth-child(1)").click(function () {
    $(".day5").show();
    $(".allDays").hide();
  });

  $(".market-btn-color:nth-child(2)").click(function () {
    $(".day5").hide();
    $(".allDays").show().css("opacity", 1).css("display", "flex");
  });

  // 방문 후기: 버튼 클릭 이벤트
  $(".reveiw-btn-color:nth-child(1)").click(function () {
    $(".reviewSwiper").show();
    $(".reviewSwiper2").hide();
  });

  $(".reveiw-btn-color:nth-child(2)").click(function () {
    $(".reviewSwiper").hide();
    $(".reviewSwiper2").show();
  });
});
