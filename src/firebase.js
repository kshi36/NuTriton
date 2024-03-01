/**
 * Firebase (DB) functionality
 *
 */
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "./params/params.js";

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;