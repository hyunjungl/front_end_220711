import {useState} from "react";

function Counter() {
  const [count, setCount] = useState(10);

  //클로저
  console.log(count);
function add() {
  setCount(count +1);
}

function sub () {
  //최적화 할 때 사용
  //함수형 업데이트 set함수의 인자로 콜백함수를 전달하면 콜백함수의 첫번째 인자로 최신 상태값을 전달 
  setCount((num) => num - 1);
}


  return (
  <>
  <h2>{count}</h2>
  <button onClick={add}>+1</button>
  <button onClick={sub}>-1</button>
</>
);
  }

export default Counter;