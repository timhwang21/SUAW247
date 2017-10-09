import firebase from 'firebase';
import * as actions from './actions';

export default firebase;

export { default as firebaseApp } from './firebaseApp';

export { default as db } from './db';
export { default as ui } from './ui';

export const FirebaseActions = actions;