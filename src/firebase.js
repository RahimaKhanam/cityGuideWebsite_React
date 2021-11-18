import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDspyNNPG2hmVIraOu0vacNcqd5yx_uAlg",
  authDomain: "contact-form-1bb88.firebaseapp.com",
  projectId: "contact-form-1bb88",
  storageBucket: "contact-form-1bb88.appspot.com",
  messagingSenderId: "836990379554",
  appId: "1:836990379554:web:877eacd7ed3d2b059e0c7b"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();