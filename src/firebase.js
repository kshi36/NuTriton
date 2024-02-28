/**
 * Firebase (DB) functionality
 *
 */
import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "./params/params.js";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// await initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

/** Authentication */
//TODO: user authentication, maybe move to controllers/authentication.js

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: './public/index.html',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // // Terms of service url.
//     // tosUrl: '<your-tos-url>',
//     // // Privacy policy url.
//     // privacyPolicyUrl: '<your-privacy-policy-url>'
// };

// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

// signing users up
// const signupForm = document. querySelector('.signup')
// signupForm. addEventListener('submit', (e) => {
// e.preventDefault()
// const email = signupForm.email.value
// const password = signupForm.password.value
// createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//     console.log('user created:', cred. user)
//     signupForm. reset()
//     })
//     .catch((err) => {
//     console.log(err .message)
//     })
// })

// const logoutButton = document.querySelector('.logout')
// logoutButton.addEventListener ('click', () => {
//     signOut(auth)
//     .then(() => {
//         console.log('user signed out')
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
// })
const loginForm = document.querySelector ('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user logged in:', cred.user);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App />
            {/* <Login /> */}
          </React.StrictMode>
        );
// loginForm.reset()
    })
    .catch((err) => {
        console.log(err.message)
    })
})

export default app;