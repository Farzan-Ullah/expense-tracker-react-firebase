// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC2ylUb-2YkiuUwvUl8W1RK7QxUsog_tI",
  authDomain: "expense-tracker-05-2657a.firebaseapp.com",
  projectId: "expense-tracker-05-2657a",
  storageBucket: "expense-tracker-05-2657a.appspot.com",
  messagingSenderId: "936904533731",
  appId: "1:936904533731:web:cd16347e7ebbc91fdb07d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
