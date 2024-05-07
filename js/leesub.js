window.addEventListener("load", function () {
  // 지역 스와이퍼
  var swName = new Swiper(".sw-name", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1060: {
        slidesPerView: 12,
        spaceBetween: 10,
      },
      970: {
        slidesPerView: 11,
        spaceBetween: 10,
      },
      // 530px 이하일 때
      888: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      805: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      562: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      490: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      460: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      370: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".sw-name-next",
      prevEl: ".sw-name-prev",
    },
  });
  // 추천 스와이퍼
  var recommendConts = new Swiper(".sw-recommend-conts", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      910: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      620: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
       },
  });
  //   축제 스와이퍼
  var mainSwiper = new Swiper(".sw-sub-festival", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      945: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      725: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  //   var pagingSwiper = new Swiper(".sw-sub-festival", {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //     pagination: {
  //       el: ".swiper-pagination2",
  //       type: "progressbar",
  //     },
  //   });
  //   mainSwiper.controller.control = pagingSwiper;
  // =============================================
  // 추천 맛집 , 추천 여행지
  const foodBt = document.getElementById("foodBt");
  const travBt = document.getElementById("travBt");
  const recommendRest = document.querySelector(".recommend-rest");
  const recommendTravel = document.querySelector(".recommend-travel");
  foodBt.addEventListener("click", function () {
    recommendRest.style.display = "block";
    recommendTravel.style.display = "none";
    foodBt.style.backgroundColor = "#8da4d0";
    foodBt.style.color = "#fff";
    travBt.style.border = "1px solid #8da4d0";
    travBt.style.backgroundColor = "#fff";
    travBt.style.color = "#2c2c2c";
    foodBt.classList.add("active");
    travBt.classList.remove("active");
  });
  travBt.addEventListener("click", function () {
    recommendRest.style.display = "none";
    recommendTravel.style.display = "block";
    travBt.style.backgroundColor = "#8da4d0";
    travBt.style.color = "#fff";
    foodBt.style.border = "1px solid #8da4d0";
    foodBt.style.backgroundColor = "#fff";
    foodBt.style.color = "#2c2c2c";
    travBt.classList.add("active");
    foodBt.classList.remove("active");
  });
  // 창의 너비가 840 이하일 때에만 추천 여행지를 보여줍니다.
  function handleWindowSizeChange() {
    if (window.innerWidth <= 840) {
      if (travBt.classList.contains("active")) {
        recommendTravel.style.display = "block";
        recommendRest.style.display = "none";
      } else {
        recommendRest.style.display = "block";
        recommendTravel.style.display = "none";
      }
    } else {
      recommendRest.style.display = "block"; // 원래 상태로 복구
      recommendTravel.style.display = "block";
    }
  }
  handleWindowSizeChange(); // 페이지가 로드될 때 한 번 호출하여 초기 설정을 적용합니다.
  window.addEventListener("resize", handleWindowSizeChange); // 창 크기가 변경될 때마다 호출하여 레이아웃을 조정합니다.
  // ===================================================
});
// ============================ 제이쿼리 (지역별 탑 검색)
$(window).on("load", function () {
  selectCus();
});
function selectCus() {
  $(".select_cus").each(function () {
    const $select = $(this);
    const $selectTrigger = $select.find(".trigger");
    const $options = $select.find(".option");
    const $hiddenInput = $select.find(".opt_val");
    const $defaultOption = $options.find("li[selected]");
    //select option 열기
    $selectTrigger.click(function () {
      $options.toggle();
      $select.toggleClass("active");
      $(".select_cus").not($select).find(".option").hide();
      $(".select_cus").not($select).removeClass("active");
      // .option 요소의 border-radius 변경
      if ($select.hasClass("active")) {
        $selectTrigger.css("border-radius", "5px 5px 0 0");
        $options.css("border-radius", "0 0 5px 5px");
      } else {
        $selectTrigger.css("border-radius", "");
        $options.css("border-radius", "");
      }
    });
    //option 선택
    $options.find("li").click(function () {
      const value = $(this).data("value");
      const text = $(this).text();
      $select.find(".trigger_txt").text(text);
      $options.hide();
      $select.removeClass("active");
      //옵션을 선택했을 때 .select_cus .trigger의 border-radius를 5px로 설정
      $selectTrigger.css("border-radius", "5px");
      //옵션 선택했을 때 클래스 추가
      if (value != "") {
        $select.addClass("select");
      } else {
        $select.removeClass("select");
      }
      // hidden 필드에 선택한 값을 설정
      $hiddenInput.val(value);
    });
  });
  //select 영역 외 다른곳을 누르면 select 닫힘
  $(document).click(function (e) {
    if (!$(e.target).closest(".select_cus").length) {
      $(".select_cus .option").hide();
      $(".select_cus").removeClass("active");
      // 영역 외 다른 곳을 클릭했을 때 .select_cus .trigger의 border-radius를 5px로 설정
      $(".select_cus .trigger").css("border-radius", "5px");
    }
  });
}
