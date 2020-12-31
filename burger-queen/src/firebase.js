import firebase from '@firebase/app';
import 'firebase/firestore';
// import 'firebase/firebase-auth';
import 'firebase/storage';

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBNs3NuYub0KFoxk-d_xs41kBq9ULvfN6U',
    authDomain: 'burger-queen-apivue.firebaseapp.com',
    projectId: 'burger-queen-apivue',
    storageBucket: 'burger-queen-apivue.appspot.com',
    messagingSenderId: '340515172601',
    appId: '1:340515172601:web:0d2be7f19c517454c9f228',
    measurementId: 'G-4M2E33VGGT',
  };

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db};
