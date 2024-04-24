window.addEventListener("load", function () {
  // 스크롤 다운 시 헤더 그림자 효과
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      header.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 헤더 검색창 열고 닫기
  const searchOpen = document.getElementById("search-open");
  const search = document.getElementById("search");
  const searchClose = document.getElementById("closeBt");
  const searchInput = document.getElementById("searchInput");
  searchOpen.addEventListener("click", function () {
    search.style.display = "block";
  });
  searchClose.addEventListener("click", function () {
    search.style.display = "none";
    searchInput.value = ""; // input 내용 리셋
  });
  // =================================================================
  var menuItems = document.querySelectorAll(".menu-list li a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 동작 방지
      // 클릭된 메뉴 아이템에만 'active' 클래스를 추가합니다.
      menuItems.forEach(function (menuItem) {
        menuItem.parentElement.classList.remove("active");
      });
      this.parentElement.classList.add("active");
      // 해당 섹션으로 스크롤합니다.
      var targetId = this.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);
      var offsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
  // =================================================================
  // 모바일 스크롤 다운 시 헤더 그림자 효과
  var mbheader = document.querySelector(".mb-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      mbheader.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      mbheader.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 모바일 햄버거 메뉴 열고 닫기
  const mbMenuOpen = document.getElementById("mb-menuBt");
  const mbMenuContents = document.getElementById("mbMenuContents");
  // const mbMenuClose = document.getElementById("mb-menu-xBt");
  const mbMenuClose = document.querySelector(".mb-menu-xBt");
  mbMenuOpen.addEventListener("click", function () {
    mbMenuContents.style.display = "block";
  });
  mbMenuClose.addEventListener("click", function () {
    mbMenuContents.style.display = "none";
  });
  // 모바일 헤더 검색창 열고 닫기
  const mbSearchOpen = document.getElementById("mb-search-open");
  const mbSearch = document.getElementById("mb-search");
  const mbSearchClose = document.getElementById("mb-closeBt");
  const mbSearchInput = document.getElementById("mbSearchInput");
  mbSearchOpen.addEventListener("click", function () {
    mbSearch.style.display = "block";
  });
  mbSearchClose.addEventListener("click", function () {
    mbSearch.style.display = "none";
    mbSearchInput.value = ""; // input 내용 리셋
  });
  // =================================================================
  // 전국 시장 소개 스와이프
  var swLocalName = new Swiper(".sw-local-name", {
    slidesPerView: 2,
    spaceBetween: 10,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1000px 이하일 때
      940: {
        slidesPerView: 12,
        spaceBetween: 10,
      },
      870: {
        slidesPerView: 11,
        spaceBetween: 10,
      },
      // 530px 이하일 때
      810: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      745: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      670: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      590: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      520: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      370: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      300: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".next-local-name",
      prevEl: ".prev-local-name",
    },
  });
  // =================================================================
  // 추천 맛집 스와이프
  var swbest = new Swiper(".sw-best", {
    slidesPerView: 1,
    spaceBetween: 15,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1660: 이하일 때
      1601: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      // 1430: 이하일 때
      1371: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      // 1240 이하일 때
      1131: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // 1000 이하일 때
      901: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // 760 이하일 때
      // 651: {
      //   slidesPerView: 2,
      //   spaceBetween: 10,
      // },
      501: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".next-best",
      prevEl: ".prev-best",
    },
  });
  // 지역 축제스와이프
  var swfestival = new Swiper(".sw-festival", {
    slidesPerView: 1,
    spaceBetween: 15,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1660: 이하일 때
      1601: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      // 1430: 이하일 때
      1371: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      // 1240 이하일 때
      1131: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // 1000 이하일 때
      841: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // 760 이하일 때
      // 651: {
      //   slidesPerView: 2,
      //   spaceBetween: 10,
      // },
      631: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".next-festival",
      prevEl: ".prev-festival",
    },
  });
  // =================================================================
});
