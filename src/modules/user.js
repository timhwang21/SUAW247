import { FirebaseActions } from '../firebase';

export const LOGIN = 'user/LOGIN';
export const login = user => ({
  type: LOGIN,
  payload: { ...user },
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

const initialState = null;

export const getUser = state => state.user;

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