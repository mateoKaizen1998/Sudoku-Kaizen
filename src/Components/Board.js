import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Region from "./Region";
// import Region from "./Region"

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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(col => (
        <Region />
      ))}
    </Div>
  );
}

export default Board;
