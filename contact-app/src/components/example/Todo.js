import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { atom, RecoilRoot, selector } from "recoil";

// RecoilRoot

// atom : 상태의 단위

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const undoneCount = selector({
  key: "undoneCount",
  get: ({ get }) => {
    const todoList = get(todoState);

    return todoList.filter((todo) => !todo.done).length;
  },
});

export default function Todo() {
  return (
    <RecoilRoot>
      <Template>
        <Block>
          <TodoHeader />
          <TodoList />
          <TodoInput />
        </Block>
      </Template>
    </RecoilRoot>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 700px;
  border: 1px solid #ddd;
`;
