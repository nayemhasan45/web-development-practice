// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxkRpY5B1Nu2C7nQPFFZW50iXLo6MedSM",
  authDomain: "simple-firebase-auth-32c16.firebaseapp.com",
  projectId: "simple-firebase-auth-32c16",
  storageBucket: "simple-firebase-auth-32c16.firebasestorage.app",
  messagingSenderId: "304637021255",
  appId: "1:304637021255:web:a32eff0423a55d80c2f562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};