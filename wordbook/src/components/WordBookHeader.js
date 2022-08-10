import styled from "styled-components";

export default function WordBookHeader({ state }) {
  const count = state.length;
  const memorizedNum = state.filter((word) => word.active).length;
  console.log(count, memorizedNum);
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <HeaderBlock>
      <h2>{todayStr}</h2>
      <p>
        외운 단어 : {memorizedNum}/{count}
      </p>
      <StatusBar />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const StatusBar = styled.div``;
