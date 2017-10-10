import * as screenfull from 'screenfull';

export const TOGGLE_FULLSCREEN = 'notification/TOGGLE_FULLSCREEN';
export const toggleFullscreen = () => dispatch => {
  if (screenfull.enabled) {
    screenfull.toggle(document.body);
  }

  dispatch({
    type: TOGGLE_FULLSCREEN,
  });
};

export const SET_FULLSCREEN = 'notification/SET_FULLSCREEN';
export const setFullscreen = isFullscreen => ({
  type: SET_FULLSCREEN,
  payload: isFullscreen,
})

export const isFullscreen = state => state.fullscreen;
export const canFullscreen = () => screenfull.enabled;

const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FULLSCREEN:
      return payload;
    default:
      return state;
  }
};