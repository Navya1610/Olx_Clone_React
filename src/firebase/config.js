import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJj3YkK0Tf79JuIarUe69_IhI9CUBugUs",
  authDomain: "fir-d2569.firebaseapp.com",
  projectId: "fir-d2569",
  storageBucket: "fir-d2569.appspot.com",
  messagingSenderId: "329954438738",
  appId: "1:329954438738:web:5187647847b394f8e2b98b",
  measurementId: "G-FLZM6LYT0F"
};

export default firebase.initializeApp(firebaseConfig)
