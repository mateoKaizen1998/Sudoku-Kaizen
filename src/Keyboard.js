import React from "react";
import { useDispatch } from "react-redux";

import { setCellValue } from "./actions";

import "./Keyboard.css";

function Keyboard() {
  const dispatch = useDispatch();

  const onClick = ({ target: { value } }) => {
    dispatch(setCellValue(value));
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
            <button className="buttonClear">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
