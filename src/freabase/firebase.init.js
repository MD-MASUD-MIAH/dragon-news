// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtV680hGjedY8DlNFlcSKRQrFJrTCIWQ",
  authDomain: "dragon-news-27ba5.firebaseapp.com",
  projectId: "dragon-news-27ba5",
  storageBucket: "dragon-news-27ba5.firebasestorage.app",
  messagingSenderId: "318278357014",
  appId: "1:318278357014:web:82e8bf3e83c5f245bc2537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
