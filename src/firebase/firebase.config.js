// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1V3RZ-XPjBxXwgLH0_T-HmVqHlrEpYD4",
  authDomain: "canadian-food-hub.firebaseapp.com",
  projectId: "canadian-food-hub",
  storageBucket: "canadian-food-hub.appspot.com",
  messagingSenderId: "232961572677",
  appId: "1:232961572677:web:e725acf2a5f11ee6efc82c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;