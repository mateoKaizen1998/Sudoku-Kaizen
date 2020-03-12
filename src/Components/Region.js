import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

const Div = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
`;

function Region() {
  return (
    <Div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(col => (
        <Cell value={0} />
      ))}
    </Div>
  );
}

export default Region;
