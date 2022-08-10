import { useReducer, useRef} from "react";
import styled from "styled-components";
import WordBookHeader from "./WordBookHeader";
import WordInput from "./WordInput";
import WordList from "./WordList";

function reducer(state, action) {
switch(action.type) {
  case "create_word":
    return [...state, action.word];
    default:
      return state;
}
}
export default function WordBook() {
const [state, dispatch] = useReducer (reducer, [
  {id:1, word:"computer", kor:"컴퓨터"},
{id:2, eng:"phone", kor:"휴대폰"},
]);

const nextId = useRef(3);

const onCreate =(eng,kor) => {
  dispatch({type: "reacte_word", word:{id: nextId.current, eng,kor},
});
};
  return (
    <Tamplate>
      <WordBookBlock>
        <WordBookHeader/>
        <WordList wordList={state} />
        <WordInput onCreate={onCreate}/>
      </WordBookBlock>
    </Tamplate>
  );
}

const Tamplate = styled.div`
display:flex;
justify-content: center;
align-items: center;

height :100vh;
background-color: #fbfbfb;
`;

const WordBookBlock = styled.div`
width: 500px;
height:700px;
border:1px solid #ddd;
border-radius:4px;
background-color:#fff;
position:relative;
`;