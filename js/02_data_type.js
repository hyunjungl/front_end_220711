<<<<<<< HEAD
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
=======
// 식 : 값으로 평가돼서 새로운 값을 생성.
// => 값으로 평가될 수 있는 모든게 식.
var result = 10 + 30;

//문 : 프로그램을 구성하는 최소 단위. 식에 문에 포함
var x; // 변수 선언문. 값으로 평가가 될 수 없기 때문에 식이 아님.
if(true) console.log("진실"); // 조건문
// 자료형 : 프로그램이 처리할 수 있는 자료의 형태

//숫자형(number) :  숫자를 나타내는 데이터. ""없이 숫자만 입력.
var year = 2022; //정수
const PI = 3.14; // 실수
console.log(typeof year, typeof PI); //JS에서는 정수와 실수 구분 안함.
console.log(0.1 +0.2);

// 문자열(string) : 문자를 나타내는 데이터. ""(큰따옴표), ''(작은따옴표)안에 문자를 작성.
// => JS에서는 ""와 '' 구분 안함. => 문자와 문자열 구분 안함.
var firstName = 'seok';
var strNum ="1"; // 숫자 x, 문자열 o
console.log(1 + "2"); //JS에서는 숫자와 문자를 더해도 에러 x
console.log(typeof firstName, firstName);


//논리형(boolean) : 참과 거짓으로 표현되는 자료형. => true, false\
var isTrue = true;
console.log(typeof isTrue);

//조건식의 결과로 반환. => 조건문에 사용
var isBig = 10 > 100;
console.log(isBig);

// undefined : 값이 정의되지 않음 => 개발자의 의도 반영 x
// null: 개발자가 유효하지 않은 상태라고 명시적으로 나타내는 데이터. => 개발자의 의도 반영 o. 
var data;
console.log(data); // 변수 선언 후 값 할당 x => undefined(정의되지 않은) 출력
data = null; // 개발자가 의도적으로 data 변수가 유효하지 않다고 명시
if(data === null) console.log("실행");

//배열(array) : 여러개의 데이터를 저장
// 순서(인덱스)로 데이터에 접근 => 순서는 0부터 시작, 즉 첫번째 인덱스는 0, 두번째는 1...
// 배열[인덱스(숫자)] 형식으로 사용 => 숫자로 평가되는 식 사용 가능
var arr = [1, 4 ,10];
console.log(arr);
console.log(arr[1]);
console.log(arr[10 - 9]);

// 객체(object): 여러개의 데이터 저장 가능 => key값으로 데이터 참조.
// key(속성이름) : value(속성값)
var obj = {
  age : 30,
firstName : "seok",
lastName: "Hwangbo",
};
console.log("나이는", obj,age);

//user1, user2를 이름, 나이, 키 => 둘 나이의 합과 둘 키의 차를 출력.
var user1 = {
  name: "seok",
  age: 30,
  height: 173,
};
var user2 = {
  name: "minsu",
  age: 34,
  height: 182,
};

console.log("두 사람의 나이의 합은 ", user1.age + user2.age);
console.log("두 사람의 키의 차이는 ", user1.height - user2.height);
