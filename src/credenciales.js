// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHLLN_QAcElQGwWBmPXR91eBmsDU4rCgo",
  authDomain: "login-parcial-8a9a1.firebaseapp.com",
  projectId: "login-parcial-8a9a1",
  storageBucket: "login-parcial-8a9a1.appspot.com",
  messagingSenderId: "168233576619",
  appId: "1:168233576619:web:6d604c84e959194730afee"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;