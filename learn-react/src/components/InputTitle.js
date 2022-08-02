import {useState, useRef} from "react";
//React Hook


function InputTitle() {
const [inputs, setInputs] = useState({
  name: "",
  nickname: "",
  age:0,
});

const inputRef = useRef();

function onChange(e) {
setInputs({
  //스프레드를 통해서 기존 inputs의 프로퍼티를 먼저 나열한 뒤에 특정 프로퍼티만 업데이트
  ...inputs, 
  //동적 프로퍼티 접근: []안에 문자열로 키값을 지정하여 접근할 수 있다.
  [e.target.name]:e.target.value,
});
}

// 동적 프로퍼티 접근이 없다면 input 태그 하나당 함수를 하나씩 바인딩 해야한다.
// const onChangeNmae = (e) => {
//   setInputs({
//     ...inputs,
//     name: e.target.value
//   })
// }

return (
  <>
 {/* {이벤트 바인딩: 특정 이벤트가 발생했을 때에 실행할 콜백함수를 묶어주는 것} */}
  <div>
    <input type="text" onChange={onChange} name="name" ref={inputRef} />
    <input type="text" onChange={onChange} name="nickname"/>
    <input type="number" onChange={onChange} name="age"/>
    <button onClick={onChange}>삭제</button>
  </div>
  <div>{name}({nickname}) : {age}</div>
  </>
)
}
//import 할 때 {NUM}과 같은 형식
export const NUM = 1;

//import InputTitle
export default InputTitle;