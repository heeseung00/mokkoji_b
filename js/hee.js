window.addEventListener("load", function () {
  // ==========================================================
  // var element = document.getElementById("exampleElement");
  // if (element) {
  //   element.style.color = "red";
  // } else {
  //   console.error("Element not found.");
  // }
  // 메인 배너 스와이퍼
  var bannerSwiper = new Swiper(".bannerSwiper", {
    loop: true,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2400, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    slidesPerView: 1, // 한 번에 표시할 슬라이드 수
    // slidesPerGroup: 1,
  });

  var bannerSwiper2 = new Swiper(".bannerSwiper-1200", {
    loop: true,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 800, // 부드러운 넘김 효과를 위한 속도 조정
    slidesPerView: 1, // 한 번에 표시할 슬라이드 수
    // slidesPerGroup: 1,
  });

  var bannerSwiper3 = new Swiper(".bannerSwiper-790", {
    loop: true,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 800, // 부드러운 넘김 효과를 위한 속도 조정
    slidesPerView: 1, // 한 번에 표시할 슬라이드 수
    // slidesPerGroup: 1,
  });

  var bannerSwiper4 = new Swiper(".bannerSwiper-450", {
    loop: true,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 800, // 부드러운 넘김 효과를 위한 속도 조정
    slidesPerView: 1, // 한 번에 표시할 슬라이드 수
    // slidesPerGroup: 1,
  });

  //   var reviewSwiper = new Swiper(".reviewSwiper", {
  //     slidesPerView: 1,
  //     centeredSlides: true,
  //     loop: true,
  //     spaceBetween: 10,
  //     autoplay: {
  //       delay: 2300, // 자동 재생 간격 설정 (5초)
  //     },
  //     speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
  //     pagination: {
  //       el: ".review-pagination",
  //       dynamicBullets: true,
  //     },
  //   });

  var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 5,
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
    // navigation: {
    //   nextEl: ".review .swiper-button-next-review1",
    //   prevEl: ".review .swiper-button-prev-review1",
    // },
    breakpoints: {
      1201: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      851: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      601: {
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
    slidesPerView: 5,
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
    // navigation: {
    //   nextEl: ".swiper-button-next-review2",
    //   prevEl: ".swiper-button-prev-review2",
    // },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      851: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      601: {
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
  // var eventSwiper = new Swiper(".eventSwiper", {
  //   slidesPerView: 1,
  //   centeredSlides: true,
  //   loop: true,
  //   spaceBetween: 10,
  //   autoplay: {
  //     delay: 2900, // 자동 재생 간격 설정 (5초)
  //   },
  //   speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
  //   pagination: {
  //     el: ".review-pagination",
  //     dynamicBullets: true,
  //   },
  // });

  
});

// =========================================================================================================
// 제이쿼리
$(function () {
  $("#pagination2, #pagination3").hide();
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

  // ===========================================================
  // 게시판
  // 시장 방문 후기: 버튼 클릭 색깔
  $(".marketReveiw-btn-color").click(function () {
    $(this).addClass("boardOn").siblings().removeClass("boardOn");
    $("#catList").show();
    $("#boardListInfo, #boardListTalk").hide(); // 수정된 부분
    // 페이지네이션
    $("#pagination").show();
    $("#pagination2, #pagination3").hide();
    $("p.board-search-txt1").show();
    $("p.board-search-txt2, .board-search-txt3").hide();
  });

  // 오늘의 소식: 버튼 클릭 색깔
  $(".today-btn-color").click(function () {
    $(this).addClass("boardOn").siblings().removeClass("boardOn");
    $("#boardListInfo").show();
    $("#catList, #boardListTalk").hide(); // 수정된 부분
    // 페이지네이션
    $("#pagination2").show();
    $("#pagination, #pagination3").hide();

    $("p.board-search-txt2").show();
    $(".board-search-txt1, .board-search-txt3").hide();
    $("#reviewSlect").hide();
  });

  // 소통 공간: 버튼 클릭 색깔
  $(".talk-btn-color").click(function () {
    $(this).addClass("boardOn").siblings().removeClass("boardOn");
    $("#boardListTalk").show();
    $("#catList, #boardListInfo").hide(); // 수정된 부분
    // 페이지네이션
    $("#pagination3").show();
    $("#pagination, #pagination2").hide();

    $("p.board-search-txt3").show();
    $(".board-search-txt1, .board-search-txt2").hide();
    $("#reviewSlect").hide();
  });
});
