import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyDzYHXQr3aUxAwKgUooKbT66wjdTeXcxA4",
  authDomain: "singup-da798.firebaseapp.com",
  databaseURL: "https://singup-da798-default-rtdb.firebaseio.com",
  projectId: "singup-da798",
  storageBucket: "singup-da798.firebasestorage.app",
  messagingSenderId: "200805347343",
  appId: "1:200805347343:web:adc340fa569a8cdfc6f37a",
  measurementId: "G-ZSXC4LGMZC"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
