window.addEventListener("load", function () {
  // 지역 스와이퍼
  var swRecom = new Swiper(".sw-recom-conts", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      761: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  // ===================================================
  // 모달 후기 맛집 / 시장 버튼 클릭 시
  const chooseBtRest = document.getElementById("chooseBtRest");
  const chooseBtMarket = document.getElementById("chooseBtMarket");
  const checkBoxRest = document.querySelector(".check-box-rest");
  const checkBoxMarket = document.querySelector(".check-box-market");
  // console.log(checkBoxRest);
  // 초기 설정: chooseBtRest는 bold로, checkBoxRest는 보이게 설정
  chooseBtRest.style.fontWeight = "bold";
  chooseBtRest.style.boxShadow = "0 0 0 1px #191919 inset";
  checkBoxRest.style.display = "block";
  chooseBtMarket.style.border = "1px solid #d9d9d9"
  // chooseBtRest 클릭 시
  chooseBtRest.addEventListener("click", function () {
  // checkBoxMarket 내용 초기화
  resetCheckboxes(checkBoxMarket);
    // chooseBtRest 스타일 변경
    chooseBtRest.style.fontWeight = "bold";
    chooseBtRest.style.boxShadow = "0 0 0 1px #191919 inset";
    chooseBtRest.style.border = "none"
    // checkBoxRest 보이기
    checkBoxRest.style.display = "block";
    // chooseBtMarket 스타일 원래대로 변경
    chooseBtMarket.style.fontWeight = "";
    chooseBtMarket.style.boxShadow = "none";
    chooseBtMarket.style.border = "1px solid #d9d9d9"
    // checkBoxMarket 감추기
    checkBoxMarket.style.display = "none";
  });
  // chooseBtMarket 클릭 시
  chooseBtMarket.addEventListener("click", function () {
  // checkBoxRest 내용 초기화
  resetCheckboxes(checkBoxRest);
    // chooseBtMarket 스타일 변경
    chooseBtMarket.style.fontWeight = "bold";
    chooseBtMarket.style.boxShadow = "0 0 0 1px #191919 inset";
    chooseBtMarket.style.border = "none"
    // checkBoxMarket 보이기
    checkBoxMarket.style.display = "block";
    // chooseBtRest 스타일 원래대로 변경
    chooseBtRest.style.fontWeight = "";
    chooseBtRest.style.boxShadow = "none";
    chooseBtRest.style.border = "1px solid #d9d9d9"
    // checkBoxRest 감추기
    checkBoxRest.style.display = "none";
  });
  // 체크박스 내용 초기화 함수
function resetCheckboxes(checkboxContainer) {
  const checkboxes = checkboxContainer.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });}
  // ===================================================
  // 지역 선택 초기화
  var initialSetup = function() {
    // chooseBtRest 초기 설정
    chooseBtRest.style.fontWeight = "bold";
    chooseBtRest.style.boxShadow = "0 0 0 1px #191919 inset";
    // checkBoxRest 초기 설정
    checkBoxRest.style.display = "block";
    checkBoxMarket.style.display = "none";
    // chooseBtMarket 초기 설정
    chooseBtMarket.style.border = "1px solid #d9d9d9";
    chooseBtMarket.style.boxShadow = "none"
};
  // 모달이 닫힐 때 이벤트 핸들러
function closeModal() {
  // 모달 닫기 로직...
  // 지역 선택 요소 초기화
  var triggerText = document.querySelector('.trigger_txt');
  triggerText.textContent = '지역을 선택해주세요.';
  var optVal = document.querySelector('.opt_val');
  optVal.value = '';
      // 초기 설정으로 복원
      initialSetup();
}
// 모달이 열릴 때 이벤트 핸들러 등록
var modal = document.getElementById('myModal');
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
      closeModal();
  }
});
// 모달 닫기 버튼 클릭 시 호출되는 함수
function closeModelWithButton() {
  closeModal();
  // 모달 닫기 로직...
}
  // ===================================================
