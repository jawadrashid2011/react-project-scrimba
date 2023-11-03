import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3zPn2WUzwNACY0yw1GiSDJEDTc-q0gME",
  authDomain: "react-notes-6a525.firebaseapp.com",
  projectId: "react-notes-6a525",
  storageBucket: "react-notes-6a525.appspot.com",
  messagingSenderId: "531960400250",
  appId: "1:531960400250:web:394d4a3da7d5e1318d6ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
