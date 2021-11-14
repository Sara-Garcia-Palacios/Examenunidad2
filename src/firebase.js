//import de la libreria
import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT_-Apl7Rf6ptuI2-tNOsleP3yc-Xqqj4",
    authDomain: "swunidad2.firebaseapp.com",
    projectId: "swunidad2",
    storageBucket: "swunidad2.appspot.com",
    messagingSenderId: "280300500477",
    appId: "1:280300500477:web:12e4744f1cc0f13a7f1594"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export{firebase}