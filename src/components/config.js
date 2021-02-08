import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9YNZNC5uGBaEwIUiLEQeIw9XAZMmnNIc",
  authDomain: "insta-clone-76726.firebaseapp.com",
  projectId: "insta-clone-76726",
  storageBucket: "insta-clone-76726.appspot.com",
  messagingSenderId: "115659926793",
  appId: "1:115659926793:web:29e3f9117262bc7af5b7d8"
};

firebase.initializeApp(firebaseConfig); //function to access firebase
const db = firebase.firestore(); // function to access firebase database
const auth = firebase.auth(); // function to access firebase authentication
const storage = firebase.storage(); // function to access firebase storage

export { db, auth, storage };
