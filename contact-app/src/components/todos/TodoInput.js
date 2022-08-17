import { useRef, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms/todo";

export default function TodoInput() {
  const [text, setText] = useState("");
  const nextId = useRef(1);

  const setTodoList = useSetRecoilState(todoState);

  const handleText = ({ target: { value } }) => {
    setText(value);
  };

  const onCreate = () => {
    if (text.trim() === "") return;
    setTodoList((todoList) =>
      todoList.concat({ id: nextId.current, text, done: false })
    );
    nextId.current++;
    setText("");
  };

  return (
    <Block>
      <Input type="text" onChange={handleText} value={text} />
      <Button onClick={onCreate}>Submit</Button>
    </Block>
  );
}

const Block = styled.div`
  padding: 20px 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  outline: none;
  background: none;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 0;
  border: 1px solid #ddd;
  background: none;
  outline: none;
  cursor: pointer;
`;
