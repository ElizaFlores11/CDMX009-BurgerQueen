import firebase from 'firebase/app';
import 'firebase/firestore' 
  let firebaseConfig = {
    apiKey: "AIzaSyCwD2vRMyzzoVSlgMw1ugRcjke2wBCZCMc",
    authDomain: "burguerqueen-f6391.firebaseapp.com",
    databaseURL: "https://burguerqueen-f6391.firebaseio.com",
    projectId: "burguerqueen-f6391",
    storageBucket: "burguerqueen-f6391.appspot.com",
    messagingSenderId: "22715911302",
    appId: "1:22715911302:web:42b667553f3a91a381d507"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore(); 
