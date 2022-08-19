import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../../custom-axios";

// /movie/:id  => /movie/123
//   => usePrams() => {id : 123}
// /movie?name=seok&password=1234

export default function DetailBox() {
  // 숫자를 넣더라도 string으로 넘어온다
  const [data, setData] = useState({});
  const { pathname } = useLocation();

  const {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    poster_path,
    backdrop_path,
  } = data;

  console.log(data);

  const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;

  // ?. (옵셔널 체이닝) : ?. 앞에 값이 undefined와 null 아닐 경우에만 참조
  // console.log({}.data?.age);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetail(pathname);
      setData(data);
    };

    fetchData();
  }, [pathname]);

  return (
    <Block backdropUrl={backdropUrl}>
      <ImgBox>
        <img src={imgUrl} alt="" />
      </ImgBox>
      <ContentBox>
        <TitleBox>
          <h3>{title || name}</h3>
          <span>
            ({release_date?.substr(0, 4) || first_air_date?.substr(0, 4)})
          </span>
        </TitleBox>
        <Summary
          style={{ marginBottom: 10, fontSize: "1.2em", fontWeight: 700 }}
        >
          개요
        </Summary>
        <DescText>{overview || "개요 없음"}</DescText>
      </ContentBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  ${({ backdropUrl }) => css`
    background-image: url(${backdropUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  width: 300px;
  height: 450px;
  background-color: tomato;
  margin-right: 20px;
  img {
    height: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
  h3 {
    font-size: 2em;
    font-weight: 700;
  }
  span {
    font-size: 1.8em;
  }
`;

const ContentBox = styled.div``;

const DescText = styled.p`
  line-height: 1.4em;
`;

const Summary = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 700;
`;
