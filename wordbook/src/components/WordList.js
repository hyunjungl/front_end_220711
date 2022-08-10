import { useState } from "react";
import styled from "styled-components";
import {FaTrash} from "react-icons/fa";

export default function WordList({WordList}){
  return ( 
  <WordListBlock>
    {WordList.map((word)=> (
    <WordItem word={word}/>
    ))}
  </WordListBlock>
  );
}

function WordItem({word}) {
  const [active,setActive] =useState(false);
  return (
    <WordItemBlock onClickCapture={()=> setActive(!active)}>
      <h3>{word.eng}</h3>
      {active && <p>{word.kor}</p>}
    </WordItemBlock>
  );
}

const WordListBlock = styled.ul``;

const WordItemBlock = styled.li`
padding: 10px 20px;
border-bottom: 1px solid #ddd;
h3 {
  display:flex;

}
cursor:pointer;
user-select: none;
p{
border-top: 1px solid #ddd;
margin-top: 10px;
padding: 10px 0;
}
`;

const EngBox = styled.div`
  display: flex;
  align-items: center;
  h3 {
    flex: 1;
    margin-top:-7px;
    margin-left:7px;
  }
`