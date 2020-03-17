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
        ...state.board[state.selectedCell.region].slice(
          0,
          state.selectedCell.cell
        ),
        action.payload.value,
        ...state.board[state.selectedCell.region].slice(state.selectedCell.cell)
      ];

      return {
        ...state,
        board: [
          ...state.board.slice(0, state.selectedCell.region),
          newRegion,
          ...state.board.slice(state.selectedCell.region)
        ]
      };
    default:
      return state;
  }
};
