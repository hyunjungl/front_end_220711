import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./Todo";

export default function TodoInput() {
  const [input, setInput] = useState("");

  const setTodoList = useSetRecoilState(todoState);

  const nextId = useRef(3);

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };

  const onCreate = () => {
    setTodoList((todoList) =>
      todoList.concat({ id: nextId.current, body: input, done: false })
    );
    setInput("");
    nextId.current++;
  };

  return (
    <Block>
      <input type="text" onChange={handleInput} value={input} />
      <button onClick={onCreate}>Submit</button>
    </Block>
  );
}

const Block = styled.div`
  padding: 10px;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 5px;
    outline: none;
    margin-bottom: 5px;
  }
  button {
    width: 100%;
    padding: 10px 0;
  }
`;
