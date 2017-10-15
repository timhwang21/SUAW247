import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';
import fullscreen from './fullscreen';
import posts from './posts';
import ui from './ui';
import user from './user';

export default combineReducers({
  clock,
  fullscreen,
  posts,
  ui,
  user,
  router: routerReducer,
  form: formReducer,
});
