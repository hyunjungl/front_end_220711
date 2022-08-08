import TodoBox from "./components/TodoBox";
import TodoHeader from "./components/TodoHeader";
import { createGlobalStyle } from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useMemo, useReducer, useRef } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
`;

const initialState = {
  todoList: [
    { id: 1, text: "투두 리스트 화면 그리기", done: false },
    { id: 2, text: "투두 리스트 기능 구현하기", done: false },
  ],
  input: "",
  isEdit: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return {
        ...state,
        input: "",
        todoList: state.todoList.concat(action.todo),
      };
    case "toggle":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    case "change_input":
      return { ...state, input: action.input };
    case "change_edit":
      return { ...state, isEdit: action.isEdit };
    default:
      return state;
  }
}

function App() {
  // useReducer 한번에 관리할 수 있게 변경
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todoList, input, isEdit } = state;

  const nextId = useRef(3);

  const count = useMemo(() => {
    return todoList.filter((todo) => !todo.done).length;
  }, [todoList]);

  const onCreate = (text) => {
    // Array.prototype.concat() : 인자로 받은 배열을 합쳐서 새로운 배열을 반환
    dispatch({
      type: "create",
      todo: { id: nextId.current, text, done: false },
    });
    nextId.current++;
  };
  const onToggle = (id) => {
    dispatch({ type: "toggle", id });
  };

  const onRemove = (id) => {
    dispatch({ type: "remove", id });
  };

  const onChangeInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const onChangeEdit = (isEdit) => {
    dispatch({ type: "change_edit", isEdit });
  };

  return (
    <>
      <GlobalStyle />
      <TodoBox>
        <TodoHeader count={count} />
        <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        <TodoInput
          onCreate={onCreate}
          onChangeInput={onChangeInput}
          input={input}
          isEdit={isEdit}
          onChangeEdit={onChangeEdit}
        />
      </TodoBox>
    </>
  );
}

export default App;
