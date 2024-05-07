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
  var menuItems = document.querySelectorAll(".menu-list a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      // href 속성 값 가져오기
      var href = this.getAttribute("href");
      // 만약 href 속성 값이 "#"로 시작하면, 스크롤 효과 적용
      if (href.startsWith("#")) {
        event.preventDefault(); // 기본 동작 방지
        // 대상 섹션의 id 가져오기
        var targetSectionId = href.substring(1);
        // 대상 섹션 요소 가져오기
        var targetSection = document.getElementById(targetSectionId);
        // 대상 섹션의 페이지 맨 위에서의 거리 계산
        var offsetTop = targetSection.offsetTop;
        // 부드러운 스크롤링 효과 적용
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  // 스크롤 이벤트를 사용하여 현재 보이는 섹션을 감지하고 해당 섹션의 메뉴에 클래스를 추가하여 CSS를 적용합니다.
  window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
      var bounding = section.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        var sectionId = section.getAttribute("id");
        var correspondingMenuItem = document.querySelector('.menu-list li a[href="#' + sectionId + '"]');
        // 해당 섹션에 대한 메뉴 아이템에 클래스를 추가합니다.
        menuItems.forEach(function (menuItem) {
          menuItem.parentElement.classList.remove("active");
        });
        correspondingMenuItem.parentElement.classList.add("active");
      }
    });
    // 방문후기 섹션에 대한 예외 처리 추가
    var visitReviewsSection = document.getElementById("visit-reviews");
    var visitReviewsMenuItem = document.querySelector('.menu-list li a[href="#visit-reviews"]');
    var visitReviewsBounding = visitReviewsSection.getBoundingClientRect();
    if (visitReviewsBounding.top >= 0 && visitReviewsBounding.bottom <= window.innerHeight) {
      // 방문후기 섹션에 해당하는 메뉴 아이템에 클래스를 추가합니다.
      menuItems.forEach(function (menuItem) {
        menuItem.parentElement.classList.remove("active");
      });
      visitReviewsMenuItem.parentElement.classList.add("active");
    }
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
  // 모바일 450 스크롤 다운 시 헤더 그림자 효과
  var mbheader450 = document.querySelector(".mb-header-450");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      mbheader450.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      mbheader450.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
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
  // 모바일450 햄버거 메뉴 열고 닫기
  const mbMenuOpen450 = document.getElementById("mb-menuBt-450");
  const mbMenuContents450 = document.getElementById("mbMenuContents450");
  // const mbMenuClose = document.getElementById("mb-menu-xBt");
  const mbMenuClose450 = document.querySelector(".mb-menu-xBt-450");
  mbMenuOpen450.addEventListener("click", function () {
    mbMenuContents450.style.display = "block";
  });
  mbMenuClose450.addEventListener("click", function () {
    mbMenuContents450.style.display = "none";
  });
  // 모바일 헤더 검색창 열고 닫기
  const mbsearchOpen = document.querySelector(".mb-search-cont");
  const mbsearch = document.getElementById("mb-search");
  const mbsearchClose = document.getElementById("mb-closeBt");
  const mbSearchInput = document.getElementById("mbSearchInput");
  mbsearchOpen.addEventListener("click", function () {
    mbsearch.style.display = "block";
  });
  mbsearchClose.addEventListener("click", function () {
    mbsearch.style.display = "none";
    mbSearchInput.value = ""; // input 내용 리셋
  });
  // 모바일450 헤더 검색창 열고 닫기
  const searchOpen450 = document.querySelector(".mb-search-cont-450");
  const search450 = document.getElementById("mb-search-450");
  const searchClose450 = document.getElementById("mb-closeBt-450");
  const mbSearchInput450 = document.getElementById("mbSearchInput450");
  searchOpen450.addEventListener("click", function () {
    search450.style.display = "block";
  });
  searchClose450.addEventListener("click", function () {
    search450.style.display = "none";
    mbSearchInput450.value = ""; // input 내용 리셋
  });
  // =================================================================
  // 전국 시장 소개 스와이프
  var swLocalName = new Swiper(".sw-local-name", {
    slidesPerView: 3,
    spaceBetween: 10,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      1621: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
      1451: {
        slidesPerView: 9,
        spaceBetween: 20,
      },
      1291: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      1131: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      971: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      791: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      741: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      661: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      581: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      511: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      431: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      371: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".next-local-name",
      prevEl: ".prev-local-name",
    },
  });
  // ======================================================
  // 모든 시장 정보를 숨기는 함수
  function hideAllMarketContents() {
    const marketContents = document.querySelectorAll(".market-contents");
    marketContents.forEach((content) => {
      content.style.display = "none";
    });
  }
  // 클릭된 버튼에 해당하는 시장 정보만 보여주는 함수
  function showMarketContent(content) {
    // 모든 시장 정보를 숨깁니다.
    hideAllMarketContents();
    // 클릭된 버튼에 해당하는 시장 정보만 보여줍니다.
    content.style.display = "flex"; // display를 flex로 변경
  }
  // 초기에 모든 시장 정보를 숨깁니다.
  hideAllMarketContents();
  // 모든 버튼에 대한 이벤트 리스너 추가
  const marketButtons = document.querySelectorAll(".market-button"); // 버튼들을 선택
  marketButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 클릭된 버튼에 해당하는 시장 정보를 표시합니다.
      const targetId = this.dataset.target; // 클릭된 버튼의 대상 시장 정보 id를 가져옴
      const targetSection = document.getElementById(targetId); // 해당 섹션 요소를 선택
      showMarketContent(targetSection);
      // 클릭된 버튼을 제외한 다른 버튼의 활성화 클래스를 제거합니다.
      marketButtons.forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove("active");
        }
      });
      // 클릭된 버튼에 활성화 클래스를 추가합니다.
      button.classList.add("active");
    });
  });
  // ======================================================
  // // 모든 시장 정보를 숨기는 함수
  // function hideAllMarketContents() {
  //   const marketContents = document.querySelectorAll(".market-contents");
  //   marketContents.forEach((content) => {
  //     content.style.display = "none";
  //   });
  // }
  // // 시장 정보를 보여주는 함수
  // function showMarketContent(content) {
  //   // 모든 시장 정보를 숨깁니다.
  //   hideAllMarketContents();
  //   // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
  //   content.style.display = "block";
  // }
  // ================================================================
  // 서울 버튼 요소를 선택합니다.
  const seoulButton = document.querySelector(".seoul");
  // 서울 버튼에 선택된 스타일을 적용합니다.
  seoulButton.classList.add("selected");
  const seoulButtonName = seoulButton.querySelector(".local-bt-name");
  // 서울 버튼의 배경색을 변경합니다.
  seoulButtonName.style.backgroundColor = "#ff9364"; // 원하는 배경색으로 변경
  seoulButtonName.style.color = "#fff"; // 원하는 텍스트 색상으로 변경
  seoulButtonName.style.border = "none";
  // 필요에 따라 다른 스타일도 변경합니다.
  // 이전에 선택된 버튼의 스타일을 초기화하고 selected 클래스를 제거하는 함수
  function resetPreviousButton() {
    const previousSelectedButton = document.querySelector(".local-cont.selected");
    if (previousSelectedButton) {
      previousSelectedButton.classList.remove("selected");
      const previousButtonName = previousSelectedButton.querySelector(".local-bt-name");
      // 이전에 선택된 버튼의 배경색을 원래 스타일로 변경
      previousButtonName.style.backgroundColor = "#fff"; // 이전에 설정한 배경색으로 변경
      previousButtonName.style.color = "#bababa"; // 이전에 설정한 텍스트 색상으로 변경
      previousButtonName.style.border = "1px solid #bababa"; // 이전에 설정한 텍스트 색상으로 변경
      // 필요에 따라 다른 스타일도 초기화합니다.
    }
  }
  // 각 지역 버튼 요소를 가져옵니다.
  const localButtons = document.querySelectorAll(".local-cont");
  // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
  localButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 이전에 선택된 버튼의 selected 클래스를 제거하고 스타일을 초기화합니다.
      resetPreviousButton();
      // 현재 클릭된 버튼에 selected 클래스를 추가합니다.
      this.classList.add("selected");
      const currentButtonName = this.querySelector(".local-bt-name");
      // 현재 클릭된 버튼의 배경색을 변경합니다.
      currentButtonName.style.backgroundColor = "#ff9364"; // 원하는 배경색으로 변경
      currentButtonName.style.color = "#fff"; // 원하는 텍스트 색상으로 변경
      currentButtonName.style.border = "none";
      // 필요에 따라 다른 스타일도 변경합니다.
    });
  });
  // ================================================================
  // 서울
  const seoulBt = document.querySelector(".seoul");
  const seoulCon = document.getElementById("seoul");
  seoulCon.style.display = "block"; // 서울 시장 정보 기본 표시
  seoulCon.style.display = "flex";
  seoulBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(seoulCon);
  });
  // 인천
  const incheonBt = document.querySelector(".incheon");
  const incheonCon = document.getElementById("incheon");
  incheonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(incheonCon);
  });
  // 대전
  const daejeonBt = document.querySelector(".daejeon");
  const daejeonCon = document.getElementById("daejeon");
  daejeonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(daejeonCon);
  });
  // 대구
  const daeguBt = document.querySelector(".daegu");
  const daeguCon = document.getElementById("daegu");
  daeguBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(daeguCon);
  });
  // 경기
  const gyeonggiBt = document.querySelector(".gyeonggi");
  const gyeonggiCon = document.getElementById("gyeonggi");
  gyeonggiBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeonggiCon);
  });
  // 부산
  const busanBt = document.querySelector(".busan");
  const busanCon = document.getElementById("busan");
  busanBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(busanCon);
  });
  // 울산
  const ulsanBt = document.querySelector(".ulsan");
  const ulsanCon = document.getElementById("ulsan");
  ulsanBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(ulsanCon);
  });
  // 광주
  const gwangjuBt = document.querySelector(".gwangju");
  const gwangjuCon = document.getElementById("gwangju");
  gwangjuBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gwangjuCon);
  });
  // 강원
  const gangwonBt = document.querySelector(".gangwon");
  const gangwonCon = document.getElementById("gangwon");
  gangwonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gangwonCon);
  });
  // 충북
  const chungbukBt = document.querySelector(".chungbuk");
  const chungbukCon = document.getElementById("chungbuk");
  chungbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(chungbukCon);
  });
  // 충남
  const chungnamBt = document.querySelector(".chungnam");
  const chungnamCon = document.getElementById("chungnam");
  chungnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(chungnamCon);
  });
  // 경북
  const gyeongbukBt = document.querySelector(".gyeongbuk");
  const gyeongbukCon = document.getElementById("gyeongbuk");
  gyeongbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeongbukCon);
  });
  // 경남
  const gyeongnamBt = document.querySelector(".gyeongnam");
  const gyeongnamCon = document.getElementById("gyeongnam");
  gyeongnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeongnamCon);
  });
  // 전북
  const jeonbukBt = document.querySelector(".jeonbuk");
  const jeonbukCon = document.getElementById("jeonbuk");
  jeonbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jeonbukCon);
  });
  // 전남
  const jeonnamBt = document.querySelector(".jeonnam");
  const jeonnamCon = document.getElementById("jeonnam");
  jeonnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jeonnamCon);
  });
  // 제주
  const jejuBt = document.querySelector(".jeju");
  const jejuCon = document.getElementById("jeju");
  jejuBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jejuCon);
  });
  // 세종
  const sejongBt = document.querySelector(".sejong");
  const sejongCon = document.getElementById("sejong");
  sejongBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(sejongCon);
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
      641: {
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
