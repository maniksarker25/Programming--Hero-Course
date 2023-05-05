// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWdBFtrOvMSfDlAuqFaEkHMRoS0nnssPw",
  authDomain: "simple-firebase-d1783.firebaseapp.com",
  projectId: "simple-firebase-d1783",
  storageBucket: "simple-firebase-d1783.appspot.com",
  messagingSenderId: "767429796930",
  appId: "1:767429796930:web:753e77967a53414f07f9db",
  measurementId: "G-14BETNF6DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;