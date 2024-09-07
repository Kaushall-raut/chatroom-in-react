import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3TwIN9fZ67sEsi3zkx7tEbW9GZjFkN-Q",
  authDomain: "chatroom-d4395.firebaseapp.com",
  projectId: "chatroom-d4395",
  storageBucket: "chatroom-d4395.appspot.com",
  messagingSenderId: "262612792450",
  appId: "1:262612792450:web:439b891742cc07cf8cb09b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
