import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkJwimTzzlg5xdji4orqgz1Mo5NGHVdAY",
  authDomain: "onlyyou-e664c.firebaseapp.com",
  projectId: "onlyyou-e664c",
  storageBucket: "onlyyou-e664c.appspot.com",
  messagingSenderId: "561045713412",
  appId: "1:561045713412:web:2b2ff181dcf33e85533b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// android : 1098573125767-qshhu4istd79chldtrm365hilhecpnq0.apps.googleusercontent.com