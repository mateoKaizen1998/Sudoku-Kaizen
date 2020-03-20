import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { setCellValue } from "../actions";

import Cell from "./Cell";

const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
`;

function Region({ region, regionNumber }) {
  const regionSelected = useSelector(state => state.selectedCell.region);
  const cellSelected = useSelector(state => state.selectedCell.cell);

  const isSelected = (cellNumber, regionNumber) => {
    return cellNumber === cellSelected && regionSelected === regionNumber;
  };

  return (
    <Container>
      {region.map((cell, cellNumber) => (
        <Cell
          value={cell.value}
          region={regionNumber}
          cellNumber={cellNumber}
          isSelected={isSelected(cellNumber, regionNumber)}
          editable={cell.editable}
        />
      ))}
    </Container>
  );
}

export default Region;
