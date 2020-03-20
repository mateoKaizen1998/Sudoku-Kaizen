import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBoard } from "../actions";

import Keyboard from "../Keyboard";
import Board from "./Board";

const board = [
  [null, null, null, 9, null, 1, null, 2, null],
  [4, null, 7, 6, 8, 3, null, null, 5],
  [null, null, null, null, null, null, null, 7, null],
  [null, null, null, null, 1, null, 7, 3, 4],
  [8, null, 1, null, null, 9, null, 5, 6],
  [null, 5, null, 7, 6, 2, null, null, null],
  [1, 9, null, null, 4, null, null, 5, 6],
  [7, null, 4, 5, 9, 8, 1, null, null],
  [null, 8, 3, null, 2, 6, null, null, null]
];

/* const board = [
  [
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 9, editable: false },
    { value: null, editable: true },
    { value: 1, editable: false },
    { value: null, editable: true },
    { value: 2, editable: false },
    { value: null, editable: true }
  ],
  [
    { value: 4, editable: false },
    { value: null, editable: true },
    { value: 7, editable: false },
    { value: 6, editable: false },
    { value: 8, editable: false },
    { value: 3, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 5, editable: false }
  ],
  [
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 7, editable: false },
    { value: null, editable: true }
  ],
  [
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 1, editable: false },
    { value: null, editable: true },
    { value: 7, editable: false },
    { value: 3, editable: false },
    { value: 4, editable: false }
  ],
  [
    { value: 8, editable: false },
    { value: null, editable: true },
    { value: 1, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 9, editable: false },
    { value: null, editable: true },
    { value: 5, editable: false },
    { value: 6, editable: false }
  ],
  [
    { value: null, editable: true },
    { value: 5, editable: false },
    { value: null, editable: true },
    { value: 7, editable: false },
    { value: 6, editable: false },
    { value: 2, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true }
  ],
  [
    { value: 1, editable: false },
    { value: 9, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 4, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: 5, editable: false },
    { value: 6, editable: false }
  ],
  [
    { value: 7, editable: false },
    { value: null, editable: true },
    { value: 4, editable: false },
    { value: 5, editable: false },
    { value: 9, editable: false },
    { value: 8, editable: false },
    { value: 1, editable: false },
    { value: null, editable: true },
    { value: null, editable: true }
  ],
  [
    { value: null, editable: true },
    { value: 8, editable: false },
    { value: 3, editable: false },
    { value: null, editable: true },
    { value: 2, editable: false },
    { value: 6, editable: false },
    { value: null, editable: true },
    { value: null, editable: true },
    { value: null, editable: true }
  ]
]; */

function Sudoku() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBoard(board));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "50px",
          alignItems: "center"
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
