// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyVXczYGKCV6v-O7651BBfz_EqcpnSDwc",
  authDomain: "moviesgpt-bf6e3.firebaseapp.com",
  projectId: "moviesgpt-bf6e3",
  storageBucket: "moviesgpt-bf6e3.appspot.com",
  messagingSenderId: "1066282124636",
  appId: "1:1066282124636:web:0ce644e073df700b1ced99",
  measurementId: "G-5EQ9RQTQYN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
