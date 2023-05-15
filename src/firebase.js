// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_KEY,
//   authDomain: "video-7801c.firebaseapp.com",
//   projectId: "video-7801c",
//   storageBucket: "video-7801c.appspot.com",
//   messagingSenderId: "130073115219",
//   appId: "1:130073115219:web:365035e1474abbe7fba4a6",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();

// export default app;

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7w8C4pcRX8v0w1YQuSGGAxlVdGWSt07I",
  authDomain: "video-ce38b.firebaseapp.com",
  projectId: "video-ce38b",
  storageBucket: "video-ce38b.appspot.com",
  messagingSenderId: "172872515602",
  appId: "1:172872515602:web:8f5feb33349be68508d8cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
