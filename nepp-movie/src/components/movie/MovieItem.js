import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie, ref }) {
  const { title, release_date, poster_path } = movie;

  const imgUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <Block ref={ref}>
      <Link to={`/movie/${movie.id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title} />
        </ImgBox>
        <DescBox>
          <TitleText>{title}</TitleText>
          <ReleaseDate>{release_date}</ReleaseDate>
        </DescBox>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 300px;
  background: tomato;
`;

const DescBox = styled.div`
  padding: 10px 0 20px 5px;
`;

const TitleText = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
`;

const ReleaseDate = styled.span`
  color: #bbb;
`;
