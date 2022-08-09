import {useState} from "react";
import styled from "styled-components";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons";

export default function Slider() {
  const [slideList,setLiseList]= useState ([
    {title:"슬라이드1"},
    {title:"슬라이드2"},
    {title:"슬라이드3"},
    {title:"슬라이드4"},
  ]);
  return ( 
  <Container>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </Container>
  );
}

const Container = styled.div`
width:100%;
  height: 300px;
  ul{
    display: flex;
    height: 300px;
    width: 200vw;
    transform:translate(-100%);
    li {
     flex:1
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 48px;
     color#fff;
  background-color: tomato;

    }
  }
`;

