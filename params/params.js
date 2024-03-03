import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbxqxSAYEOJ6eMdTbHGeBjUBtv7HnjjFQ",
  authDomain: "nutriton-14c99.firebaseapp.com",
  projectId: "nutriton-14c99",
  storageBucket: "nutriton-14c99.appspot.com",
  messagingSenderId: "515037117741",
  appId: "1:515037117741:web:1d7e33dfa90e746609a7a4",
  measurementId: "G-N5Q84WLXDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports={firebaseConfig}
