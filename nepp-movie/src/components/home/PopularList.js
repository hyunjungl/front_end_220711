import styled from "styled-components";
import Title from "../common/Title";
import PopularItem from "./PopularItem";

export default function PopularList({ title }) {
  return (
    <ListBlock>
      <Title title={title} />
      <ul>
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />

        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </ul>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  margin-bottom: 100px;

  ul {
    margin-top: 30px;
    display: flex;
    overflow-x: scroll;
    /* overflow-y: hidden; */
  }
`;
