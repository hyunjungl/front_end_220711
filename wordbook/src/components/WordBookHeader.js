import styled from "styled-components";

export default function WordBookHeader() {
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <HeaderBlock>
      <h1>{todayStr}</h1>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 10px 20px;
`;
