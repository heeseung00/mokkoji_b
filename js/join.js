// window.addEventListener("load", function () {
//
//   var joinSwiper = new Swiper(".joinSwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + "</span>";
//       },
//     },
//   });
// })

// =========================================================================================================
// 제이쿼리

$(document).ready(function () {
  // 전체 동의 라디오 버튼 선택 해제 시
  // 전체 동의 라디오 버튼
  $("#chkAll").change(function () {
    var isChecked = $(this).prop("checked");
    $(".chk").prop("checked", isChecked);
  });

  //=======================================
  //필수 항목 비동의시 다음 페이지로 안 넘어감
  $("#join_agree_btn > .signup-next-btn").click(function () {
    if ($("#chk1").prop("checked") && $("#chk2").prop("checked")) {
      // #chk1과 #chk2가 모두 체크되어 있으면 다음 단계로 이동
      $("#join_agree, #join_more_info").css("display", "none");
      $("#join_basic_info").css("display", "block");
      return true;
    } else {
      // #chk1과 #chk2 중 하나라도 체크되어 있지 않으면 알림 창 표시
      alert("필수 약관에 동의해주세요.");
      return false; // 다음 단계로 이동되지 않도록 함
    }
  });

  // ===================================================================

  // 창 크기에 따라 버튼 텍스트 변경 및
  function updateButtonText() {
    $("#signUp_send").text($(window).width() <= 1250 ? "인증번호" : "인증번호 요청");
  }
  updateButtonText();

  //  ===========================================
  // 유효성 검사: 기본정보
  // 정규 표현식을 사용한 유효성 검사
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/; // 숫자와 소문자 8글자 이상

  function validateInput(input, regex, errorMessage) {
    if (regex.test(input.val())) {
      input.removeClass("error");
      input.siblings(".error").text("");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 20px 10px");
      return true;
    } else {
      input.addClass("error");
      input.siblings(".error").text(errorMessage);
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 10px 10px");
      return false;
    }
  }

  function validateConfirmPassword() {
    var password = $("#user_pw").val();
    var confirmPassword = $("#confirm_pw").val();
    if (password === confirmPassword) {
      $("#confirm_pw").removeClass("error");
      $("#confirm_pw").siblings(".error").text("");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 20px 10px");
      return true;
    } else {
      $("#confirm_pw").addClass("error");
      $("#confirm_pw").siblings(".error").text("비밀번호가 일치하지 않습니다.");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 10px 10px");
      return false;
    }
  }

  // 사용자가 입력란에 타이핑하는 동안 유효성 검사 실시
  $("#user_id").on("input", function () {
    validateInput($(this), emailRegex, "올바른 이메일 형식이 아닙니다.");
  });

  $("#user_pw").on("input", function () {
    validateInput($(this), passwordRegex, "8자리 이상 영문 소문자와 숫자를 입력해주세요.");
  });

  $("#confirm_pw").on("input", function () {
    validateConfirmPassword();
  });

  $("#user_nickname").on("input", function () {
    validateInput($(this), /.+/, "닉네임을 입력해주세요.");
  });

  // 다음 페이지로 넘어가는 버튼 클릭 시 유효성 검사 수행
  $("#join_basic_info_btn > .signup-next-btn2").click(function (e) {
    e.preventDefault();
    var validEmail = validateInput($("#user_id"), emailRegex, "올바른 이메일 형식이 아닙니다.");
    var validPassword = validateInput($("#user_pw"), passwordRegex, "8자리 이상 영문 소문자와 숫자를 입력해주세요.");
    var validConfirmPassword = validateConfirmPassword();
    var validNickname = validateInput($("#user_nickname"), /.+/, "닉네임을 입력해주세요.");

    if (validEmail && validPassword && validConfirmPassword && validNickname) {
      // 오류 메시지 숨기기
      $("#user_id, #user_pw, #confirm_pw, #user_nickname").siblings(".error").text("");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 20px 10px");

      // 다음 페이지로 이동
      $("#join_agree, #join_basic_info").css("display", "none");
      $("#join_more_info").css("display", "block");
    } else {
      // 필수 정보를 입력하지 않았을 경우 다음 단계로 이동하지 않음
      return false;
    }
  });

  // Enter 키 입력 시 제출 방지
  $("form").on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      return false;
    }
  });

  // =================================================
  // 휴대폰: 유효성 검사
  // 인증번호 입력: 인증번호, 인증하기 입력란 숫자 5자리로 제한
  // 입력란 숫자와 "-" 13자리 이하로 제한 및 유효성 검사
  $("#signupEnterNumber, #user_number").on("input", function () {
    var inputValue = $(this).val();
    // 입력된 값이 숫자와 "-"이고 13자리 이하인지 확인
    if (!/^[\d-]{0,13}$/.test(inputValue)) {
      // 숫자와 "-"가 아니거나 13자리 이상이면 입력한 값을 잘라냄
      $(this).val(inputValue.replace(/[^\d-]/g, "").slice(0, 13));
      // #signupEnterNumber인 경우 에러 메시지 표시
      if ($(this).attr("id") === "signupEnterNumber") {
        $(this).siblings(".error").text("숫자 5자리를 입력해주세요.");
      }
      // #user_number인 경우 에러 메시지 표시
      else if ($(this).attr("id") === "user_number") {
        $(this).siblings(".error").text("숫자와 -만 입력해주세요.");
      }
    } else {
      // 유효성 검사 통과 시 에러 메시지 지우기
      $(this).siblings(".error").text("");
    }
  });

  // 입력란에서 한글과 영어 입력 막기
  $("#signupEnterNumber, #user_number").on("keydown", function (e) {
    // 입력된 키 중에서 숫자와 "-"를 제외한 모든 입력을 막음
    if (!(e.key.match(/[\d-]/) || e.key === "Backspace")) {
      e.preventDefault();
    }
  });

  // =================================================
  // 휴대폰: 인증번호 받기
  let seconds; // 남은 시간 변수
  let countdown; // 카운트다운을 관리하는 변수
  const $timeSpan = $("span.time"); // 시간을 표시할 요소
  const $btnSend = $("#signUp_send"); // "인증번호 받기" 버튼 요소

  // 시간을 업데이트하고 화면에 표시하는 함수
  const updateCountdown = function () {
    if (seconds >= 0) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      $timeSpan.text(`${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`);
      seconds--;
    } else {
      clearInterval(countdown);
      alert("인증번호 유효시간이 만료되었습니다.");
    }
  };

  // "인증번호 받기" 버튼 클릭 이벤트 핸들러
  $btnSend.on("click", function (e) {
    e.preventDefault();
    $btnSend.text("재전송");
    alert("인증번호가 발송되었습니다.");

    clearInterval(countdown);
    seconds = 180; // 3분(180초)

    updateCountdown();
    // 1초마다 카운트다운 업데이트
    countdown = setInterval(updateCountdown, 1000);
  });

  // =================================================
  // 나중에 입력하기 체크 여부에 따라 동작 설정
  $("#later_enter").change(function () {
    if ($(this).is(":checked")) {
      // 나중에 입력하기가 체크되면 해당 폼 안의 모든 input과 select, button을 비활성화
      $("#join_more_info input, #join_more_info select, .signup-check-border,  #user_number , #signupEnterNumber ,span.time").not("#later_enter").prop("disabled", true).addClass("disabled-style");
      $("#join_more_info_btn button").prop("disabled", true);
      $("span.error").hide(); // 나중에 입력하기 체크 시 에러 메시지 숨김
      $(".input-wrap").addClass("later_enter_margin");
    } else {
      // 나중에 입력하기가 체크 해제되면 해당 폼 안의 모든 input과 select, button을 활성화
      $("#join_more_info input, #join_more_info select, #user_number, #signupEnterNumber,span.time ").not("#later_enter").prop("disabled", false).removeClass("disabled-style");
      $("#join_more_info_btn button").prop("disabled", false);
      $("span.error").show(); // 나중에 입력하기 체크 해제 시 에러 메시지 보임
      $(".input-wrap").removeClass("later_enter_margin");
    }
  });

  // 페이지 로드 시 초기화
  $("#later_enter").change();

  //   ===============================================
  // 라디오 버튼 선택해제
  $("input[type=radio]").each(function () {
    var chk = $(this).is(":checked");
    var name = $(this).attr("name"); //<- 여기 radio name값 넣으면 끝
    if (chk == true) $("input[name='" + name + "']").data("previous", $(this).val());
  });

  $("input[type=radio]").click(function () {
    var pre = $(this).data("previous");
    var chk = $(this).is(":checked");
    var name = $(this).attr("name");

    if (chk == true && pre == $(this).val()) {
      $(this).prop("checked", false);
      $("input[name='" + name + "']").data("previous", "");
    } else {
      if (chk == true) $("input[name='" + name + "']").data("previous", $(this).val());
    }
  });

  // =========================================================
  //   체크 화살표 방향 바꾸기
  $("#check_detial_Btn1").click(function () {
    $("#checkTxt1").toggle();
    // var $icon = $(this).find("i");
    // $icon.toggleClass("rotated");
  });

  $("#check_detial_Btn2").click(function () {
    $("#checkTxt2").toggle();
    // var $icon = $(this).find("i");
    // $icon.toggleClass("rotated");
  });

  $("#check_detial_Btn3").click(function () {
    $("#checkTxt3").toggle();
    // var $icon = $(this).find("i");
    // $icon.toggleClass("rotated");
  });

  $("#join_more_info_btn button").click(function () {
    // 회원가입 완료 알림 메시지를 표시합니다.
    alert("회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.");

    // 로그인 페이지로 이동합니다.
    // window.location.href = "login.html";
  });
});
