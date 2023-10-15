// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAedYIdo-emfCJefu0EWjP6smZufXZL9lY",
  authDomain: "netflixgpt-af6c2.firebaseapp.com",
  projectId: "netflixgpt-af6c2",
  storageBucket: "netflixgpt-af6c2.appspot.com",
  messagingSenderId: "1045146830446",
  appId: "1:1045146830446:web:9af57e3d62084e0b36c87f",
  measurementId: "G-NPN60BGHQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();