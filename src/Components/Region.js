import React from "react";

import Cell from "./Cell";

const Div = styled.div``;

function Region() {
  return (
    <Div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(col => (
        <Cell value={0} />
      ))}
    </Div>
  );
}
