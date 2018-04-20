import firebase from 'firebase';
import * as FirebaseActions from './actions';

export default firebase;

export { default as firebaseApp } from './firebaseApp';

export { default as db } from './db';

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { FirebaseActions };
