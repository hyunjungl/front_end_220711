import {React} from "react";


function Hello({title,color, children}) {
  //p태그에 설명추가하기
  //객체 비구조화 할당
let obj = {
  //colr: color와 동일
  color,
};

  return (
  <div>
    <h1 style={{color}}>Hello, {title}</h1>
    {children}
  </div>
  );
}

Hello.defaultProps = {
  title ="React",
  color ="red",
};


export default Hello;