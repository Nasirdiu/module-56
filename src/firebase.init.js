// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2xzmvFbZZr3glpGHBy9pkbh2524IIXpc",
  authDomain: "simple-first-firebase.firebaseapp.com",
  projectId: "simple-first-firebase",
  storageBucket: "simple-first-firebase.appspot.com",
  messagingSenderId: "835397703691",
  appId: "1:835397703691:web:04319422576ae80a46cf0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;