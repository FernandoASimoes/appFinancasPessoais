import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCircP0lR29ThYAPZAByF9snUs9BF96YhA",
    authDomain: "financapessoal-5f14a.firebaseapp.com",
    databaseURL: "https://financapessoal-5f14a.firebaseio.com",
    projectId: "financapessoal-5f14a",
    storageBucket: "financapessoal-5f14a.appspot.com",
    messagingSenderId: "1040952335178",
    appId: "1:1040952335178:web:e6f69307682a8066937fb3",
    measurementId: "G-YDRFQ3YR5N"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;