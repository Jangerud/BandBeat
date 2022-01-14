import firebase from 'firebase/app'
import 'firebase/firestore'

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

  export { projectFirestore }