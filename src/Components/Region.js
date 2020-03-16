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

function Region({ values, regionNumber }) {
  /* const onClick = value => {
    setCellValue();
  }; */

  return (
    <Div>
      {values.map((cell, index) => (
        <Cell value={cell} region={regionNumber} cellNumber={index} /> //aca va la operacion para cambiar el valor de la celda
      ))}
    </Div>
  );
}

export default Region;
