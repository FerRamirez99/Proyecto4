import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Servicios que estoy ocupando
export const db = getFirestore(app)