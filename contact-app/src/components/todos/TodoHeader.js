import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { undoneCount } from "../../atoms/todo";

export default function TodoHeader() {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  const count = useRecoilValue(undoneCount);
  return (
    <Block>
      <DateStr>{dateStr}</DateStr>
      <span>해야할 일 : {count}개</span>
    </Block>
  );
}

const Block = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
`;

const DateStr = styled.h3`
  font-size: 1.6em;
  font-weight: 700;
`;
