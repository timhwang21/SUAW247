import { createSelector } from 'reselect';
import isAfter from 'date-fns/fp/isAfter';
import subMinutes from 'date-fns/fp/subMinutes';
import startOfDay from 'date-fns/fp/startOfDay';
import endOfDay from 'date-fns/fp/endOfDay';

import { db, timestamp } from '../firebase';
import { formatDisplay } from '../utils/datetime';
import { fireToArray } from '../utils/firebase';
import { getNextCutoff } from './clock';
import { getUser } from './user';

const now = new Date();

const INITIALIZE_POST_GETTER = 'posts/INITIALIZE_POST_GETTER';

// Note: Unexpected startAt and endAt arguments because of orderBy 'desc'
export const initializePostGetter = ({ uid }) => dispatch => {
  const listener = db
    .collection('posts')
    .where('user_id', '==', uid)
    .orderBy('created_at', 'desc')
    .startAt(endOfDay(now))
    .endAt(startOfDay(now))
    .onSnapshot(querySnapshot =>
      dispatch(setPosts(fireToArray(querySnapshot))),
    );

  dispatch({
    type: INITIALIZE_POST_GETTER,
    payload: listener,
  });
};

const DETACH_POST_GETTER = 'posts/DETACH_POST_GETTER';
export const detachPostGetter = () => (dispatch, getState) => {
  const unsubscribe = getListener(getState());

  unsubscribe && unsubscribe();

  dispatch({
    type: DETACH_POST_GETTER,
  });
};

const SET_POSTS = 'posts/SET_POSTS';
export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

const CREATE_POST = 'posts/CREATE_POST';
export const createPost = post => (dispatch, getState) => {
  const user = getUser(getState());

  dispatch({
    type: CREATE_POST,
  });

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

const CREATE_POST_SUCCESS = 'posts/CREATE_POST_SUCCESS';
const createPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
});

const CREATE_POST_ERROR = 'posts/CREATE_POST_ERROR';
const createPostError = error => ({
  type: CREATE_POST_ERROR,
  payload: error,
});

const UPDATE_POST = 'posts/UPDATE_POST';
export const updatePost = post => dispatch => {
  dispatch({
    type: UPDATE_POST,
  });

  return db
    .collection('posts')
    .doc(post.id)
    .update({
      ...post,
      updated_at: timestamp(),
    })
    .then(docRef => dispatch(updatePostSuccess(docRef)))
    .catch(error => dispatch(updatePostError(error)));
};

const UPDATE_POST_SUCCESS = 'posts/UPDATE_POST_SUCCESS';
const updatePostSuccess = () => ({
  type: UPDATE_POST_SUCCESS,
});

const UPDATE_POST_ERROR = 'posts/UPDATE_POST_ERROR';
const updatePostError = error => ({
  type: UPDATE_POST_ERROR,
  payload: error,
});

const initialState = {
  listener: null,
  posts: [],
  loading: 0,
  error: null,
};

export const isPostsLoading = state => !!state.posts.loading;
export const getPosts = state => state.posts.posts;
export const getPostCount = state => state.posts.posts.length;
export const getLatestPost = state => state.posts.posts[0];

const getListener = state => state.posts.listener;

export const getActivePost = createSelector(
  [getLatestPost, getNextCutoff],
  (post, cutoff) => {
    if (!post) {
      return {};
    }

    // When a post is first saved, it takes Firebase a few seconds to apply the
    // timestamp. Thus, if the most recent post's create_at is null, it means
    // it was just created and is the currently active post.
    if (post.created_at == null) {
      return post;
    }

    const cutoffStart = subMinutes(30)(cutoff);

    return isAfter(cutoffStart)(post.created_at.toDate()) ? post : {};
  },
);

// TODO: Add session time, and fill in gaps between empty times
// Selector to reduce posts to objects keyed by session time, and
// map over 48 possible times?
export const getProcessedPosts = createSelector([getPosts], posts =>
  posts.map((post, idx) => ({
    ...post,
    session: posts.length - idx,
    created_at: formatDisplay(post.created_at.toDate()),
    updated_at: formatDisplay(post.updated_at.toDate()),
  })),
);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIALIZE_POST_GETTER:
      return {
        ...state,
        listener: payload,
      };
    case DETACH_POST_GETTER:
      return {
        ...state,
        listener: null,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
    case UPDATE_POST:
      return {
        ...state,
        loading: state.loading + 1,
      };
    case CREATE_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: state.loading - 1,
        error: null,
      };
    case CREATE_POST_ERROR:
    case UPDATE_POST_ERROR:
      return {
        ...state,
        loading: state.loading - 1,
        error: payload,
      };
    default:
      return state;
  }
};
