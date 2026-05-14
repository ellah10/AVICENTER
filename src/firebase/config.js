import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB4aUfsaXN3nhj55W0G_5mNhWTAF_ULY4",
  authDomain: "avicenterpage.firebaseapp.com",
  projectId: "avicenterpage",
  storageBucket: "avicenterpage.firebasestorage.app",
  messagingSenderId: "578195745508",
  appId: "1:578195745508:web:fb7d2db57a71ba1ce8daf1",
  measurementId: "G-434WQ3VX2M"
};



const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);
  export const auth = getAuth(app);