import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgM8xENa6XbH_6wid95rkYV1_yN3Bjet0",
  authDomain: "clone-92b5a.firebaseapp.com",
  databaseURL: "https://clone-92b5a.firebaseio.com",
  projectId: "clone-92b5a",
  storageBucket: "clone-92b5a.appspot.com",
  messagingSenderId: "4697456373",
  appId: "1:4697456373:web:53ed14f19129f776bd8fbc",
  measurementId: "G-9PYQCQYBP2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
