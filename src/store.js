import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import reducer from './modules';

export const history = createHistory();

let middlewares = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV === 'development') {
  const devMiddlewares = [logger];
  middlewares = middlewares.concat(devMiddlewares);
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, composeWithDevTools(middleware));
