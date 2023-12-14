import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABD9KmA9QuhV6dGjtbCnMABJWLXj0qUJM",
  authDomain: "create-foot.firebaseapp.com",
  projectId: "create-foot",
  storageBucket: "create-foot.appspot.com",
  messagingSenderId: "394733590062",
  appId: "1:394733590062:web:4eba7cd03c685c876f31bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

export const db = getFirestore(app);
