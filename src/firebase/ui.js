import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default new firebaseui.auth.AuthUI(firebase.auth());
