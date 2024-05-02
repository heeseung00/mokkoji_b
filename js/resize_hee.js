window.addEventListener('resize', function () {
    var browserWidth = window.innerWidth; // 현재 브라우저의 너비

    // 브라우저 크기가 1200px 이하인 경우에는 함수 실행하지 않음
    if (browserWidth <= 1200) {
        return;
    }

    // 브라우저 크기가 1920px 이상일 때
    if (browserWidth >= 1920) {
        document.querySelector('.review .title-wrap').style.marginTop = '51px'; // 시작하는 margin-top 값을 51로 설정
        return; // 브라우저 크기가 1920px 이상일 때 추가 조정 필요 없음
    }

    var initialMarginTop = 51; // 시작하는 margin-top 값

    // 브라우저 크기가 1251px 이하일 때
    if (browserWidth <= 1251) {
        var diff = 1920 - 1251; // 1251px에서의 차이 계산
        var additionalMargin = Math.ceil(diff / 12) + Math.ceil((1251 - browserWidth) / 12); // 12px씩 줄어들 때마다 1px씩 증가
        var finalMarginTop = initialMarginTop + additionalMargin; // 최종 margin-top 값 계산
        document.querySelector('.review .title-wrap').style.marginTop = finalMarginTop + 'px'; // 스타일 적용
        return;
    }

    // 브라우저 크기가 1252px에서 1919px 사이일 때
    var diff = 1920 - browserWidth; // 1920px에서의 차이 계산
    var additionalMargin = Math.ceil(diff / 12); // 12px씩 줄어들 때마다 1px씩 증가
    var finalMarginTop = initialMarginTop + additionalMargin; // 최종 margin-top 값 계산
    document.querySelector('.review .title-wrap').style.marginTop = finalMarginTop + 'px'; // 스타일 적용
});
