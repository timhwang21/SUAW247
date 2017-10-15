import firebase from 'firebase';
import * as FirebaseActions from './actions';
import * as FirebaseUtils from './utils';

export default firebase;

export { default as firebaseApp } from './firebaseApp';

export { default as db } from './db';
export { default as ui } from './ui';

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { FirebaseActions };
export { FirebaseUtils };
