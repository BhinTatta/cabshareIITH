import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbBfji3B3BaXEhquYngitnH52YxCBknJs",
  authDomain: "mylist1-2fad5.firebaseapp.com",
  projectId: "mylist1-2fad5",
  storageBucket: "mylist1-2fad5.appspot.com",
  messagingSenderId: "472105994452",
  appId: "1:472105994452:web:dfcab9842dee958681d341",
  measurementId: "G-C6HR4SW2CW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
