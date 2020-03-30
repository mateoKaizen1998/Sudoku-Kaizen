import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

function configureStore(initialState = { board: [] }) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(thunk));

  return createStore(
    rootReducer,
    // Ojo con el spanglish
    { board: [], selectedCell: {}, errores: [{ region: null, cell: null }] },
    enhancers
  );
}

export default configureStore;
