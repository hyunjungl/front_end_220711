import WordBook from "./components/WordBook";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    list-style: :none;
  }
`;

function App() {
  return <div>
    <WordBook/>
  </div>;
}
export default App;
