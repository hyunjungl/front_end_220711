import styled from "styled-components";
import { Reset } from "styled-reset";
import Dropdown from "./components/ui/Dropdown";

function App() {
  return (
    <Template>
        <Reset />
      <Block>
       <Dropdown />
      </Block>
      <Modal />
    </Template>
  );
}
const Template = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`;
const Block =styled.div`
width: 300px;
height:500px;
border:1px solid #ddd;
border-radius:8px;
`
export default App;
