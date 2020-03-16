import Model from "./model";
import { act } from "react-dom/test-utils";

export default (state = { board: [], selectedCell: {} }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    /* case "onCellSelect":
      return {
        ...state,
        selected: action.payload
      }; */

    case "setBoard":
      return {
        ...state,
        board: action.payload
      };

    case "setSelected":
      return {
        ...state,
        selectedCell: action.payload
      };

    case "setCellValue": //sirve para setear el value a una cell
      let newRegion = [
        ...state.board[action.payload.region].slice(0, action.payload.cell),
        action.payload.value,
        ...state.board[action.payload.region].slice(action.payload.cell)
      ];

      return {
        ...state,
        board: [
          ...state.board.slice(0, action.payload.region),
          newRegion,
          ...state.board.slice(action.payload.region)
        ]
      };
    default:
      return state;
  }
};
