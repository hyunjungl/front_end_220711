// 함수 : 실행 코드를 미리 작성하고 필요할 때 사용.
// function 함수이름() {실행할 코드...}
// 매개변수(Parameter) : 함수에 필요한 값을 함수를 실행할 때 지정하는 변수
//   => 함수 내에서 변수처럼 사용 가능

// 매개변수가 없는 함수
function sum() {
  // 실행할 코드 작성
  var num1 = 3;
  var num2 = 10;
  var result = num1 + num2;
  console.log(result);
}
sum();

// 매개변수가 있는함수 : () 안에 필요한 개수만큼 ,로 구분하여 매개변수 이름 지정.
// 매개변수를 통해서 실제로 전달되는 값을 인자(argument)라고 함
function divide(a, b) {
  console.log(a / b);
}
divide(10, 2);
divide(100, 5);

// return : 함수의 실행결과로 값을 반환
//   => 함수의 실행결과로 return된 값으로 평가
// return을 하면 함수가 종료

function plus(a, b) {
  // a와 b를 더한 값을 반환
  return a + b;
}
console.log(plus(3, 4));

function sub(a, b) {
  return; // 함수 종료. 뒤에 코드는 실행하지 않는다.
  console.log(a - b);
}
sub(7, 3);
// JS에서는 여러개의 리턴 허용 x.
function square(num) {
  return num, num * num;
}
console.log(square(4));

// 문제 세 숫자의 평균을 구하는 함수 => 함수의 값 출력
//   => 심화 => 함수를 두개로 분리.

// 짝수인지 홀수인지 출력하는 함수