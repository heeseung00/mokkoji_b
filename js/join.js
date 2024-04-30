// =========================================================================================================
// 제이쿼리

$(document).ready(function () {
  // 회원가입 단계 전환
  $("#join_agree_btn > .signup-next-btn").click(function () {
    $("#join_agree, #join_more_info").css("display", "none");
    $("#join_basic_info").css("display", "block");
  });

  $("#join_basic_info_btn > .signup-next-btn2").click(function () {
    $("#join_agree, #join_basic_info").css("display", "none");
    $("#join_more_info").css("display", "block");
  });

  // 창 크기에 따라 버튼 텍스트 변경 및
  function updateButtonText() {
    $("#signUp_send").text($(window).width() <= 895 ? "인증번호" : "인증번호 요청");
  }

  //  ===========================================
  // 유효성 검사

  // 초기화 시 버튼 텍스트 업데이트 및 유효성 검사
  updateButtonText();

  // 창 크기 변경 시 버튼 텍스트 업데이트 및 유효성 검사
  $(window).on("resize", updateButtonText);

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

  $("#user_id").on("blur", function () {
    validateInput($(this), emailRegex, "올바른 이메일 형식이 아닙니다.");
  });

  $("#user_pw").on("blur", function () {
    validateInput($(this), passwordRegex, "8자리 이상 영문 소문자와 숫자를 입력해주세요.");
  });

  $("#confirm_pw").on("blur", function () {
    var password = $("#user_pw").val();
    var confirmPassword = $(this).val();
    if (password === confirmPassword) {
      $(this).removeClass("error");
      $(this).siblings(".error").text("");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 20px 10px");
    } else {
      $(this).addClass("error");
      $(this).siblings(".error").text("비밀번호가 일치하지 않습니다.");
      $(".join .signupForm-content button.signup-check").css("margin", "0 0 10px 10px");
    }
  });

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
    window.location.href = "login.html";
  });
});
