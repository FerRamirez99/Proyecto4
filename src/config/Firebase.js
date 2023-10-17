import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnWU6zsuRP4gWYNyUuPUn2uSBdVlZ-s7Y",
  authDomain: "proyecto-4-b6746.firebaseapp.com",
  projectId: "proyecto-4-b6746",
  storageBucket: "proyecto-4-b6746.appspot.com",
  messagingSenderId: "277371751391",
  appId: "1:277371751391:web:7fe07cf24edf778c6e126a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Servicios que estoy ocupando
export const db = getFirestore(app)