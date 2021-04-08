import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDLXfmV8KbBE4hsLpWvzC6uTvn5bWJcWBg",
    authDomain: "newsletter-8cc5e.firebaseapp.com",
    databaseURL: "https://newsletter-8cc5e-default-rtdb.firebaseio.com",
    projectId: "newsletter-8cc5e",
    storageBucket: "newsletter-8cc5e.appspot.com",
    messagingSenderId: "9582219850",
    appId: "1:9582219850:web:cc97740ea66ba757128cb3"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()