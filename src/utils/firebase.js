// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-kSY-LvikfpaLLg96suEfVGol80Gld9s",
  authDomain: "clone-51976.firebaseapp.com",
  projectId: "clone-51976",
  storageBucket: "clone-51976.appspot.com",
  messagingSenderId: "866037606591",
  appId: "1:866037606591:web:7301042c23c418e1af3e0a",
  measurementId: "G-3V0VFR610G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
const auth = firebase.auth();

export {db, auth}