import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Region from "./Region";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 456px;
  border: 1px solid;
`;

function Board() {
  const board = useSelector(state => state.board);
  return (
    <Div>
      {board.map(region => (
        <Region value={region} />
      ))}
    </Div>
  );
}

export default Board;
