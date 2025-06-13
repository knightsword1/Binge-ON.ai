// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "binge-on-9b20b.firebaseapp.com",
  projectId: "binge-on-9b20b",
  storageBucket: "binge-on-9b20b.firebasestorage.app",
  messagingSenderId: "1087792951855",
  appId: import.meta.env.VITE_FIREBASE_API_ID,
  measurementId: "G-EQTW3TC7GN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
