import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAD-DQF0PUXS079RI7OnCj5yMp3CciaoR0",
  authDomain: "recipe-finder-b26b9.firebaseapp.com",
  projectId: "recipe-finder-b26b9",
  storageBucket: "recipe-finder-b26b9.appspot.com",
  messagingSenderId: "268360002854",
  appId: "1:268360002854:web:9031ffbbc04acfa25165e7",
  };




const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
// const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export { auth, firestore, storage, signInWithGoogle };




