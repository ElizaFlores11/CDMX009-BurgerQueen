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
 
  firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });
  firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
//  firebase.firestore().settings({
 //   cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
//});


  export const db = firebase.firestore(); 
