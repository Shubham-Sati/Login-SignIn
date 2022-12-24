import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "login-signin-e7326.firebaseapp.com",
  projectId: "login-signin-e7326",
  storageBucket: "login-signin-e7326.appspot.com",
  messagingSenderId: "860351151869",
  appId: "1:860351151869:web:3983b5e55fa227d69e8894",
  measurementId: "G-MNFBM6FM6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
