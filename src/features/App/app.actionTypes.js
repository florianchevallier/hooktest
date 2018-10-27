// import getLocaleFallback from 'frutils/getLocaleFallback.js';
import setActionTypes from 'frutils/redux/setActionTypes.js';

const prefixes = [
  'GET_SESSION',
];

const actionTypes = setActionTypes(prefixes, 'app', 'intact');

export default actionTypes;
