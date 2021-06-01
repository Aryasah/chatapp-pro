import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAwo9H1zddLqX21kWgDL0QM-2eLX_6A34s",
    authDomain: "mychat-e7b27.firebaseapp.com",
    projectId: "mychat-e7b27",
    storageBucket: "mychat-e7b27.appspot.com",
    messagingSenderId: "76725544117",
    appId: "1:76725544117:web:ed32ee2f4828a8503f8afc"
  }).auth();