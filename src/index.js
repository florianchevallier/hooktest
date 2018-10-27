import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/App';
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";

import { ConnectedRouter } from "connected-react-router";
import * as serviceWorker from './serviceWorker';

import configureStore from "./redux/configureStore";

const history = createHistory();
const store = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
