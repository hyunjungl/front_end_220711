import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export default function WordList({ wordList }) {
  return (
    <WordListBlock>
      {wordList.map((word) => (
        <WordItem word={word} />
      ))}
    </WordListBlock>
  );
}

function WordItem({ word }) {
  const [active, setActive] = useState(false);
  return (
    <WordItemBlock onClickCapture={() => setActive(!active)}>
      <h3>
        {word.eng}
        {/* 버블링 */}
        <FaTrash onClick={() => console.log("remove")} />
      </h3>
      {active && <p>{word.kor}</p>}
    </WordItemBlock>
  );
}

const WordListBlock = styled.ul``;

const WordItemBlock = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px 0;
  }
`;
