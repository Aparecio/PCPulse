import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMHeStXrQKr_ug7cka95hMufixZ2GRT4Q",
  authDomain: "next-gen-pc-building-42523.firebaseapp.com",
  projectId: "next-gen-pc-building-42523",
  storageBucket: "next-gen-pc-building-42523.appspot.com",
  messagingSenderId: "915091839120",
  appId: "1:915091839120:web:533c5384e46e2d1e35a015",
  measurementId: "G-QCZV2GH7X3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();