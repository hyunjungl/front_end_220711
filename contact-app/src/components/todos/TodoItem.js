import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms/todo";
import { AiOutlineCheck } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

export default function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const setTodoList = useSetRecoilState(todoState);

  const onToggle = () => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onRemove = () => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  return (
    <Block>
      <CheckCircle onClick={onToggle} done={done}>
        <AiOutlineCheck />
      </CheckCircle>
      <p>{text}</p>
      <BiTrashAlt size={20} cursor="pointer" onClick={onRemove} />
    </Block>
  );
}

const Block = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  p {
    flex: 1;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  margin-right: 10px;
  border: 2px solid #000;
  border-radius: 50%;

  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      background: #000;
      color: #fff;
    `}
`;
