import styled, {keyframes} from "styled-components";
import {AiOutlineClose} from "react-icons/ai";

export default function Modal() {
const [disappear, setDisappear]=useState(false);
  return (
  <BgBlock>
    <ModalBlock>
      <BtnClose>
        <AiOutlineClose/>
      </BtnClose>
    </ModalBlock>
  </BgBlock>
  );
}
const fadeOut = keyframes`
  to {
    opacity:0;
  }
`;
const BgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width:100vw;
  height:100vh;

  position: absolute;
  top:0;
  left:0;

  background: rgba(0,0,0,0.4);
`;

const ModalBlock =styled.div`
  width: 500px;
  height : 300px;
  background-color: #fff;
  position:relative;
  animation-name: ${fadeOut};
  animation-duration: 0.3s;
`;

const BtnClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;