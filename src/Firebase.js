// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDfFn85zsLu76PTU2V1HiyXOFvNi0xPIqA",
//     authDomain: "netflixclone-d1c4b.firebaseapp.com",
//     projectId: "netflixclone-d1c4b",
//     storageBucket: "netflixclone-d1c4b.appspot.com",
//     messagingSenderId: "48208346095",
//     appId: "1:48208346095:web:fe5394ec04619b6ccad41a"
//   };

//   // initialize the app with the config
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export {auth};
//   export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfFn85zsLu76PTU2V1HiyXOFvNi0xPIqA",
    authDomain: "netflixclone-d1c4b.firebaseapp.com",
    projectId: "netflixclone-d1c4b",
    storageBucket: "netflixclone-d1c4b.appspot.com",
    messagingSenderId: "48208346095",
    appId: "1:48208346095:web:fe5394ec04619b6ccad41a"
  };

// Initialize Firebase app
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
