import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase config (you provided)
const firebaseConfig = {
  apiKey: "AIzaSyCqlVWuroMnV4Db6dq44iD5kc134L6t2-E",
  authDomain: "lab-57201.firebaseapp.com",
  projectId: "lab-57201",
  storageBucket: "lab-57201.firebasestorage.app",
  messagingSenderId: "181981134660",
  appId: "1:181981134660:web:45d82a0bc485867d35e111",
  measurementId: "G-T1YCRF7V1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

