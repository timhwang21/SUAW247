import pick from 'lodash/fp/pick';

import firebase, { FirebaseActions } from '../firebase';
import { initializePostGetter, detachPostGetter } from './posts';

const getUserProperties = pick([
  'displayName',
  'email',
  'emailVerified',
  'isAnonymous',
  'photoURL',
  'refreshToken',
  'uid',
]);

export const LOGIN = 'user/LOGIN';
export const login = user => ({
  type: LOGIN,
  payload: getUserProperties(user),
});

export const LOGOUT = 'user/LOGOUT';
export const logout = () => dispatch => {
  FirebaseActions.signOut();

  dispatch({
    type: LOGOUT,
  });
};

export const DELETE_ACCOUNT = 'user/DELETE_ACCOUNT';
export const deleteAccount = () => dispatch => {
  FirebaseActions.deleteAccount();

  dispatch({
    type: DELETE_ACCOUNT,
  });
};

export const INITIALIZE_AUTH = 'user/INITIALIZE_AUTH';
export const initializeAuth = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(initializePostGetter(user));
      dispatch(login(user));
    } else {
      dispatch(detachPostGetter());
      dispatch(logout());
    }
  });

  dispatch({
    type: INITIALIZE_AUTH,
  });
};

export const getUser = state => state.user.user;
export const getMaybeHasUser = state => state.user.maybeHasUser;

const initialState = {
  user: null,
  maybeHasUser: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        maybeHasUser: true,
      };
    case LOGOUT:
    case DELETE_ACCOUNT:
      return {
        ...state,
        user: null,
        maybeHasUser: false,
      };
    default:
      return state;
  }
};
