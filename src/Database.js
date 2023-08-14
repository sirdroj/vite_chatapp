import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
 


const firebaseConfig = {
  apiKey: "AIzaSyDDvmIztbOWjOlroJGLmez6kYe9cEuXDgs",
  authDomain: "contact-d444a.firebaseapp.com",
  projectId: "contact-d444a",
  storageBucket: "contact-d444a.appspot.com",
  messagingSenderId: "93190654733",
  appId: "1:93190654733:web:2a76256a621c2b169b7e44"
};



const app = initializeApp(firebaseConfig);
export const db=getFirestore(app); 