import { combineReducers } from 'redux'

import user from './user'
import clock from './clock'

export default combineReducers({
  clock,
  user,
})
