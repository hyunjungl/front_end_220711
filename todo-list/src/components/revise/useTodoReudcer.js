import { useReducer } from "react";

const initialState = {
  input: "",
  todo_list: [
    { id: 1, text: "input 상태 관리하기", done: false },
    { id: 2, text: "todo-list 출력하기", done: false },
  ],
};

function reducer(state, action) {
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

function useTodoReducer() {
  const [state, useTodoReducer] = useReducer(reducer, initialState);
}
