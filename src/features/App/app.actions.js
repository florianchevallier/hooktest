import setActions from 'frutils/redux/setActions.js';
import actionTypes from './app.actionTypes.js';

const actionParams = {
  GET_SESSION_SUCCESS: ['session'],
};

export default setActions(actionTypes, actionParams);