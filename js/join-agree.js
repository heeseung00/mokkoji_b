window.addEventListener("load", function () {
  function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("gender");

    checkboxes.forEach((cb) => {
      cb.checked = false;
    });

    element.checked = true;
  }
});
// =====================================================
// 제이쿼리
$(document).ready(function () {
  // 약관동의: 전체동의 코드
  $("#chkAll").click(function () {
    if ($("#chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
    else $("input[name=chk]").prop("checked", false);
  });

  $("input[name=chk]").click(function () {
    var total = $("input[name=chk]").length;
    var checked = $("input[name=chk]:checked").length;

    if (total != checked) $("#chkAll").prop("checked", false);
    else $("#chkAll").prop("checked", true);
  });

  $("#chk4").click(function () {
    var isChecked = $(this).prop("checked");
    $("#chk5, #chk6").prop("checked", isChecked);
  });

  // $("input[name=chk]").click(function () {
  //   var total = $("input[name=chk]").length;
  //   var checked = $("input[name=chk]:checked").length;

  //   if (checked > 0) {
  //     $("#chk4").prop("checked", true);
  //   } else {
  //     $("#chk4").prop("checked", false);
  //   }
  // });
});

// // sms, 이메일 체크
// $("#chk4").click(function () {
//   var isChecked = $(this).prop("checked");
//   $("#chk5, #chk6").prop("checked", isChecked);
// });

// SMS나 이메일이 체크되었을 때, "이벤트, 프로모션 알림 메일 수신"이 체크되었는지 확인하여 전체 동의 체크를 관리합니다.

// $("#chk4").click(function () {
//   if ($(this).is(":checked")) {
//     $("#chk5").prop("checked", true);
//     $("#chk6").prop("checked", true);
//   } else {
//     $("#chk5").prop("checked", false);
//     $("#chk6").prop("checked", false);
//   }
// });

//   // 개별 동의 체크박스가 클릭되었을 때
//   $("input[name^='chk']").click(function () {
//     var total = $("input[name^='chk']").length;
//     var checked = $("input[name^='chk']:checked").length;

//     if (total != checked) {
//       $("#chkAll").prop("checked", false);
//     } else {
//       $("#chkAll").prop("checked", true);
//     }
//   });

//   $("#cbx_chkAll").click(function() {
//     if($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
//     else $("input[name=chk]").prop("checked", false);
// });

// $("input[name=chk]").click(function() {
//     var total = $("input[name=chk]").length;
//     var checked = $("input[name=chk]:checked").length;

//     if(total != checked) $("#cbx_chkAll").prop("checked", false);
//     else $("#cbx_chkAll").prop("checked", true);
// });