// 모든 체크박스가 선택되었는지 확인하는 함수
function areAllCheckboxesChecked(checkboxes) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      return false;
    }
  }
  return true;
}
// 등록하기 버튼 요소
const submitBtn = document.getElementById("submitBtn");
// 등록하기 버튼 클릭 이벤트에 이벤트 핸들러 등록
submitBtn.addEventListener("click", function() {
  // 폼 요소 참조
  const form = document.getElementById("modal-content");
  // textarea 요소
  var textarea = document.querySelector('textarea');
  // textarea에 입력된 텍스트 길이
  var textLength = textarea.value.trim().length; // trim() 함수를 사용하여 앞뒤 공백을 제거
  // 파일 업로드 input 요소
  var fileInput = document.getElementById('file');
  // 제목 입력 요소
  var titleInput = document.querySelector('.review-write-cont-list input[type="text"]');
  // 파일 업로드
  var fileimgContainer = document.getElementById('imgfile');
  // 모든 에러 메시지 요소
  var errorMessages = document.querySelectorAll('.error-message');
  
  // 모든 에러 메시지 초기화
  errorMessages.forEach(function(error) {
    error.textContent = '';
  });
  // 각 체크박스 그룹에서 선택된 체크박스 수를 초기화
  var tasteChecked = 0;
  var priceChecked = 0;
  var restServiceChecked = 0;
  var accessibilityChecked = 0;
  var entertainmentChecked = 0;
  var marketServiceChecked = 0;
  // checkBoxRest가 보이는 경우
  if (checkBoxRest && getComputedStyle(checkBoxRest).display !== 'none') {
    // 맛, 가격, 응대 중 하나라도 선택되지 않은 경우
    var checkboxes = checkBoxRest.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        switch (checkbox.name) {
          case 'taste':
            tasteChecked++;
            break;
          case 'price':
            priceChecked++;
            break;
          case 'rest_service':
            restServiceChecked++;
            break;
        }
      }
    });
  }
  // checkBoxMarket이 보이는 경우
  if (checkBoxMarket && getComputedStyle(checkBoxMarket).display !== 'none') {
    // 접근성, 볼거리, 응대 중 하나라도 선택되지 않은 경우
    var checkboxes = checkBoxMarket.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        switch (checkbox.name) {
          case 'accessibility':
            accessibilityChecked++;
            break;
          case 'entertainment':
            entertainmentChecked++;
            break;
          case 'market_service':
            marketServiceChecked++;
            break;
        }
      }
    });
  }
  // 각 체크박스 그룹에서 선택된 체크박스 수가 0인 경우, 에러 메시지를 표시
  if (checkBoxRest && tasteChecked === 0) {
    document.getElementById('taste-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('taste-error').textContent = '';
  }
  if (checkBoxRest && priceChecked === 0) {
    document.getElementById('price-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('price-error').textContent = '';
  }
  if (checkBoxRest && restServiceChecked === 0) {
    document.getElementById('rest_service-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('rest_service-error').textContent = '';
  }
  // 시장 체크
  if (checkBoxMarket && accessibilityChecked === 0) {
    document.getElementById('accessibility-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('accessibility-error').textContent = '';
  }
  if (checkBoxMarket && entertainmentChecked === 0) {
    document.getElementById('entertainment-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('entertainment-error').textContent = '';
  }
  if (checkBoxMarket && marketServiceChecked === 0) {
    document.getElementById('market_service-error').textContent = '* 평가를 선택해주세요.';
  } else {
    document.getElementById('market_service-error').textContent = '';
  }
  // 에러 메시지가 표시된 후에 체크박스가 선택되면 에러 메시지를 지웁니다.
  document.querySelectorAll('.check-box-cont input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        var errorMessageId = checkbox.getAttribute('name') + '-error';
        document.getElementById(errorMessageId).textContent = '';
      }
    });
  });
  // 에러 메시지 출력을 위한 span
  var titleError = document.getElementById('review-title-error');
  var contentError = document.getElementById('review-write-error');
  var reviewPhotoError = document.getElementById('review-photo-error');
  // 각각의 에러 메시지를 초기화
  titleError.textContent = '';
  contentError.textContent = '';
  reviewPhotoError.textContent = '';
  // 제목이 비어있는 경우 에러 메시지 표시
  if (titleInput.value.trim().length === 0) {
    titleError.textContent = '* 제목을 입력해 주세요.';
  } else {
    // 제목이 비어있지 않은 경우 에러 메시지 지움
    titleError.textContent = '';
  }
  // textarea의 글자 수가 10글자 미만일 때 에러 메시지 표시
  if (textLength < 10) {
    contentError.textContent = '* 후기를 10자 이상 작성해주세요.';
  } else {
    // 텍스트 길이가 10글자 이상일 때 에러 메시지 지움
    contentError.textContent = '';
  }
  // 파일이 첨부되지 않은 경우 에러 메시지 표시
  if (fileInput.files.length === 0) {
    reviewPhotoError.textContent = '* 영수증 사진을 업로드 해주세요.';
  } else {
    // 파일이 첨부된 경우 에러 메시지 지움
    reviewPhotoError.textContent = '';
  }
  // 모든 조건이 충족되면 값 초기화 및 알림 표시
  if (titleInput.value.trim().length > 0 && textLength >= 10 && fileInput.files.length > 0 &&
    ((checkBoxRest && areAllCheckboxesChecked(checkBoxRest.querySelectorAll('input[type="checkbox"]'))) ||
      (checkBoxMarket && areAllCheckboxesChecked(checkBoxMarket.querySelectorAll('input[type="checkbox"]'))))) {
    // 모든 입력 필드 초기화
    titleInput.value = '';
    textarea.value = '';
    fileInput.value = '';
    // 모든 체크박스 해제
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
      checkbox.checked = false;
    });
    // 등록 완료 알림 표시
    alert("등록되었습니다.");
  }
});
  // ============================================
