import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Cell from "./Cell";
// import Region from "./Region"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
`;

function Board() {
  const board = useSelector(state => state.board);
  return (
    <Container>
      {board &&
        board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <Cell value={col} row={rowIndex} column={colIndex} />
          ))
        )}
    </Container>
  );
}

export default Board;
