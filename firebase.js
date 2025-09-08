import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsnGKa6QS9GDGVtlph1N8H30tYKOK4Mkw",
    authDomain: "react-app-d9f36.firebaseapp.com",
    projectId: "react-app-d9f36",
    storageBucket: "react-app-d9f36.firebasestorage.app",
    messagingSenderId: "206720955345",
    appId: "1:206720955345:web:a0743143f4453de715e6f0",
    measurementId: "G-C26WNYYXPD"
};


const app = initializeApp(firebaseConfig);


export {getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}