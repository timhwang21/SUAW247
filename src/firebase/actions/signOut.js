import firebase from 'firebase';

export default function() {
  firebase.auth().signOut();
}
