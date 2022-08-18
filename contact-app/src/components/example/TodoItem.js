import { useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { todoState } from "./Todo";

export default function TodoItem({ todo }) {
  const { id, body, done } = todo;

  const setTodoList = useSetRecoilState(todoState);

  const toggleTodo = () => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Block done={done} onClick={toggleTodo}>
      {body}
    </Block>
  );
}

const Block = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
