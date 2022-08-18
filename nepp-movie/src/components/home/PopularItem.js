import styled from "styled-components";

export default function PopularItem() {
  return (
    <ItemBlock>
      <ImgBox>이미지</ImgBox>
      <Title>영화제목</Title>
      <ReleaseDate>2022-08-18</ReleaseDate>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  text-align: center;
  & + & {
    margin-left: 20px;
  }
`;

const ImgBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: red;
`;

const Title = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
  margin: 10px 0 5px;
`;

const ReleaseDate = styled.span`
  font-size: 0.9em;
  color: #bbb;
`;
