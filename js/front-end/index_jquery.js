// jQuery 사용해서 사이드 메뉴 활성화
$(".btnSide").click(function () {
  $("#gnb").addClass("on");
});
// 창크기 변경시 on클래스 제거
$(window).resize(function () {
  $("#gnb").removeClass("on");
});
