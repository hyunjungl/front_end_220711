// if문 : ()안의 조건식이 true이면 코드 실행
let num = 2;
if (num > 0) {
  // num이 0보다 크면 true, 이 부분이 실행
  console.log("양수 입니다.");
}

// if ~ else문 : () 조건식이 true이면 if문의 코드 실행, false면 else문의 코드 실행
let age = 29;
if (age >= 30) {
  // age가 30보다 크면 true, 이 부분이 실행
  console.log("30대입니다.");
} else {
  // age가 30보다 크지 않으면 false, 이 부부이 실행
  console.log("30가가 아닙니다.");
}

// if ~ else if문 : else if 를 통해 다양한 조건 추가 가능
// 모든 조건식이 false인 경우 else문 실행
let data = [1, 2, 3];
if (typeof data === "string") {
  console.log("문자열 데이터입니다.");
} else if (typeof data === "number") {
  console.log("숫자형 데이터입니다.");
} else if (typeof data === "object") {
  console.log("객체형 데이터입니디다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}
