import styled from "styled-components";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoState } from "./Todo";

export default function TodoList() {
  const todoList = useRecoilValue(todoState);

  return (
    <Block>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </ul>
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
