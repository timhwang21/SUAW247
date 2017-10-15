import pick from 'lodash/fp/pick';

import { FirebaseActions } from '../firebase';

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

export const getUser = state => state.user;

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return payload;
    case LOGOUT:
    case DELETE_ACCOUNT:
      return initialState;
    default:
      return state;
  }
};
