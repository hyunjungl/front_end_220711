import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { todoState } from "../../atoms/todo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoState);
  return (
    <Block>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  border-bottom: 1px solid #ddd;
`;
