import Model from "./model";
import { act } from "react-dom/test-utils";

export default (
  state = { board: [], selectedCell: {}, errores: [] },
  action
) => {
  switch (action.type) {
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

    case "setCellValue":
      let newRegion = [
        ...state.board[state.selectedCell.region].slice(
          0,
          state.selectedCell.cell
        ),
        action.payload.value,
        ...state.board[state.selectedCell.region].slice(
          state.selectedCell.cell + 1
        )
      ];

      let validValue = action.payload.validValue;
      let errores;
      if (!validValue) {
        errores = [
          ...state.errores,
          {
            region: state.selectedCell.region,
            cell: state.selectedCell.cell
          }
        ];
      } else {
        errores = [...state.errores];
      }

      return {
        ...state,
        board: [
          ...state.board.slice(0, state.selectedCell.region),
          newRegion,
          ...state.board.slice(state.selectedCell.region + 1)
        ],
        errores
      };

    default:
      return state;
  }
};
