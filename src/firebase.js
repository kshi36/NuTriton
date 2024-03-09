/**
 * Firebase (DB) functionality
 *
 */
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "./params/params.js";
import {getFirestore} from "firebase/firestore/lite";

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Retrieve Firestore (Firebase DB)
export const db = getFirestore(app);

export default app;