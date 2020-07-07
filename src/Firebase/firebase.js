import firebase from 'firebase/app';
import 'firebase/firestore' 
/* let firebaseConfig = {
    apiKey: "AIzaSyBWcYc_UaDkNm1smAx1RFD2JG0a0C75eBg",
    authDomain: "pruebareact-eff43.firebaseapp.com",
    databaseURL: "https://pruebareact-eff43.firebaseio.com",
    projectId: "pruebareact-eff43",
    storageBucket: "pruebareact-eff43.appspot.com",
    messagingSenderId: "414029419204",
    appId: "1:414029419204:web:fc46d097a082b26fe1af91",
    measurementId: "G-G2HP1V03ST"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();*/
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
