// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDf0f5QNmV7S74cphexZ7YN55KZLD0cKQ",
  authDomain: "fir-2ndproject-90771.firebaseapp.com",
  projectId: "fir-2ndproject-90771",
  storageBucket: "fir-2ndproject-90771.firebasestorage.app",
  messagingSenderId: "327720048009",
  appId: "1:327720048009:web:9fb8d068fbd9f5ed9efd58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);