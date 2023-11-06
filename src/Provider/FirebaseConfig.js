// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9yqv-3pIfaoXU-LL2rFYdat3H9R7FtpM",
  authDomain: "sr-jobs-2df84.firebaseapp.com",
  projectId: "sr-jobs-2df84",
  storageBucket: "sr-jobs-2df84.appspot.com",
  messagingSenderId: "517805784593",
  appId: "1:517805784593:web:ad03738dd2bc4c2ebdfbb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
