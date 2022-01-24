// This is the config file for the connection with the firebase database. First we import the firebase components.
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Here we set the firebaseConfig with the different authentication settings so we can use it to initialize a connection.
const firebaseConfig = {
    apiKey: "AIzaSyAe6oWUeyHR-oQ8pdAH-0gphSOzap4CcBw",
    authDomain: "bandbeat-916b5.firebaseapp.com",
    projectId: "bandbeat-916b5",
    storageBucket: "bandbeat-916b5.appspot.com",
    messagingSenderId: "387506006770",
    appId: "1:387506006770:web:333fc15043320fb9a27e6b"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }