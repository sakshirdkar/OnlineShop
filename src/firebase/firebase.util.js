import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2HXhB9EkIUCUpIHpuaC83-AsyC4sSjJA",
    authDomain: "ess-shop.firebaseapp.com",
    projectId: "ess-shop",
    storageBucket: "ess-shop.appspot.com",
    messagingSenderId: "686414016724",
    appId: "1:686414016724:web:540480314e2e4528b24b41",
    measurementId: "G-K4K25E95D7"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
