// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "eshop-90cd4.firebaseapp.com",
  projectId: "eshop-90cd4",
  storageBucket: "eshop-90cd4.appspot.com",
  messagingSenderId: "737159527849",
  appId: "1:737159527849:web:075159e978f3b991a798b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()

export const storage=getStorage()