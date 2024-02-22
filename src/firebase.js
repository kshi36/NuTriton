/**
 * Firebase (DB) functionality
 *
 */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "./params/params";

const app = initializeApp(firebaseConfig);

/** Authentication */
//TODO: user authentication, maybe move to controllers/authentication.js

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);


export default app;