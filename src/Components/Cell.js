import React from "react";
import styled, { css } from "styled-components";
import { onCellSelect } from "../actions";

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
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: red;
    `}
`;

function Cell({ selected, row, column, value }) {
  const onClick = () => {
    onCellSelect(row, column);
  };

  return (
    <Container isSelected={selected} onClick={onClick}>
      {value}
    </Container>
  );
}

export default Cell;
