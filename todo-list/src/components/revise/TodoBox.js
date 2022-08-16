import { createContext, useMemo } from "react";
import styled from "styled-components";
import { TodoProvider } from "../../contexts/useTodoContext";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useTodoReducer from "./useTodoReudcer";

export const TodoContext = createContext(null);

export default function TodoBox() {
  const { state, createTodo, toggleTodo, removeTodo, handleInput } =
    useTodoReducer();
  const { input, todo_list } = state;

  // done값이 false인 todo만 배열로 모아서 length값 할당
  const doneCount = useMemo(
    // return 값이 있는 콜백함수
    () => {
      return todo_list.filter((todo) => todo.done).length;
    },
    [todo_list]
  );

  return (
    <TodoProvider>
      <Block>
        <TodoHeader totalCount={todo_list.length} doneCount={doneCount} />
        <TodoList
          todo_list={todo_list}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        <TodoInput
          input={input}
          handleInput={handleInput}
          createTodo={createTodo}
        />
      </Block>
    </TodoProvider>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
