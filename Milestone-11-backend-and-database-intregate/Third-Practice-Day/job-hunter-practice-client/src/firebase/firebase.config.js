// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYsCVn4fUfBJiuw-k4l_te_ay0830S7g",
  authDomain: "job-hunter-practice.firebaseapp.com",
  projectId: "job-hunter-practice",
  storageBucket: "job-hunter-practice.appspot.com",
  messagingSenderId: "1017368697155",
  appId: "1:1017368697155:web:20932c9927a6ae49bd77f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;