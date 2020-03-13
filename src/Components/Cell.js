import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { setSelected } from "../actions";
import { useDispatch } from "react-redux";

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

function Cell({ value }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelected(value));
  }, []);

  //ver como dispatchear la action, tambien ver la comparacion de === en el if de la action

  return <Div onClick={() => setSelected()}>{value}</Div>;
}

export default Cell;
