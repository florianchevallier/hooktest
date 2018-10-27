import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import { routerMiddleware, connectRouter } from "connected-react-router";

import createHistory from "history/createBrowserHistory";

import sagas from "../sagas";
import rootReducer from "./rootReducer";

const history = createHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddlewaree = routerMiddleware(history);

  const middlewares = [sagaMiddleware, routerMiddlewaree];
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      applyMiddleware(...middlewares),
    ),
  )
  sagaMiddleware.run(sagas);
  return store;
}
