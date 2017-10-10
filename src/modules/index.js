import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import clock from './clock'
import fullscreen from './fullscreen'
import user from './user'

export default combineReducers({
  clock,
  fullscreen,
  user,
  router: routerReducer,
})
