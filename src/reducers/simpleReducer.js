import Model from "./model";

export default (state = { board: [] }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case "selectCell":
      return {
        ...state,
        selected: action.payload
      };
    case "setBoard":
      return {
        ...state,
        board: action.payload
      };
    default:
      return state;
  }
};
