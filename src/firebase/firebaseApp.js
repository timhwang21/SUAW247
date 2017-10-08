import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgVKcQoLwzgZwnCb-BVysFYGXihlnZBaQ",
  authDomain: "shutupandwrite247.firebaseapp.com",
  databaseURL: "https://shutupandwrite247.firebaseio.com",
  projectId: "shutupandwrite247",
  storageBucket: "shutupandwrite247.appspot.com",
  messagingSenderId: "1007118546089",
});

export default firebaseApp;