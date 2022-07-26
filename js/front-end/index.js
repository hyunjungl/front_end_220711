let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb");
btnSide.addEventListener("click", function () {
  gnb.classList.add("on");
});
gnb.addEventListener("click", function (event) {
  // event.target : 이벤트가 실제로 발생한 타겟
  // event.currentTarget : 이벤트 리스너가 등록된 타겟
  if (event.target === event.currentTarget) {
    gnb.classList.remove("on");
  }
});

// 슬라이더 구현
let btnSlideList = document.querySelectorAll(".pagination button");
let slideWrapper = document.querySelector(".slideContainer ul");
// btnSlideList[1].addEventListener("click", function () {
//   slideWrapper.style.transform = "translate(-100vw)";
// });

for (let i = 0; i < btnSlideList.length; i++) {
  btnSlideList[i].addEventListener("click", function () {
    // slideWrapper.style.transform = "translate(" + -100 * i + "vw)";
    // 인덱스에 따라 translate 값 계산
    slideWrapper.style.transform = `translate(${-100 * i}vw)`; // 템플릿 리터럴
  });
}

// 각 버튼을 눌렀을 때 알맞게 이동 => 슬라이드가 몇개던간에 작동

// 1. 부모의 너비값 계산 적용
// 2. 슬라이더 추가 시 버튼(addEventListener도 같이?)도 추가되고

// 회색 영역 클릭시 사라지게

// 타입스크립트 => 데이터 타입을 지정
