// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFNMpDFSkWZY32XgAtD-wiSIBZfiW9Nek",
  authDomain: "practice--and-github.firebaseapp.com",
  projectId: "practice--and-github",
  storageBucket: "practice--and-github.appspot.com",
  messagingSenderId: "523685385462",
  appId: "1:523685385462:web:faff5c6b908699922a48d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;