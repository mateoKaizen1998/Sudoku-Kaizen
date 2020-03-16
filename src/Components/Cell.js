import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { setSelected } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import Region from "./Region";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: lightblue;
    `}
`;

function Cell({ value, region, cellNumber }) {
  const dispatch = useDispatch();
  useEffect(() => {
    selectCell();
  }, []);

  const data = useSelector(state => state.selectCell);
  console.log(data);
  function selectCell() {
    dispatch(setSelected(region, cellNumber));
  }

  return <Div onClick={selectCell}>{value}</Div>;
}

export default Cell;