let selectedFiles = []; // 선택된 파일 목록을 기록하는 배열
function handleImageChange(e) {
  const fileInput = e.target;
  const files = fileInput.files;
  // 이미 업로드된 파일의 수를 세어 현재 업로드된 파일 수를 확인합니다.
  const uploadedFilesCount = selectedFiles.length;
  const newFilesCount = files.length;
  // 총 파일 수가 3개를 초과하는 경우 업로드를 막습니다.
  if (uploadedFilesCount + newFilesCount > 6) {
    alert('이미지는 최대 6개까지 업로드할 수 있습니다.');
    fileInput.value = '';
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.startsWith('image/')) {
      // 이미지 파일이 아닌 경우 경고 메시지를 표시하고 파일 선택을 초기화합니다.
      alert('이미지 파일만 업로드할 수 있습니다.');
      fileInput.value = '';
      continue;
    }
    // 선택된 파일 목록에 파일을 추가합니다.
    if (!selectedFiles.some(selectedFile => selectedFile.name === file.name)) {
      selectedFiles.push(file); // 선택된 파일 목록에 추가
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgSrc = e.target.result;
        // 이미지를 미리보기 컨테이너에 추가합니다.
        addImagePreview(imgSrc, file);
      };
      reader.readAsDataURL(file);
    }
  }
}
function addImagePreview(imgSrc, file) {
  const imgContainer = document.querySelector('.imgContainer');
  // 새로운 이미지 및 삭제 버튼을 생성합니다.
  const imgBox = document.createElement('div');
  imgBox.classList.add('imgBox');
  const img = document.createElement('img');
  img.src = imgSrc;
  img.width = 150;
  img.height = 150;
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteImg');
  // deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // 아이콘 추가
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    // 선택된 파일 목록에서 해당 파일을 제거합니다.
    selectedFiles = selectedFiles.filter(selectedFile => selectedFile.name !== file.name);
    // 이미지 삭제 버튼을 클릭하면 해당 이미지와 삭제 버튼을 삭제합니다.
    imgBox.remove();
    // 파일 선택(input)에서 삭제된 파일을 다시 업로드할 수 있도록 파일을 초기화합니다.
    fileInput.value = '';
  };
  // 이미지와 삭제 버튼을 이미지 상자에 추가합니다.
  imgBox.appendChild(img);
  imgBox.appendChild(deleteButton);
  // 이미지 상자를 이미지 컨테이너에 추가합니다.
  imgContainer.appendChild(imgBox);
}
// 파일 선택 창의 변경 이벤트에 대한 핸들러를 연결합니다.
const fileInput = document.getElementById('file');
fileInput.addEventListener('change', handleImageChange);
  // ============================================
})
// ============================ 제이쿼리 (모달창 지역 선택)
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
// ============================ 모달창 지역 선택 끝
function uncheckAll(checkboxes) {
  checkboxes.forEach((chk) => {
    chk.checked = false;
  });
}
function checkTaste(element) {
  uncheckAll(document.getElementsByName("taste"));
  element.checked = true;
}
function checkPrice(element) {
  uncheckAll(document.getElementsByName("price"));
  element.checked = true;
}
function checkRestService(element) {
  uncheckAll(document.getElementsByName("rest_service"));
  element.checked = true;
}
function checkAccessibility(element) {
  uncheckAll(document.getElementsByName("accessibility"));
  element.checked = true;
}
function checkEntertainment(element) {
  uncheckAll(document.getElementsByName("entertainment"));
  element.checked = true;
}
function checkMarketService(element) {
  uncheckAll(document.getElementsByName("market_service"));
  element.checked = true;
}
$(document).ready(function () {
// 별점
$(".review-stars > .star:first-child").addClass("on");
$(".review-stars > .star").click(function () {
    $(this).parent().children("span").removeClass("on");
    $(this).addClass("on").prevAll("span").addClass("on");
    var value = $(this).data("value");
    console.log("Selected rating:", value);
});
// 별점 초기화 함수
function resetStars() {
    $(".review-stars > .star").removeClass("on");
    $(".review-stars > .star:first-child").addClass("on");
    console.log("Rating reset");
}
  // 텍스트 카운트 업데이트 함수
  function updateTextCount() {
    let content = $(".review-write-cont-list textarea").val();
    let count = content.length;
    $(".textCount").text(count + "자");
  }
  // 리뷰 쓰기 클릭 시 모달 열기
  $("#reviewModal").click(function () {
    $("#myModal").fadeIn();
    resetModalContent(); // 모달 열 때 내용 초기화
    resetStars(); // 별점 초기화
    $("body").css("overflow", "hidden"); // body 스크롤 막기
    updateTextCount(); // 텍스트 카운트 초기화
        // "맛집" 선택
        $("#choose-bts").prop("checked", true);
  });
  // 모달 닫기 버튼 클릭 시 모달 닫기
  $(".md-top-close").click(function (event) {
    confirmExit(event); // 모달 닫기 시 확인 여부를 물어봄
  });
  // 모달 외부 클릭 시 모달 닫기
  $(window).click(function (e) {
    if (e.target == document.getElementById("myModal")) {
      confirmExit(e); // 모달 닫기 시 확인 여부를 물어봄
      $("body").css("overflow", "auto"); // body 스크롤 가능하게 하기
    }
  });
  // 모달이 닫힐 때 이미지 초기화
  $('#myModal').on('hidden.bs.modal', function () {
    resetModalContent(); // 모달이 닫힐 때 내용 초기화
    resetStars(); // 별점 초기화
  });
  // 나가기 확인 함수
  function confirmExit(event) {
    if (confirm("작성한 내용이 지워집니다. 나가시겠습니까?")) {
      // 사용자가 나가기를 확인하면 모달 내용을 초기화하고 모달을 닫습니다.
      resetModalContent();
      $("#myModal").fadeOut();
      $("body").css("overflow", "auto"); // body 스크롤 가능하게 하기
    } else {
      // 사용자가 취소를 선택한 경우에는 아무런 작업을 하지 않습니다.
      event.stopPropagation(); // 모달 외부 클릭 이벤트 전파 중지
    }
  }
  // 모달 내용 초기화 함수
  function resetModalContent() {
    // 입력 필드 초기화
    $("#myModal input[type='text']").val("");
    $("#myModal textarea").val("");
    // 체크박스 초기화
    $("#myModal input[type='checkbox']").prop("checked", false);
    // 선택된 파일 목록 초기화
    selectedFiles = [];
    // 이미지 미리보기 초기화
    $(".imgContainer").empty();
    // 텍스트 카운트 초기화
    $(".textCount").text("0자");
  }
  // 텍스트 입력 시 텍스트 카운트 업데이트
  $(".review-write-cont-list textarea").on('input', function (e) {
    updateTextCount();
  });
    // 별점 초기화
    resetStars();  
});
