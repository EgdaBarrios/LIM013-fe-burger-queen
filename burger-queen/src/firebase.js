import { firebase } from '@firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBNs3NuYub0KFoxk-d_xs41kBq9ULvfN6U',
  authDomain: 'burger-queen-apivue.firebaseapp.com',
  databaseURL: 'https://burger-queen-apivue-default-rtdb.firebaseio.com',
  projectId: 'burger-queen-apivue',
  storageBucket: 'burger-queen-apivue.appspot.com',
  messagingSenderId: '340515172601',
  appId: '1:340515172601:web:0d2be7f19c517454c9f228',
  measurementId: 'G-4M2E33VGGT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// utils
const fs = firebase.firestore();

// collection references
const breakfastMenuSandwiches = fs.collection('breakfastSandwiches');
const breakfastMenuDrinks = fs.collection('breakfastDrinks');

// Collection breakfastSandwiches
// const breakfastSandwichesList = document.querySelector('#breakfastSandwiches');

// export utils/refs
export {
  fs,
  // auth,
  breakfastMenuSandwiches,
  breakfastMenuDrinks,
};
