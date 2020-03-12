import { createSelector } from "reselect";
import { toJS } from "immutable";

const getBoard = createSelector(
  state => state.simpleReducer.board,
  board => board
);

export default getBoard;
