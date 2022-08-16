import { useMemo, useReducer, useRef } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialState = {
  input: "",
  todo_list: [
    { id: 1, text: "input 상태 관리하기", done: false },
    { id: 2, text: "todo-list 출력하기", done: false },
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "change_input":
      return { ...state, input: action.input };
    case "create_todo":
      return {
        ...state,
        input: "",
        todo_list: state.todo_list.concat({
          id: action.id,
          text: state.input,
          done: false,
        }),
      };
    case "toggle_todo":
      return {
        ...state,
        todo_list: state.todo_list.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove_todo":
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default function TodoBox() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { input, todo_list } = state;

  // done값이 false인 todo만 배열로 모아서 length값 할당
  const doneCount = useMemo(
    // return 값이 있는 콜백함수
    () => {
      return todo_list.filter((todo) => todo.done).length;
    },
    [todo_list]
  );

  const handleInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const nextId = useRef(3);

  const createTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "create_todo", id: nextId.current });
    nextId.current++;
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle_todo", id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove_todo", id });
  };

  return (
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
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
