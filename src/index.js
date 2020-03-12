import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./index.css";
import Sudoku from "./Components/Sudoku";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Sudoku />
  </Provider>,
  document.getElementById("root")
);
