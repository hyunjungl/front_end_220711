// 식 : 값으로 평가되어 생성된 값
//  => 값으로 평가될 수 있는 모든 것이 "식"
var result = 10 + 30; // 10 + 30이 40을 생성하여 result에는 40 할당

// 문 : 프로그램을 구성하는 최소 단위. 문은 식을 포함
var x; // 변수 선언문. 값으로 평가될 수 없기 때문에 식은 아니다
if (true) console.log("진실"); // 조건문

// 자료형 : 프로그램이 처리할 수 있는 자료의 형태

// 숫자형 : 숫자만 입력
var year = 2022; // 정수.
const PI = 3.14; // 실수.
console.log(typeof year, typeof PI); // JS에서는 정수와 실수 모두 같은 "number" 타입

// 문자열 : ""(큰 따옴표) 혹은 ''(작은 따옴표) 안에 문자열을 기입.
//   => "Javascript"과 'Javascript'은 같은 값.
var firstName = "seok";
console.log(typeof firstName);

// 논리형(boolean) : 참과 거짓으로 표한하는 값
//  => 조건에 따른 분기처리에 사용
var isTrue = true;
console.log(typeof isTrue);

var isBig = 10 > 100; // 조건식은 논리형 데이터를 반환.
console.log(isBig);

// undefined : 값이 정의 되지 않은 상태를 나타내는 데이터.
// null : 개발자가 유효하지 않은 상태를 명시적으로 나타내는 데이터
var data;
console.log(data); // 변수에 값을 할당하지 않아 undefined 출력
data = null;
console.log(data); // 개발자가 의도적으로 변수 data의 값이 유효하지 않다고 명시

// 배열 : 여러개의 데이터를 저장
// 순서(인덱스)로 데이터에 접근 => 순서는 0부터 시작. 즉, 첫번째 데이터의 인덱스는 0
var arr = [1, 10, 50];
console.log(typeof arr);
console.log("첫번째 : ", arr[0]);
