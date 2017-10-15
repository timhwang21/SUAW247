import { db, timestamp } from '../firebase';
import { getUser } from './user';

export const createPost = post => (dispatch, getState) => {
  const user = getUser(getState());

  dispatch(createPostStart());

  return db
    .collection('posts')
    .add({
      ...post,
      user_id: user.uid,
      created_at: timestamp(),
      updated_at: timestamp(),
    })
    .then(docRef => dispatch(createPostSuccess(docRef)))
    .catch(error => dispatch(createPostError(error)));
};

export const CREATE_POST_START = 'posts/CREATE_POST_START';
const createPostStart = () => ({
  type: CREATE_POST_START,
});

export const CREATE_POST_SUCCESS = 'posts/CREATE_POST_SUCCESS';
const createPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
});

export const CREATE_POST_ERROR = 'posts/CREATE_POST_ERROR';
const createPostError = error => ({
  type: CREATE_POST_ERROR,
  payload: error,
});

const initialState = {
  posts: {},
  loading: 0,
  error: null,
};

export const isPostsLoading = state => !!state.posts.loading;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST_START:
      return {
        ...state,
        loading: state.loading + 1,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: state.loading - 1,
        error: null,
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: state.loading - 1,
        error: payload,
      };
    default:
      return state;
  }
};
