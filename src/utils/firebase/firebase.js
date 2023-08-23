import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC4ClTA9dJNvlB_-uxCL6YRMRhR_x_vNA",
  authDomain: "e-commerce-e2a1a.firebaseapp.com",
  projectId: "e-commerce-e2a1a",
  storageBucket: "e-commerce-e2a1a.appspot.com",
  messagingSenderId: "976010386144",
  appId: "1:976010386144:web:f56b1e1a9035db81fbce85",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
      });
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  }
};
