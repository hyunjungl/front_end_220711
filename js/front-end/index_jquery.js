//jQuery 사용해서 사이드 메뉴 활성화

$(".btnSide").click(function (){
  $("#gnb").addClass("on");
});
$(window).resize(function (){
  $("#gnb").removeClass("on");
})

//슬라이드 개수만큼 버튼생성 및 슬라이드 기능 구현

let index = 0;
for(let i = 0; i<$(".container li").length; i++){
  $(".pagination").append
}










$(".modal .btnClose").click(function (){
  //페이드 아웃 효과 적용
  $(".modalBg").fadeOut();
  // .hide() : display:none;
})
