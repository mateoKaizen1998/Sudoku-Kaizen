import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBoard } from "../actions";

import Keyboard from "./Keyboard";
import Board from "./Board";

const board = [
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
];

function Sudoku() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBoard(board));
  }, []);

  return (
    <>
      {/* trata de no poner estilos inline si estas usando css */}
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
