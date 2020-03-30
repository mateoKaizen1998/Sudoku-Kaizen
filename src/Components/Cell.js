import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { setSelected } from "../actions";
import { useDispatch, useSelector } from "react-redux";

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

  ${({ selectedNumber, validNumber, inSameCol, inSameRow }) => {
    let background;
    if (!validNumber) {
      background = "red";
    } else if (selectedNumber) {
      background = "lightskyblue";
    } else if (inSameCol || inSameRow) {
      background = "lightgrey";
    }
    return css`
      background: ${background};
    `;
  }}
`;

function Cell({ value, region, cellNumber, isSelected, editable }) {
  const dispatch = useDispatch();
  const selectCell = () => {
    dispatch(setSelected(region, cellNumber, value, editable));
  };

  const selectedRegion = useSelector(state => state.selectedCell.region);
  const selectedCell = useSelector(state => state.selectedCell.cell);
  const selectedValue = useSelector(state => state.selectedCell.value);
  const errores = useSelector(state => state.errores);

  // spanglish
  let error = errores.find(
    // consistencia, si usas cellNumber entonces trata de poner regionNumber tambien
    error => error.region === region && error.cell === cellNumber
  );

  // el ternario es redundante aca
  let conflict = error ? true : false;

  const selectedNumber = (selectedValue, value) => {
    return selectedValue === value && value !== null;
  };

  const inSameCol = (selectedRegion, selectedCell) => {
    let startRegion = Math.floor(selectedRegion % 3);
    // trata de crearconstantes semanticas para el for, region2 es la region siguiente o siempre
    // la region numero 2? Por que sumas 7 a start region?

    for (let region2 = startRegion; region2 < startRegion + 7; region2 += 3) {
      const startCell = Math.floor(selectedCell % 3);

      // idem aca
      for (let cell = startCell; cell < startCell + 7; cell += 3) {
        if (cell === cellNumber && region2 === region) {
          return true;
        }
      }
    }
    return false;
  };

  const inSameRow = (selectedRegion, selectedCell) => {

    // IDEM aca
    let startRegion = Math.floor(selectedRegion / 3) * 3;
    for (let region2 = startRegion; region2 < startRegion + 3; region2++) {
      var startCell = Math.floor(selectedCell / 3) * 3;
      for (let cell = startCell; cell < startCell + 3; cell++) {
        if (cell === cellNumber && region2 === region) {
          return true;
        }
      }
    }
    return false;
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
