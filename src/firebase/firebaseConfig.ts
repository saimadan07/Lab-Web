import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqlVWuroMnV4Db6dq44iD5kc134L6t2-E",
  authDomain: "lab-57201.firebaseapp.com",
  projectId: "lab-57201",
  storageBucket: "lab-57201.appspot.com",
  messagingSenderId: "181981134660",
  appId: "1:181981134660:web:45d82a0bc485867d35e111",
  measurementId: "G-T1YCRF7V1R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
