import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0zn_rw5wFP-pn5U4os8qS5-iOBpaV0iY",
    authDomain: "fir-a4ee7.firebaseapp.com",
    projectId: "fir-a4ee7",
    storageBucket: "fir-a4ee7.appspot.com",
    messagingSenderId: "634648853143",
    appId: "1:634648853143:web:26277c434f598631e647d2",
    measurementId: "G-3CTQPBFWNE"
  };

export default firebase.initializeApp(firebaseConfig)
