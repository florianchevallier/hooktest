import { LOCATION_CHANGE } from 'react-router-redux';
import { all, put, takeLatest, fork } from 'redux-saga/effects'; // eslint-disable-line import/order

import actions from './app.actions';
import actionTypes from './app.actionTypes';

export function* getSession() {

  try {
    const session = localStorage.getItem('session');
    if (!session) {
      throw new Error("Pas de session");
    }
    yield put(actions.onGetSessionSuccess(session));
  } catch (err) {
    yield put(actions.onGetSessionFailed(err));
  }
}


// Root saga
export default function* rootSaga() {
  yield all([
    fork(getSession),
    takeLatest(actionTypes.GET_SESSION_LOADING, getSession),
    takeLatest(LOCATION_CHANGE, getSession),
  ]);
}
