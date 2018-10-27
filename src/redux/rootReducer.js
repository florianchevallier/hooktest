import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import session from "../features/App/app.reducer";

const rootReducer = combineReducers({
  session,
  routing: routerReducer
});

export default rootReducer;
