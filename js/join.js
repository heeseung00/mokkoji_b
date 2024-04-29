$(function () {
  $("#user_id ,#user_pw ,#confirm_pw").on("focus", function () {
    $(this).addClass("focused");
  });
  $("#user_id ,#user_pw ,#confirm_pw").on("blur", function () {
    $(this).removeClass("focused");
  });

  // '더 많은 정보를 입력하고 회원가입' 버튼 클릭 핸들러
  $("#join_more_info_btn").click(function () {
    // 여기에 회원가입 처리 코드를 추가합니다.
    var userId = $("#user_id").val();
    var password = $("#user_pw").val();
    var confirmPw = $("#confirm_pw").val();

    // 유효성 검사 코드 추가

    // 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (password !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
      return;
    }

    // 여기에 유효성 검사 코드를 추가하세요.

    // 유효성 검사 통과시 아래 코드 실행

    // 회원가입이 성공적으로 완료되면 로컬 스토리지에 사용자 정보를 저장합니다.
    localStorage.setItem("userId", userId);
    localStorage.setItem("password", password);

    // 회원가입 완료 알림 메시지를 표시합니다.
    alert("회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.");

    // 로그인 페이지로 이동합니다.
    window.location.href = "login.html";
  });
});

// 창 크기가 변경될 때마다 버튼 텍스트 변경
$(window).on("resize", function () {
  if ($(window).width() <= 790) {
    $("#signUp_send").text("인증번호");
  } else {
    $("#signUp_send").text("인증번호 요청");
  }
});
