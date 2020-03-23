import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Region from "./Region";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 456px;
  border: 1px solid;
  background: white;
`;

function Board() {
  const board = useSelector(state => state.board);

  return (
    <Container>
      {board.map((region, index) => (
        <Region region={region} regionNumber={index} />
      ))}
    </Container>
  );
}

export default Board;
