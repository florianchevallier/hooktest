import { all, fork } from "redux-saga/effects";
import session from "./features/App/app.saga";

export default function* root() {
  yield all([
    fork(session),
  ]);
}
