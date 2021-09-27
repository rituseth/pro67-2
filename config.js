import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  
        apiKey: "AIzaSyCVXpOVzSkk69UJ_IYqxG6qaxbMKzPgIJE",
        authDomain: "classtest-2e410.firebaseapp.com",
        projectId: "classtest-2e410",
        storageBucket: "classtest-2e410.appspot.com",
        messagingSenderId: "914474858854",
        appId: "1:914474858854:web:bbaa202c5af3187a1d30a7"
      
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();