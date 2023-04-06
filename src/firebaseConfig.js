// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// CUANDO SE LOOP, CAMBIAR ESTA PARTE Y AGREGAR TODAS LAS DB EN FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyAjXh0dV-LV12z-MPBZQpVSG5J5dg9O_Gc",
  authDomain: "bonsaisorlando.firebaseapp.com",
  projectId: "bonsaisorlando",
  storageBucket: "bonsaisorlando.appspot.com",
  messagingSenderId: "658457828665",
  appId: "1:658457828665:web:bb9bfe2450da821c199ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db