import firebase from 'firebase';
require('firebase/firestore');

const firestore = firebase.firestore();

firestore.settings({
  timestampsInSnapshots: true,
});

export default firestore;
