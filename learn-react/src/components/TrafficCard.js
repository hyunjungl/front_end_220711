//교통카드
//충전: 잔액 증가
//사용:잔액 감소
//금액: 충전/사용 시 금액
//내역: 충전/ 사용내역
 
import {useReducer} from "react";

const initialState = {
amount: 0,
price: 1000,
history: [],
};

function reducer(state, action) {
switch(action.type) {
  case "change_price":
    return;
     default :
    return state;
}
}
export default function TrafficCard() {
 const[state, dispatch] =useReducer(reducer,initialState);
return(
  <div>
    <h3>잔액: 0</h3>
    <p>
    금액: {""}
    <input type="number" step={1000} min={1000} defaultValue={1000} onChange= {(e)=> dispatch ({ type: "change_price", price: e.target.value})}
     />
    </p>
    <buttton onClick={()=> dispatch({test:"테스트"})}>충전</buttton>
    <button>사용</button>
  </div>
);
}