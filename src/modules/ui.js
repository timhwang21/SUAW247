export const OPEN_BODY = 'ui/OPEN_BODY';
export const openBody = () => ({
  type: OPEN_BODY,
});

export const CLOSE_BODY = 'ui/CLOSE_BODY';
export const closeBody = () => ({
  type: CLOSE_BODY,
});

export const TOGGLE_BODY = 'ui/TOGGLE_BODY';
export const toggleBody = () => ({
  type: TOGGLE_BODY,
});

export const isBodyHidden = state => state.ui.bodyHidden;

const initialState = {
  bodyHidden: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case OPEN_BODY:
      return {
        ...state,
        bodyHidden: false,
      };
    case CLOSE_BODY:
      return {
        ...state,
        bodyHidden: true,
      };
    case TOGGLE_BODY:
      return {
        ...state,
        bodyHidden: !state.bodyHidden,
      };
    default:
      return state;
  }
};
