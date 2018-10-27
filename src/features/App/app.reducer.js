import setInitialState from 'frutils/redux/setInitialState.js';
import { setSuccessState, setFailureState, setLoadingState } from 'frutils/redux/actionLifecycleStateSetters.js';

import actionTypes from './app.actionTypes.js';

const data = {
  user: {}
}
export const initialState = setInitialState(actionTypes, data);

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_SESSION_SUCCESS: {
      const newState = { user: state.user };
      if (action.session && action.session.user) {
        newState.user = action.session.user;
      }
      return setSuccessState(state, 'getSession', newState);
    }

    case actionTypes.GET_SESSION_LOADING: {
      return setLoadingState(state, 'getSession');
    }

    case actionTypes.GET_SESSION_FAILED:
      return setFailureState(state, 'getSession', action.error.responseJSON);

    // DEFAULT
    default:
      return state;
  }
}

export default appReducer;