import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDW0XE-lZTAKHtZaQfltKHnprdRqZ_etIM",
    authDomain: "tinder-cl-c42ff.firebaseapp.com",
    projectId: "tinder-cl-c42ff",
    storageBucket: "tinder-cl-c42ff.appspot.com",
    messagingSenderId: "107782986344",
    appId: "1:107782986344:web:6bd3dcaad293ed306339dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;