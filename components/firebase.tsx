import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  databaseURL: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId:,
  appId: ,
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
