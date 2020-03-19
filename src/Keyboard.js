import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCellValue } from "./actions";

import "./Keyboard.css";

// returns true if board is valid, false otherwise
const validInput = (board, indexRegion, indexCell, value) => {
  console.log(indexRegion, indexCell);
  if (value !== null) {
    // Checking the square
    let x2;
    for (x2 = 0; x2 < 9; ++x2) {
      if (x2 !== indexCell && board[indexRegion][x2] === value) {
        console.log("Toy en el primer if");
        return false;
      }
    }

    // Cheking row
    let startRegion = Math.floor(indexRegion / 3) * 3;
    for (let region = startRegion; region < startRegion + 3; region++) {
      var startCell = Math.floor(indexCell / 3) * 3;
      for (let cell = startCell; cell < startCell + 3; cell++) {
        if (
          (cell !== indexCell || region !== indexRegion) &&
          value === board[region][cell]
        ) {
          console.log("Toy en el Segundo if");
          return false;
        }
      }
    }

    // Checking column
    startRegion = Math.floor(indexRegion % 3);
    for (let region = startRegion; region < startRegion + 7; region += 3) {
      const startCell = Math.floor(indexCell % 3);
      for (let cell = startCell; cell < startCell + 7; cell += 3) {
        if (
          (cell !== indexCell || region !== indexRegion) &&
          value === board[region][cell]
        ) {
          console.log("Toy en el tercer if");
          return false;
        }
      }
    }
  }
  return true;
};

function Keyboard() {
  const board = useSelector(state => state.board);
  const selectedRegion = useSelector(state => state.selectedCell.region);
  const selectedCell = useSelector(state => state.selectedCell.cell);

  const dispatch = useDispatch();

  const onClick = ({ target: { value } }) => {
    let parsedValue = parseInt(value);
    parsedValue = Number.isNaN(parsedValue) ? null : parsedValue;

    dispatch(
      setCellValue(
        parsedValue,
        validInput(board, selectedRegion, selectedCell, parsedValue)
      )
    );
  };

  return (
    <table className="tableKeyboard">
      <tbody>
        <tr>
          <td>
            <button value={1} onClick={onClick}>
              1
            </button>
          </td>
          <td>
            <button value={2} onClick={onClick}>
              2
            </button>
          </td>
          <td>
            <button value={3} onClick={onClick}>
              3
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value={4} onClick={onClick}>
              4
            </button>
          </td>
          <td>
            <button value={5} onClick={onClick}>
              5
            </button>
          </td>
          <td>
            <button value={6} onClick={onClick}>
              6
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value={7} onClick={onClick}>
              7
            </button>
          </td>
          <td>
            <button value={8} onClick={onClick}>
              8
            </button>
          </td>
          <td>
            <button value={9} onClick={onClick}>
              9
            </button>
          </td>
        </tr>
        <tr id="buttonRow">
          <td>
            <button value={null} onClick={onClick} className="buttonClear">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
