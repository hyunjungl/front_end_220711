<<<<<<< HEAD
// 변수란 메모리 공간을 확보하여 데이터를 저장하고, 저장된 공간의 주소값을 가지는 식별자.
//   => 값을 저장하고 꺼내 사용할 수 있는 주머니.
var score = 90;

// 변수선언 - 값을 저장할 공간을 마련하고 변수 이름을 지정
// 초기화 - 메모리 공간에 초기값을 지정 => 변수 선언만 하면 undefined가 지정된다.
var num;
console.log(num);

// 변수 선언에는 var, let, const(상수) 키워드 사용
// 변수 선언 키워드 뒤에 변수 이름을 지정

var age;
let height;
const TAX_RATIO = 10;

// 호이스팅 : JS는 코드를 실행하기 전에 선언된 변수들을 먼저 읽는다.
//   => var 키워드만 호이스팅 발생
// 변수 선언 이전에 변수를 읽어도 에러 발생 X
console.log(userName); // 변수 선언 이전에 읽었지만 에러 발생 X
var userName;

// console.log(myName); let으로 선언된 변수는 호이스팅 발생하지 않아 에러 발생
let myName;

// 할당 - 선언된 변수(메모리 공간)에 값을 저장
// 재할당 - 이미 값이 있는 변수에 다른 값을 저장
// 할당과 선언 동시에 가능 => 초기화.
var firstName;
firstName = "seok"; // firstName 변수에 "seok" 할당
firstName = "minseok"; // firstName 변수에 "minseok" 재할당

var lastName = "hwangbo";

// 참조 - 변수에 저장된 값을 읽음
console.log(firstName); // firstName에 저장되어 있는 "minseok" 출력

// 변수 이름에는 특수 문자를 제외한 문자, 숫자, _(언더바), $가 올 수 있다.
// 변수이름은 숫자로 시작할 수 없다.
// var 1num; 변수 이름이 숫자로 시작하여 에러 발생

// firstName : 카멜 케이스
// first_name : 스네이크 케이스
// FirstName : 파스칼 케이스

// 문제 1. num1과 num2를 선언하고 각각 20, 30을 할당하여 출력

// 문제 2. num1과 num2를 더한 값을 할당하여 출력

// 문제 3. num1과 num2를 서로 바꿔서 할당
=======
//변수- 메모리에 공간 확보하고 데이터를 저장한 후 저장된 메모리의 주소를 가지고 있음
//=> 값을 저장하고 꺼내 쓸 수 있는 주머니.
var num = (10);

console.log(num);

// 변수(변화하는 수) 선언 -값을 저장할 메모리 공간을 마련하고 메모리에 접근할 수 있는 이름 지정.
//변수 선언만 하면 undefined가 초기화된다.
var age;
console.log(age);

//변수 선언에는 var, let, const(상수-변화하지 않는 수) 키워드 사용.
//변수 선언 키워드 뒤에 변수명을 지정.

var year; //year라는 이름의 변수선언.
let month; // month라는 이름의 변수 선언.
const DAY =10; //day라는 이름의 상수 선언.

//호이스팅 : js 선언된 변수,함수를 실행 전에 읽는다.=> var 키워드에만 해당

console.log(score); // var 키워드 사용 => 호이스팅 발생. => 에러 발생 x
var score;
//console.log(birthDay); // let 키워드 사용 => 호이스팅 발생 x. => 에러 발생 o.
let birthDay;

// 할당 : 선언된 변수(메모리)에 값을 저장.
score = 90; // score라는 변수에 90이라는 값을 할당(저장)
console.log(score);
score = 100; // score라는 변수에 100이라는 값을 재할당.

// 선언과 할당 동시에 가능 => 초기화.
console.log("firstName : ", firstName); // 선언부분만 호이스팅.
var firstName = "seok";

// 참조 : 변수에 저장된 값을 읽는다.
console.log(firstName); //firstName 변수의 값을 참조하여 출력

// 변수 이름 특수문자 제외 문자, 숫자, _(언더바), $ 사용 가능
// 변수 이름은 숫자로 시작할 수 없다. ex) var 01num; => 에러발생.
//변수 이름은 대소문자 구분 => firstname과  FIRSTNAME은 다른 변수이다.

// first name => firstNmae : 카멜 케이스.
// first name => first_name : 스테이크 케이스
// first name => FIrstName : 파스칼 케이스 => 클래스 명에 주로 사용.

//문제1 num1과 num2를 선언하고 각각 20,30을 할당하여 출력
var num1,num2; // 여러개의 변수 한번에 선언
num1 =20;
num2 = 30;
console.log("문제 1 : ", num1, num2);

//문제2 num1과 num2를 더한 값을 result 변수에 할당하여 출력
var result = num1 + num2;
console.log("문제 2 : ", result);

//문제3 num1과 num2를 서로 바꿔서 할당

var temp = num1; //20을 저장할 임시 공간 변수
num1 = num2 //30을 num1에 할당
num2 = temp; // temp에 임시 저장한 20을 num2에 할당

console.log(num1, num2);


