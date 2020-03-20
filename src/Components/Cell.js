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
  ${({ selectedNumber }) =>
    selectedNumber &&
    css`
      background: lightskyblue;
    `}
  ${({ inSameCol }) =>
    inSameCol &&
    css`
      background: lightblue;
    `}
  ${({ inSameRow }) =>
    inSameRow &&
    css`
      background: lightblue;
    `}
`;

function Cell({ value, region, cellNumber, isSelected }) {
  const dispatch = useDispatch();
  const selectCell = () => {
    dispatch(setSelected(region, cellNumber, value));
  };

  const selectedRegion = useSelector(state => state.selectedCell.region);
  const selectedCell = useSelector(state => state.selectedCell.cell);
  const selectedValue = useSelector(state => state.selectedCell.value);
  const errores = useSelector(state => state.errores);

  let conflict = false;
  errores.map(error => {
    if (error.region === region && error.cell === cellNumber) {
      conflict = true;
    }
  });

  const selectedNumber = (selectedValue, value) => {
    return selectedValue === value && value !== null;
  };

  const inSameCol = (selectedRegion, selectedCell) => {
    let startRegion = Math.floor(selectedRegion % 3);
    for (let region2 = startRegion; region2 < startRegion + 7; region2 += 3) {
      const startCell = Math.floor(selectedCell % 3);
      for (let cell = startCell; cell < startCell + 7; cell += 3) {
        if (cell === cellNumber && region2 === region) {
          return true;
        }
      }
    }
  };

  const inSameRow = (selectedRegion, selectedCell) => {
    let startRegion = Math.floor(selectedRegion / 3) * 3;
    for (let region2 = startRegion; region2 < startRegion + 3; region2++) {
      var startCell = Math.floor(selectedCell / 3) * 3;
      for (let cell = startCell; cell < startCell + 3; cell++) {
        if (cell === cellNumber && region2 === region) {
          return true;
        }
      }
    }
  };

  return (
    <Container
      validNumber={!conflict}
      selected={isSelected}
      onClick={selectCell}
      selectedNumber={selectedNumber(selectedValue, value)}
      inSameCol={inSameCol(selectedRegion, selectedCell)}
      inSameRow={inSameRow(selectedRegion, selectedCell)}
    >
      {value}
    </Container>
  );
}

export default Cell;
