import { useRef } from "react";
import { useReducer } from "react";
import styled from "styled-components";
import WordBookHeader from "./WordBookHeader";
import WordInput from "./WordInput";
import WordList from "./WordList";

function reducer(state, action) {
  switch (action.type) {
    case "create_word":
      return [...state, action.word];
    case "remove_word":
      return state.filter((word) => word.id !== action.id);
    case "toggle_word":
      return state.map((word) =>
        word.id === action.id ? { ...word, active: !word.active } : word
      );
    default:
      return state;
  }
}

export default function WordBook() {
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, eng: "computer", kor: "컴퓨터", active: true },
    { id: 2, eng: "phone", kor: "휴대폰", active: false },
  ]);

  const nextId = useRef(3);

  const onCreate = (eng, kor) => {
    dispatch({
      type: "create_word",
      word: { id: nextId.current, eng, kor },
    });
  };

  const onRemove = (id) => {
    dispatch({ type: "remove_word", id });
  };

  const onToggle = (id) => {
    dispatch({ type: "toggle_word", id });
  };

  return (
    <Tamplate>
      <WordBookBlock>
        <WordBookHeader />
        <WordList wordList={state} onRemove={onRemove} onToggle={onToggle} />
        <WordInput onCreate={onCreate} />
      </WordBookBlock>
    </Tamplate>
  );
}

const Tamplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: #fbfbfb;
`;

const WordBookBlock = styled.div`
  width: 500px;
  height: 700px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
`;
