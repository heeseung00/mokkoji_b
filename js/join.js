window.addEventListener('load', function () {
    // =========================================================
    // 회원가입버튼 및 로그인 페이지로 이동
    $('#join_more_info_btn button').click(function () {
        // 회원가입 완료 알림 메시지를 표시합니다.
        alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');

        // 로그인 페이지로 이동합니다.
        window.location.href = 'login.html';
    });

    // ========================================================
    // JavaScript로 버튼에 클릭 이벤트 핸들러 할당
    document.getElementById('signUp_send_check').addEventListener('click', completeVerification);

    var isVerified = false;
    var countdown; // 카운트다운을 관리하는 변수

    function completeVerification(event) {
        event.preventDefault(); // 기본 동작 방지

        // 입력된 값 가져오기
        var inputValue = document.getElementById('join_more_info').querySelector('#signupEnterNumber').value.trim();

        // 입력된 값이 비어있는지 확인
        if (inputValue !== '') {
            // 이미 인증되었는지 확인
            if (!isVerified) {
                // 버튼 안의 텍스트를 "인증 완료"로 변경
                var button = document.getElementById('join_more_info').querySelector('#signUp_send_check');
                button.innerText = '인증 완료';

                // 버튼 스타일 변경
                button.style.color = '#777777';
                button.style.backgroundColor = '#f4f4f4';
                button.style.borderColor = '#f4f4f4';

                // #signupEnterNumber 스타일 변경
                var signupEnterNumber = document.getElementById('join_more_info').querySelector('#signupEnterNumber');
                signupEnterNumber.style.color = '#777777';
                signupEnterNumber.style.backgroundColor = '#f4f4f4';
                signupEnterNumber.style.borderColor = '#f4f4f4';

                // 입력 불가능하게 만듭니다.
                signupEnterNumber.disabled = true;

                // 인증 완료 메시지를 alert 창으로 표시
                alert('인증이 완료되었습니다.');

                // 클릭 이벤트 제거
                button.removeEventListener('click', completeVerification);

                // 인증 상태 업데이트
                isVerified = true;

                // 카운트 다운 메시지를 숨깁니다.
                document.querySelector('span.time').style.display = 'none';
            } else {
                // 이미 인증된 경우
                alert('이미 인증되었습니다.');
            }
        } else {
            // 입력된 값이 없는 경우
            alert('인증번호를 입력해주세요.');
        }
    }

    // "인증하기" 버튼 클릭 이벤트 리스너 추가
    document
        .getElementById('join_more_info')
        .querySelector('#signUp_send_check')
        .addEventListener('click', function () {
            // 이미 인증된 경우에만 카운트 다운 메시지를 숨깁니다.
            if (isVerified) {
                document.querySelector('span.time').style.display = 'none';
            }
            completeVerification();
        });

    // "인증하기" 버튼 클릭 시 카운트 다운 시작
    document
        .getElementById('join_more_info')
        .querySelector('#signUp_send_check')
        .addEventListener('click', function () {
            // 카운트 다운을 관리하는 함수
            function updateCountdown() {
                if (seconds >= 0) {
                    const minutes = Math.floor(seconds / 60);
                    const remainingSeconds = seconds % 60;
                    $timeSpan.text(
                        `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
                    );
                    seconds--;
                } else {
                    clearInterval(countdown);
                    alert('인증번호 유효시간이 만료되었습니다.');
                }
            }

            // 카운트 다운 시작
            clearInterval(countdown); // 기존 카운트 다운 중이면 중지
            seconds = 180; // 3분(180초) 카운트 다운으로 설정
            updateCountdown(); // 초기 카운트 다운 값을 표시
            countdown = setInterval(updateCountdown, 1000); // 1초마다 업데이트
        });

    // #signupEnterNumber 값 변경 감지하여 스타일 초기화
    document
        .getElementById('join_more_info')
        .querySelector('#signupEnterNumber')
        .addEventListener('input', function () {
            var signupEnterNumber = document.getElementById('join_more_info').querySelector('#signupEnterNumber');
            if (!isVerified && signupEnterNumber.value.trim() !== '') {
                // 값이 입력된 경우 스타일 초기화
                signupEnterNumber.style.color = '';
                signupEnterNumber.style.backgroundColor = '';
                signupEnterNumber.style.borderColor = '';
            }
        });

    // =========================================================================================================
    // 중복확인 버튼 클릭: 이동 막기
    document.getElementById('doble-check-btn').addEventListener('click', function (event) {
        event.preventDefault();
        alert('사용 가능한 닉네임입니다.');
    });
});

// =========================================================================================================
// 제이쿼리
$(document).ready(function () {
    $('#cbx_chkAll').click(function () {
        if ($('#cbx_chkAll').is(':checked')) $('input[name=chk]').prop('checked', true);
        else $('input[name=chk]').prop('checked', false);
    });

    $('input[name=chk]').click(function () {
        var total = $('input[name=chk]').length;
        var checked = $('input[name=chk]:checked').length;

        if (total != checked) $('#cbx_chkAll').prop('checked', false);
        else $('#cbx_chkAll').prop('checked', true);
    });

    // =========================================================================================================
    //필수 항목 비동의시 다음 페이지로 안 넘어감
    $('#join_agree_btn > .signup-next-btn').click(function () {
        if ($('#chk1').prop('checked') && $('#chk2').prop('checked')) {
            // #chk1과 #chk2가 모두 체크되어 있으면 다음 단계로 이동
            $('#join_agree, #join_more_info').css('display', 'none');
            $('#join_basic_info').css('display', 'block');
            return true;
        } else {
            // #chk1과 #chk2 중 하나라도 체크되어 있지 않으면 알림 창 표시
            alert('필수 약관에 동의해주세요.');
            return false; // 다음 단계로 이동되지 않도록 함
        }
    });

    // =========================================================================================================
    // 라디오 버튼 선택해제
    $('input[type=radio]').each(function () {
        var chk = $(this).is(':checked');
        var name = $(this).attr('name'); //<- 여기 radio name값 넣으면 끝
        if (chk == true) $("input[name='" + name + "']").data('previous', $(this).val());
    });

    $('input[type=radio]').click(function () {
        var pre = $(this).data('previous');
        var chk = $(this).is(':checked');
        var name = $(this).attr('name');

        if (chk == true && pre == $(this).val()) {
            $(this).prop('checked', false);
            $("input[name='" + name + "']").data('previous', '');
        } else {
            if (chk == true) $("input[name='" + name + "']").data('previous', $(this).val());
        }
    });

    // =========================================================================================================
    // 약관 동의: 내용 보이기
    // #check_detial_Btn1을 클릭했을 때
    $('#check_detial_Btn1').click(function () {
        $('#checkTxt1').toggle();
    });

    // #check_detial_Btn2을 클릭했을 때
    $('#check_detial_Btn2').click(function () {
        $('#checkTxt2').toggle();
    });

    // #check_detial_Btn3을 클릭했을 때
    $('#check_detial_Btn3').click(function () {
        $('#checkTxt3').toggle();
    });

    // ==========================================================
    // 약관 동의: 체크 화살표 방향 바꾸기
    $('.check_detial_icon1').click(function () {
        // 아이콘 회전
        $(this).toggleClass('rotate');
    });

    $('.check_detial_icon2').click(function () {
        // 아이콘 회전
        $(this).toggleClass('rotate');
    });

    $('.check_detial_icon3').click(function () {
        // 아이콘 회전
        $(this).toggleClass('rotate');
    });

    // ===================================================================

    // 창 크기에 따라 버튼 텍스트 변경 및
    function updateButtonText() {
        $('#signUp_send').text($(window).width() <= 1250 ? '인증번호' : '인증번호 요청');
    }
    updateButtonText();

    // ===================================================================
    // 정규 표현식을 사용한 유효성 검사
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/; // 숫자와 소문자 8글자 이상

    function validateInput(input, regex, errorMessage, wrapId) {
        if (regex.test(input.val())) {
            input.siblings('.error').hide(); // 유효성 검사 통과 시 에러 메시지 숨김
            $('#' + wrapId)
                .find('label.label-title')
                .css('padding-bottom', '30px'); // 에러 메시지가 숨겨질 때 padding-bottom 변경
            return true;
        } else {
            input.siblings('.error').text(errorMessage).show(); // 유효성 검사 실패 시 에러 메시지 표시
            $('#' + wrapId)
                .find('label.label-title')
                .css('padding-bottom', '20px'); // 에러 메시지가 보일 때 padding-bottom 변경
            return false;
        }
    }

    function validateConfirmPassword() {
        var password = $('#user_pw').val();
        var confirmPassword = $('#confirm_pw').val();
        if (password === confirmPassword) {
            $('#confirm_pw').siblings('.error').hide(); // 유효성 검사 통과 시 에러 메시지 숨김
            $('#confirmPwWrap').find('label.label-title').css('padding-bottom', '30px'); // 에러 메시지가 숨겨질 때 padding-bottom 변경
            return true;
        } else {
            $('#confirm_pw').siblings('.error').text('비밀번호가 일치하지 않습니다.').show(); // 유효성 검사 실패 시 에러 메시지 표시
            $('#confirmPwWrap').find('label.label-title').css('padding-bottom', '20px'); // 에러 메시지가 보일 때 padding-bottom 변경
            return false;
        }
    }

    // 사용자가 입력란에 타이핑하는 동안 유효성 검사 실시
    $('#user_id').on('input', function () {
        validateInput($(this), emailRegex, '올바른 이메일 형식이 아닙니다.', 'userIdWrap');
    });

    $('#user_pw').on('input', function () {
        validateInput($(this), passwordRegex, '8자리 이상 영문 소문자와 숫자를 입력해주세요.', 'pwWrap');
    });

    $('#confirm_pw').on('input', function () {
        validateConfirmPassword();
    });

    $('#user_nickname').on('input', function () {
        validateInput($(this), /.+/, '닉네임을 입력해주세요.', 'nicknameWrap');
        var errorVisible = $(this).siblings('.error').is(':visible');
        if (errorVisible) {
            $('#nicknameWrap').find('label.label-title').css('padding-bottom', '20px');
        } else {
            $('#nicknameWrap').find('label.label-title').css('padding-bottom', '-10px');
        }
    });

    function adjustMarginBasedOnNicknameError() {
        var errorVisible = $('#nicknameWrap > .error').is(':visible');
        var signupButton = $('.join .signupForm-content button.signup-check-border');

        if (errorVisible) {
            signupButton.css('margin-bottom', '23px');
        } else {
            signupButton.css('margin-bottom', '0px');
        }
    }

    // 사용자가 입력하는 동안 호출되는 이벤트 핸들러에 위 함수를 추가합니다.
    $('#user_nickname').on('input', function () {
        validateInput($(this), /.+/, '닉네임을 입력해주세요.', 'nicknameWrap');
        adjustMarginBasedOnNicknameError(); // 닉네임 입력 필드에 따라 마진 조정
    });

    // 닉네임 입력 필드의 유효성 검사 에러 여부에 따라 .nickname-label-title의 패딩을 조절하는 함수
    function adjustPaddingBasedOnNicknameError() {
        var errorVisible = $('#nicknameWrap > .error').is(':visible');
        var nicknameLabel = $('.nickname-label-title');

        if (errorVisible) {
            nicknameLabel.css('padding-bottom', '25px');
        } else {
            nicknameLabel.css('padding-bottom', '0px');
        }
    }

    // 사용자가 입력하는 동안 호출되는 이벤트 핸들러에 위 함수를 추가합니다.
    $('#user_nickname').on('input', function () {
        validateInput($(this), /.+/, '닉네임을 입력해주세요.', 'nicknameWrap');
        adjustPaddingBasedOnNicknameError(); // 닉네임 입력 필드에 따라 패딩 조정
    });

    // 다음 페이지로 넘어가는 버튼 클릭 시 유효성 검사 수행
    $('#join_basic_info_btn > .signup-next-btn2').click(function (e) {
        e.preventDefault();
        var validEmail = validateInput($('#user_id'), emailRegex, '올바른 이메일 형식이 아닙니다.', 'userIdWrap');
        var validPassword = validateInput(
            $('#user_pw'),
            passwordRegex,
            '8자리 이상 영문 소문자와 숫자를 입력해주세요.',
            'pwWrap'
        );
        var validConfirmPassword = validateConfirmPassword();
        var validNickname = validateInput($('#user_nickname'), /.+/, '닉네임을 입력해주세요.', 'nicknameWrap');

        if (validEmail && validPassword && validConfirmPassword && validNickname) {
            // 오류 메시지 숨기기
            $('.error').hide();

            // 다음 페이지로 이동
            $('#join_agree, #join_basic_info').css('display', 'none');
            $('#join_more_info').css('display', 'block');
        } else {
            // 필수 정보를 입력하지 않았을 경우 다음 단계로 이동하지 않음
            return false;
        }
    });

    // Enter 키 입력 시 제출 방지
    $('form').on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            return false;
        }
    });

    // $("#nicknameWrap").siblings(".error").show(fucntion(){
    //   $("#nicknameWrap").find("button").css("margin-top", "11px")
    // })

    // =========================================================================================================
    // 휴대폰: 유효성 검사
    // 인증번호 입력: 인증번호, 인증하기 입력란 숫자 5자리로 제한
    // 입력란 숫자와 "-" 13자리 이하로 제한 및 유효성 검사
    $('#signupEnterNumber, #user_number').on('input', function () {
        var inputValue = $(this).val();
        // 입력된 값이 숫자와 "-"이고 13자리 이하인지 확인
        if (!/^[\d-]{0,13}$/.test(inputValue)) {
            // 숫자와 "-"가 아니거나 13자리 이상이면 입력한 값을 잘라냄
            $(this).val(inputValue.replace(/[^\d-]/g, '').slice(0, 13));
            // #signupEnterNumber인 경우 에러 메시지 표시
            if ($(this).attr('id') === 'signupEnterNumber') {
                $(this).siblings('.error').text('숫자 5자리를 입력해주세요.');
            }
            // #user_number인 경우 에러 메시지 표시
            else if ($(this).attr('id') === 'user_number') {
                $(this).siblings('.error').text('숫자와 -만 입력해주세요.');
            }
        } else {
            // 유효성 검사 통과 시 에러 메시지 지우기
            $(this).siblings('.error').text('');
        }
    });

    // 입력란에서 한글과 영어 입력 막기
    $('#signupEnterNumber, #user_number').on('keydown', function (e) {
        // 입력된 키 중에서 숫자와 "-"를 제외한 모든 입력을 막음
        if (!(e.key.match(/[\d-]/) || e.key === 'Backspace')) {
            e.preventDefault();
        }
    });

    // =========================================================================================================
    // 생년월일
    // #user_date input 요소에 값이 입력될 때마다 색상을 조절하는 이벤트 핸들러를 추가합니다.
    $('#user_date').on('input', function () {
        var input = $(this);
        var value = input.val();
        var defaultColor = '#ccc';
        var filledColor = '#333';

        // 입력된 값이 있는지 확인하고, 색상을 조절합니다.
        if (value) {
            input.css('color', filledColor);
        } else {
            input.css('color', defaultColor);
        }
    });

    // =================================================
    // 휴대폰: 인증번호 받기
    let seconds; // 남은 시간 변수
    let countdown; // 카운트다운을 관리하는 변수
    const $timeSpan = $('span.time'); // 시간을 표시할 요소
    const $btnSend = $('#signUp_send'); // "인증번호 받기" 버튼 요소

    // 시간을 업데이트하고 화면에 표시하는 함수
    const updateCountdown = function () {
        if (seconds >= 0) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            $timeSpan.text(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
            seconds--;
        } else {
            clearInterval(countdown);
            alert('인증번호 유효시간이 만료되었습니다.');
        }
    };

    // "인증번호 받기" 버튼 클릭 이벤트 핸들러
    $btnSend.on('click', function (e) {
        e.preventDefault();
        $btnSend.text('재전송');
        alert('인증번호가 발송되었습니다.');

        clearInterval(countdown);
        seconds = 180; // 3분(180초)

        updateCountdown();
        // 1초마다 카운트다운 업데이트
        countdown = setInterval(updateCountdown, 1000);
    });

    // =================================================
    $('#later_enter').change(function () {
        if ($(this).is(':checked')) {
            // 나중에 입력하기가 체크되면 해당 폼 안의 모든 input과 select, button을 비활성화
            $(
                '#join_more_info input, #join_more_info select, .signup-check-border, #user_number, #signupEnterNumber, span.time'
            )
                .not('#later_enter')
                .prop('disabled', true)
                .addClass('disabled-style');
            $('span.error').hide(); // 나중에 입력하기 체크 시 에러 메시지 숨김

            // #join_more_info 안에 있는 .signupForm-content의 마진 값을 조정
            $('.signupForm-content').css('margin-top', '29px');
            // label-title의 padding-bottom을 조정합니다.
            $('.label-title').css('padding-bottom', '8px');
        } else {
            // 나중에 입력하기가 체크 해제되면 해당 폼 안의 모든 input과 select, button을 활성화
            $('#join_more_info input, #join_more_info select, #user_number, #signupEnterNumber, span.time')
                .not('#later_enter')
                .prop('disabled', false)
                .removeClass('disabled-style');
            $('span.error').show(); // 나중에 입력하기 체크 해제 시 에러 메시지 보임

            // #join_more_info 안에 있는 .signupForm-content의 마진 값을 원래대로 되돌림
            $('.signupForm-content').css('margin-top', '0px');
            // // label-title의 padding-bottom을 조정합니다.
            $('.label-title').css('padding-bottom', '20px');
        }
    });

    // 페이지 로드 시 초기화
    $('#later_enter').change();
});
