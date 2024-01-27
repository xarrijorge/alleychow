import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQl0Q9C1ChisV7nFkC24BmFmivJ0Bjzs",
  authDomain: "alleychow-b92f7.firebaseapp.com",
  projectId: "alleychow-b92f7",
  storageBucket: "alleychow-b92f7.appspot.com",
  messagingSenderId: "981822913296",
  appId: "1:981822913296:web:2eb78157bc9f6e28fa8395",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
