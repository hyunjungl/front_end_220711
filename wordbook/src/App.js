import WordBook from "./components/WordBook";
import { createGlobalStyle } from "styled-components";
import GrandFather, {
  GrandContext,
} from "./components/tutorial-context/GrandFather";
import Last from "./components/tutorial-context/Last";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <WordBook />
    </div>
  );
}

export default App;