import { useState } from "react";
import styled, {css} from "styled-components";
import {AiFillCaretRight} from "react-icons/ai";

export default function Accordian(){
  //styled-component에 props
  const [active, setActive] =useState(false);
  return (
  <Block active={active}>
    <TitleBox>
    <h3>제목</h3>
<span onClick={()=> setActive(!active)}>
  {active }
  <AiFillCaretRight color="#fff" size={18}/>
</span>
    </TitleBox>
    <p>
  Lorem
    </p>
  </Block>
  );
}

const Block =styled.div`
padding: 10px;
background:#f2f2f2;
margin-bottom: 10px;
border-radius: 4px;
h3{
  padding: 10px 0;
}
p {
height: 0;
overflow:hidden;
transition: 0.25s;
}
${({active}) =>
active &&
 css`
p {
  max-height: 100px;
overflow:hidden;
transition: 0.25s
}
${({active}) =>
active &&
css`
  p{
    overflow-y: scroll;
    max-height:100px;
  }
  ${TitleBox} {
    span{
      transform:rotate(90deg);
    }
  }
`}
`}
`;

const TitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
span {
  font-size: 0.8em;
  cursor: pointer;
  user-select: none;
  transition:0.25s;
}
`