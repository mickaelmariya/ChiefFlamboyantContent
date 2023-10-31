import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// pour la base de données

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAryvNHmdkFAsElH3r7KdEmr9A5YAaQY8w",
  authDomain: "reborndatab.firebaseapp.com",
  projectId: "reborndatab",
  storageBucket: "reborndatab.appspot.com",
  messagingSenderId: "281948016817",
  appId: "1:281948016817:web:c807deb77b57a76efe5290",
  measurementId: "G-9JQQYQDV9D"
};


// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();