window.addEventListener("load", function () {
  // 지역 스와이퍼
  var swRecom = new Swiper(".sw-recom-conts", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      830: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  });
