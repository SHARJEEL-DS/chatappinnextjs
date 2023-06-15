// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGuH96DFme4SmPoUjgwNSOOnyaC3PuNYA",
  authDomain: "chatapp-397a2.firebaseapp.com",
  projectId: "chatapp-397a2",
  storageBucket: "chatapp-397a2.appspot.com",
  messagingSenderId: "862653283131",
  appId: "1:862653283131:web:4219d9acb42aff9f13d51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
