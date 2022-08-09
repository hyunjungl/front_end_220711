import {useState} from "react";
import styled, {css} from "styled-components";

export default function Dropdown(){
  const [active, setActive]= useState(false);
  return (
<Block active={active}>
  <ValueBox onClick={()=> setActive(!active)}>메뉴1</ValueBox>
  
  <ul>
    <li>메뉴1</li>
    <li>메뉴2</li>
    <li>메뉴3</li>
  </ul>
</Block>
  );
}

const Block = styled.div`
transition: 0.25s;
width: 100px;
ul {
  display: none;
  border: 1px solid #ddd;
  li{
    padding: 10px;
    &:hover {
      background-color: #ccc;
    }
  }
}
${({active}) => active && css`
display:block;
`}
`;

const ValueBox = styled.div`
cursor:pointer;
user-select: none;
`;