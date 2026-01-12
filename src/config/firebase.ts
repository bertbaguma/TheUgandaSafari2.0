
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_b1cwHlZEp6EEufAwd9uzSZKwTHLgMaM",
  authDomain: "safaritugendequotebuilder.firebaseapp.com",
  projectId: "safaritugendequotebuilder",
  storageBucket: "safaritugendequotebuilder.appspot.com",
  messagingSenderId: "946173158647",
  appId: "1:946173158647:web:b83cf194d358aa2485dff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
