import React from "react";
import styled from "styled-components";

import { setCellValue } from "../actions";
import Cell from "./Cell";

const Div = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
`;

function Region({ value }) {
  /* const onClick = value => {
    setCellValue();
  }; */

  return (
    <Div>
      {value.map(cell => (
        <Cell value={cell} /> //aca va la operacion para cambiar el valor de la celda
      ))}
    </Div>
  );
}

export default Region;
