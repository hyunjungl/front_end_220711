import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { undoneCount } from "./Todo";

export default function TodoHeader() {
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const count = useRecoilValue(undoneCount);

  return (
    <Block>
      <DateStr>{todayStr}</DateStr>
      <span>해야할 일 : {count}개</span>
    </Block>
  );
}

const Block = styled.div`
  padding: 20px 10px;
`;

const DateStr = styled.h3`
  font-size: 1.6em;
  margin: 0;
`;
