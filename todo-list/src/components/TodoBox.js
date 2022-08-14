import styled from "styled-components";


//App.js에 투두박스의 하위요소로 헤더랑 인풋을 넣었고, 임포트 했으므로 
//제일 상위요소 안에 childeren 비구조 할당해서 넣어야지 자식요소들이 브라우저에 뜸
export default function TodoBox({ children }) {
  return (
    <Container>
      <Block>{children}</Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid #bbb;
  background-color: #fff;
  overflow: hidden;
`;
