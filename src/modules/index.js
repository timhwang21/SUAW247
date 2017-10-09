import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import user from './user'
import clock from './clock'

export default combineReducers({
  clock,
  user,
  router: routerReducer,
})
