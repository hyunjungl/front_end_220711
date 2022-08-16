import styled from "styled-components";

export default function TodoHeader({ totalCount, doneCount }) {
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const percent =
    totalCount === 0 ? 0 : Math.floor((doneCount / totalCount) * 100);

  return (
    <Block>
      <DateText>{todayStr}</DateText>
      <TeskCount>
        완료 : {doneCount}/{totalCount}
      </TeskCount>
      <StatusBar percent={percent}>
        <p>{percent}%</p>
      </StatusBar>
    </Block>
  );
}

const Block = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 10px;
`;

const DateText = styled.p`
  font-size: 1.6em;
  font-weight: 700;
`;

const TeskCount = styled.span`
  color: #bbb;
  font-weight: 700;
`;

const StatusBar = styled.div`
  background-color: #ddd;
  font-size: 0.7em;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transform: scaleX(${({ percent }) => percent}%);
    transition: transform 0.25s;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    position: relative;
    z-index: 100;
  }
`;
