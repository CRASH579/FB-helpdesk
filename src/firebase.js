import firebase from "firebase/app";
import "firebase/auth";

 export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDYkwXXeAFTHLo4-X65Zex0e5JSUqhyONU",
    authDomain: "messenger-7585f.firebaseapp.com",
    projectId: "messenger-7585f",
    storageBucket: "messenger-7585f.appspot.com",
    messagingSenderId: "42927208838",
    appId: "1:42927208838:web:36a35aa2b0218803aad407"
  }).auth();