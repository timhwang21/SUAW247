import firebase from 'firebase';

export default function() {
  firebase
    .auth()
    .currentUser.delete()
    .catch(handleError);
}

function handleError(err) {
  if (err.code === 'auth/requires-recent-login') {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setTimeout(() => alert('Please sign in again'), 1);
      });
  }
}
