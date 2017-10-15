import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock'
import fullscreen from './fullscreen'
import user from './user'

export default combineReducers({
  clock,
  fullscreen,
  user,
  router: routerReducer,
  form: formReducer,
})
