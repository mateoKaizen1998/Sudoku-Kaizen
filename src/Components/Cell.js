import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { setSelected } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import Region from "./Region";

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
`;

function Cell({ value, region, cellNumber, isSelected }) {
  const dispatch = useDispatch();

  const selectCell = () => {
    dispatch(setSelected(region, cellNumber));
  };

  return (
    <Container selected={isSelected} onClick={selectCell}>
      {value}
    </Container>
  );
}

export default Cell;
