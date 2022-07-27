<<<<<<< HEAD
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
=======
// if: ()안의 조건식의 값이 true면 코드 블록 실행 =>flase면 생략
var num= 3 ;
if (num > 0) {
  console.log("양수입니다.");
}

if (num < 0) {
  //조건식의 값이 flase이기 때문에 실행 x
  console.log("음수입니다.");
}

//else : if문의 조건식이 false(해당하지 않는 경우)일 대 실행이 되는 문
var age = 50;
if(age > 30 && age < 40)  {
  console.log("30대 입니다.")
} else {
  //위의 조건에 해당하지 않는 경우 실행
  console.log("30대가 아닙니다.");
}

//30대와 20대
// else if : 앞의 if문이 flase인 경우 다른 조건식을 비교하여 분기처리.
var age02 =50;
if(age > 30 && age < 40)  {
  console.log("30대입니다.");
} else if(age >= 20&& age < 30) {
  console.log(age02 + " : 20대입니다.");
} else if(age02 >= 10 && 02 < 20) {
  console.log(age02 + " : 10대입니다.");
} else {
  console.log("10대도 20대도 30대도 아닙니다.");
}

// 문제1. 변수 num02의 값에 따라 짝수 여부에 따라 출력
if (num02 % 2 === 0) {
  console.log(num02 + "은(는) 짝수입니다.");
} else {
  console.log(num02 + "은(는) 홀수입니다.");
}


var num03 =1000;
//문제2. 변수 num03의 값에 따라 5의 배수이면서 100보다 크면 값을 출력
//103 => 100보다는 크지만 5의 배수는 아니기 때문에 false =>값 출력 x
if (num03 % 5 === 0 && num03 > 100) console.log(num03); // 한줄로 표현 가능시 {} 생략 가능


// 문자3. 변수 data의 타입에 따라 데이터 타입 출력
// "seok" => "문자열 데이터입니다.", => "숫자형 데이터입니다."
if(type === "string") {
  console.log("문자열 데이터입니다.");
} else if(type ==="number") {
  console.log("숫자형 데이터입니다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}
console.log("문자열도 숫자형도 아닙니다.");
