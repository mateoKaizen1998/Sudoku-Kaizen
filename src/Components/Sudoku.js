import React, { useEffect } from "react";
import Keyboard from "../Keyboard";
import Board from "./Board";
import { useDispatch } from "react-redux";
import { setBoard } from "../actions";

const board = [
  [null, null, null, 4, null, 7, null, null, null],
  [9, null, 1, 6, 8, 3, null, null, null],
  [null, 2, null, null, null, 5, null, 7, null],
  [null, null, null, 8, null, 1, null, 5, null],
  [null, 1, null, null, null, 9, 7, 6, 2],
  [7, 3, 4, null, 5, 6, null, null, null],
  [1, 9, null, 7, null, 4, null, 8, 3],
  [null, 4, null, 5, 9, 8, null, 2, 6],
  [null, 5, 6, 1, null, null, null, null, null]
];

function Sudoku() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBoard(board));
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20
        }}
      >
        <div>
          <Board />
        </div>
        <div>
          <Keyboard />
        </div>
      </div>
    </>
  );
}

export default Sudoku;
