
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYW-j8VQ6VwF-iJobUyKL5_9GaXuGveto",
    authDomain: "papelera-el-sol.firebaseapp.com",
    projectId: "papelera-el-sol",
    storageBucket: "papelera-el-sol.appspot.com",
    messagingSenderId: "358667966660",
    appId: "1:358667966660:web:529c911fd0b81a9cf41191",
    measurementId: "G-LWV88ZFNSX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();