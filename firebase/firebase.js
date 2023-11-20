
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDgrJ3A_g5nHu_tV9Vnn0plCWo6hbTvc4",
    authDomain: "todo-16cc7.firebaseapp.com",
    projectId: "todo-16cc7",
    storageBucket: "todo-16cc7.appspot.com",
    messagingSenderId: "311126720542",
    appId: "1:311126720542:web:20cb5a316fddfa1721ee0f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)