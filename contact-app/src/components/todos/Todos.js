import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    li {
        list-style: none;
    }
`;

export default function Todos() {
  return (
    <Template>
      <GlobalStyle />
      <Block>
        <TodoHeader />
        <TodoList />
        <TodoInput />
      </Block>
    </Template>
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
  width: 500px;
  height: 700px;
  border: 1px solid #ddd;
`;
