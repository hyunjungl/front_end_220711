import { useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Dropdown from "./components/ui/Dropdown";
import Modal from "./components/ui/Modal";
import Slider from "./components/ui/Slider";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <Template>
      <Reset />
      <Block>
        <Dropdown />
      </Block>
      <Slider />
      {modal && <Modal setModal={setModal} />}
    </Template>
  );
}

export default App;