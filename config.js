import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBvQVmLvvRBtMVR7jQ1oZt3XomIHJgCEFk",
    authDomain: "self-designed-app-57aec.firebaseapp.com",
    projectId: "self-designed-app-57aec",
    storageBucket: "self-designed-app-57aec.appspot.com",
    messagingSenderId: "407897452161",
    appId: "1:407897452161:web:236c8c179d80ab3d916780"
  };
 // Initialize Firebase 
 if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
 export default firebase.firestore();