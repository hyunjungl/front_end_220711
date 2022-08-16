import { createGlobalStyle } from "styled-components";
import TodoBox from "./components/revise/TodoBox";
import { useTodoState } from "./contexts/useTodoContext";

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

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoBox />
    </>
  );
}

export default App;
