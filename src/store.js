import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import reducer from './modules';

export const history = createHistory();

const middleware = applyMiddleware(routerMiddleware(history), thunk, logger);

export default createStore(reducer, composeWithDevTools(middleware));
