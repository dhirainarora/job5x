import { initializeApp } from "firebase/app";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, collection, getDocs, addDoc, query, where 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvy0adQdoosf5a_63QOPsV6X8v8rq66Sc",
  authDomain: "job5x-472810.firebaseapp.com",
  projectId: "job5x-472810",
  storageBucket: "job5x-472810.firebasestorage.app",
  messagingSenderId: "927725128020",
  appId: "1:927725128020:web:5ad79c445c0fe8010820c1",
  measurementId: "G-FKT33RHQ9M"
};

// Init
const app = initializeApp(firebaseConfig);

// Auth + Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Helpers
export async function signInWithGooglePopup() {
  const res = await signInWithPopup(auth, provider);
  return res.user;
}
export function logout() {
  return signOut(auth);
}

export { onAuthStateChanged, collection, getDocs, addDoc, query, where };
