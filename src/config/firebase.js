/**
 * author: Denis Kravchenko
 */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkLQcC45Y8R8bH8xTlReB8aWIaGwqzUjE",
  authDomain: "canoe-kayak-store.firebaseapp.com",
  databaseURL: "https://canoe-kayak-store.firebaseio.com",
  projectId: "canoe-kayak-store",
  storageBucket: "canoe-kayak-store.appspot.com",
  messagingSenderId: "373063408989",
  appId: "1:373063408989:web:ac6accae969c579fe35cb4",
  measurementId: "G-73QBLTXGT9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore();

export default firebase;
