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
      console.log("Estoy dentro del reducer" + action.payload.value);
      let newRegion = [
        ...state.board[state.selectedCell.region].slice(
          0,
          state.selectedCell.cell
        ),
        {
          ...state.selectedCell,
          value: state.selectedCell.editable
            ? action.payload.value
            : state.selectedCell.value
        },
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

// Spread operator: Lucas: "Le saca todo lo qeu tiene un objeto y lo pone al mismo nivel qeu el resto de las cosas", 2020 dc
/* 
let user = {
  name: "mateo",
  surname: "sayas"
};

let userComplement = {
  ...user, //Si saco los 3 puntos le estoy pasando el objeto entero, no los atributos de ese objeto
  age: 21 //Si en vez de un nuevo atributo le paso un atributo de user, lo reescribe
}; */
