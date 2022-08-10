import styled from "styled-components";

export default function WordBookHeader() {
  const count =state.length;
  const activeArr = state.filter().length;
  const todayStr=new Date().toLocaleDateString("ko-KR", {
  dateStyle:"full",
  });
  return <div>
    <HeaderBlock>
      <h1>{todayStr}</h1>
    </HeaderBlock>
  </div>;
}

const HeaderBlock =styled.div`
padding: 10px 20px;
`;