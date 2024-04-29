// 회원가입
// window.addEventListener('load', function () {
//     // 첫 번째 상태: #join_basic_info가 보이고, #join_agree과 #join_more_info가 숨겨져 있는 상태

//     // #join_agree와 #join_more_info를 숨기는 함수
//     function hideAgreeAndMoreInfo() {
//         document.getElementById('join_agree').style.display = 'none';
//         document.getElementById('join_more_info').style.display = 'none';
//     }

//     // #join_agree_btn 버튼 클릭 시의 동작
//     document.getElementById('join_agree_btn > button').addEventListener('click', function () {
//         // #join_basic_info와 #join_more_info를 숨기고, #join_agree를 보이도록 변경
//         document.getElementById('join_basic_info').style.display = 'none';
//         document.getElementById('join_more_info').style.display = 'none';
//         document.getElementById('join_agree').style.display = 'block';
//     });

//     // #join_basic_info_btn 버튼 클릭 시의 동작
//     document.getElementById('join_basic_info_btn > button').addEventListener('click', function () {
//         // #join_more_info와 #join_agree를 숨기고, #join_more_info를 보이도록 변경
//         hideAgreeAndMoreInfo();
//         document.getElementById('join_basic_info').style.display = 'block';
//     });
// });

// ================================================================================================
// 제이쿼리
$(function () {
    $('#user_id ,#user_pw ,#confirm_pw').on('focus', function () {
        $(this).addClass('focused');
    });
    $('#user_id ,#user_pw ,#confirm_pw').on('blur', function () {
        $(this).removeClass('focused');
    });
    // 회원가입 필드에서 값 가져오기
    $('#signupForm').submit(function (e) {
        e.preventDefault(); //폼 제출 방지
        var userId = $('#user_id').val();
        var password = $('#user_pw').val();
        var confirmPw = $('#confirm_pw').val();
        //   정규표현식을 사용한 유효성 검사
        var idPattern = /^[a-zA-Z0-9]{4,12}$/;
        var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
        // 아이디 유효성 검사
        if (!idPattern.test(userId)) {
            $('#user_id').next('.error').text('사용자 ID는 영문자와 숫자로만 이루어진 4~12자여야 합니다.');
            return;
        } else {
            $('#user_id').next('.error').text('');
        }
        //   비밀번호 확인 검사
        if (!pwPattern.test(password)) {
            $('#user_pw').next('.error').text('비밀번호는 영문자와 숫자의 조합으로 6~12자여야 합니다.');
            return;
        } else {
            $('#user_pw').next('.error').text('');
        }
        // 비밀번호 확인 유효성 검사
        if (password !== confirmPw) {
            $('#user_pw').next('.error').text('비밀번호가 일치하지 않습니다.');
            return;
        } else {
            $('#user_pw').next('.error').text('');
        }
        //회원가입 정보(아이디랑 비밀번호) 를 로컬 스토리지에 저장
        // localStorage.setItem('userId', userId);
        // localStorage.setItem('password', password);
        // alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');
        // window.location.href = 'login.html';
    });
});
