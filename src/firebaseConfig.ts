// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM16zkI3vGC9wy0Mld9CRNPk7Rh8J9fNI",
  authDomain: "wrestleversedatabase.firebaseapp.com",
  projectId: "wrestleversedatabase",
  storageBucket: "wrestleversedatabase.appspot.com",
  messagingSenderId: "540750345160",
  appId: "1:540750345160:web:c973e148eba0036e5006fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);