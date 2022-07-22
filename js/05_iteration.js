// for 문 : 초기값과 조건식 증감식을 통해서 반복문의 종료시점 제어
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//while : 조건식이 true인 경우 코드블록 반복 실행
 // => 증강식이 없기 때문에 코드블록 안에서 종료를 시킬 수 있게 제어
 var num = 10;
 while (num > 0) {
  if (num < 3) break; // num이 3보다 큰 경우 while문 탈출
  console.log(num + "은 양수입니다.");

  num--;
}
 // do ~ while : 최소 한번 실행 후 while 문을 실행
 do {
  console.log("실행");
  
 } while (num > 10);

 let arr = [1,2,3,4,5,7,10,30,40,50];
 let count = 0;
 while(true) {
  console.log(coundt);
  if (count > arr.length) break;
  count++;
 }

 //구구단 2단 반복문을 통해서 출력 => for문
 for(var i = 1; i <= 9; i++) {
  console.log("2 * " + i + "=", 2 * i);
 }

 // 구구단 2~9단 출력. => for문 중첩 가능
 for(var i = 2; i <=9; i++ ) {
 for (var j = 1; j <= 9; j++) {
  console.log('${i} *{j} = ', i * j);
 }
 }

 //break : 반복문 탈출
 for(let i = 0; i < 5; i++) {
  if (i > 3) break;
  console.log(i);
 }

 ~//0~10사이의 2의 배수만 출력
 //continue는 코드 블록 실행 생략 => 반복문 종료 x. 이번 순서만 생략
 for(let i = 0; i < 10; i++) {
  if (i % 2 === 0 ) continue; //짝수가 아닌 경우 다음 순서로 건너뜀
   console.log(i)
 }

 for (let i = 0; i <= 10; i++) {
  if ( i % 2 ===0)
 }

 //switch : switch문의 값과 case의 값을 비교하여 실행
 // break를 하지 않으면 다음 case로 넘어간다.
 var data ="문자열";
 var type = typeof data;
 switch (type) {
  case "string" : {
    console.log("문자열입니다.");
    break;
  }
  case "number" : {
    console.log("숫자형입니다.");
    break;
  }
  default: {
    console.log("문자도 숫자도 아닙니다.")
  }
 }

 //score 변수에 0~100점 사이의 점수를 담아서 
 //90점 이상A등급, 89~80 : B등급 79~70은 C등급, 그 이하 D등급 출력.
 var score = 83;
 //pareInt()=> 실수를 정수로 바꿔준다. 8.9 => 8
 //83 / 10 => 8.3 => parseInt(8.3) => 8
 switch(parseInt /(score / 10)) {
case 9: {
  console.log("A등급");
  break;
}
case 8: {
  console.log("B등급");
  break;
}
case 7: {
  console.log("C등급");
}
default : {
  console.log("D등급");
}
 }

 //삼항 조건 연산자 : 조건식 ? true이때 : false일 때;
 var num02 = 4;
 var result = num02 % 2 === 0 ? "짝수" : "홀수";
 console.log(result);

 function print(str) {
  console.log(str);
 }