import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgmAIc5Pdvq4sMG1H4rPma5BnoRCNi58A",
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
const provider = new GoogleAuthProvider();

export { app, auth, provider };
