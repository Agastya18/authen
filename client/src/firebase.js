// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTHQsLNmJtMQEnoFpjpKHN69FjmENbCys",
  authDomain: "mern-auth-a36c6.firebaseapp.com",
  projectId: "mern-auth-a36c6",
  storageBucket: "mern-auth-a36c6.appspot.com",
  messagingSenderId: "444745310628",
  appId: "1:444745310628:web:504aee43ac918265332131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);