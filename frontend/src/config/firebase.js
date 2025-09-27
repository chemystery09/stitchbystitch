// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGCpyUDoO-x6sVTdSnzCeIQxrESAe3PNg",
  authDomain: "stitchbystitch-1b682.firebaseapp.com",
  projectId: "stitchbystitch-1b682",
  storageBucket: "stitchbystitch-1b682.firebasestorage.app",
  messagingSenderId: "474716767275",
  appId: "1:474716767275:web:44b9b1610dbe11e790d66e",
  measurementId: "G-8F2Q4TM830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);