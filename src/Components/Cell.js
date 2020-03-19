import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { setSelected } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import Region from "./Region";
import Board from "./Board";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  ${({ selected }) =>
    selected &&
    css`
      background: lightblue;
    `}
  ${({ validNumber }) =>
    !validNumber &&
    css`
      background: red;
    `}
`;

function Cell({ value, region, cellNumber, isSelected }) {
  const dispatch = useDispatch();

  const selectCell = () => {
    dispatch(setSelected(region, cellNumber));
  };

  const errores = useSelector(state => state.errores);
  let conflict = false;
  errores.map(error => {
    if (error.region === region && error.cell === cellNumber) {
      conflict = true;
    }
  });

  return (
    <Container
      validNumber={!conflict}
      selected={isSelected}
      onClick={selectCell}
    >
      {value}
    </Container>
  );
}

export default Cell;
