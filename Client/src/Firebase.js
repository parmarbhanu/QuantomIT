// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCszibm9sx1dZz2_PQYuGQVpPMSD09XGp4",
  authDomain: "assisment-f069b.firebaseapp.com",
  projectId: "assisment-f069b",
  storageBucket: "assisment-f069b.appspot.com",
  messagingSenderId: "823819012296",
  appId: "1:823819012296:web:5b47a08b392b1dfb9c3dfd",
  measurementId: "G-7J0G19855Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage=getStorage(app)