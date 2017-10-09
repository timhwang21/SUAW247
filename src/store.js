import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';

import reducer from './modules'

export const history = createHistory();

export default createStore(
  reducer,
  {},
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger,
  )
)