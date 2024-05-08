window.addEventListener("load", function () {
  // ==============================================================
  // 로그인 로그인 로그인
  document.getElementById("loginCloseIcon").addEventListener("click", function () {
    window.location.href = "index-login.html";
  });

  const loginForm = document.querySelector(".login_wrap form");
  const idInput = document.querySelector('.login_wrap input[type="text"]');
  const passwordInput = document.querySelector('.login_wrap input[type="password"]');

  idInput.addEventListener("input", function () {
    validateId();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 동작(페이지 이동) 방지

    const idIsValid = validateId();
    const passwordIsValid = validatePassword();

    // 유효성 검사 통과시 페이지 이동
    if (idIsValid && passwordIsValid) {
      // 여기에 로그인 처리 코드를 추가할 수도 있습니다.

      // 로그인이 성공하면 페이지 이동
      location.href = "index-login.html";
    }
  });

  function validateId() {
    // 아이디 유효성 검사 - 이메일 형식인지 확인
    const idValue = idInput.value.trim();
    const idPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let idIsValid = idPattern.test(idValue);
    const idError = document.getElementById("idError");
    if (!idIsValid) {
      idError.innerText = "올바른 이메일을 입력하세요.";
      idInput.parentElement.classList.add("error");
      idInput.parentElement.style.marginBottom = "10px";
    } else {
      idError.innerText = ""; // 유효성 메시지 초기화
      idInput.parentElement.classList.remove("error");
      idInput.parentElement.style.marginBottom = "";
    }
    return idIsValid;
  }

  function validatePassword() {
    // 비밀번호 유효성 검사 - 8자리 이상 영어 소문자와 숫자로 이루어진 조합인지 확인
    const passwordValue = passwordInput.value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/;
    let passwordIsValid = passwordPattern.test(passwordValue);
    const passwordError = document.getElementById("passwordError");
    if (!passwordIsValid) {
      passwordError.innerText = "8자 이상의 영어 소문자와 숫자의 조합을 입력하세요.";
      passwordInput.parentElement.classList.add("error");
      passwordInput.parentElement.style.marginBottom = "10px";
    } else {
      passwordError.innerText = ""; // 유효성 메시지 초기화
      passwordInput.parentElement.classList.remove("error");
      passwordInput.parentElement.style.marginBottom = "";
    }
    return passwordIsValid;
  }
  //   var idInput = document.querySelector(".input-box input[type='text']");
  //   var passwordInput = document.querySelector(".input-box.login_password input[type='password']");
  //   var loginButton = document.querySelector("#loginBtnWrap input[type='submit']");

  //   loginButton.addEventListener("click", function () {
  //     // window.location.href = "index-login.html";
  //     // 아이디와 비밀번호가 모두 입력되었는지 확인
  //     if (idInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
  //       // 모두 입력되었으면 index.html로 이동
  //       window.location.href = "index-login.html";
  //     } else {
  //       // 아이디 또는 비밀번호가 입력되지 않았을 경우
  //       //   event.preventDefault(); // 기본 동작(폼 제출) 막기
  //       alert("아이디와 비밀번호를 모두 입력해주세요.");
  //     }
  //   });
});
