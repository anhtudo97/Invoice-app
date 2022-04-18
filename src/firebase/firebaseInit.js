import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQEFAb9DNEnAxDhayhpBGDezG-kircMuU",
  authDomain: "vue-invoice-app-5c95a.firebaseapp.com",
  projectId: "vue-invoice-app-5c95a",
  storageBucket: "vue-invoice-app-5c95a.appspot.com",
  messagingSenderId: "533151279490",
  appId: "1:533151279490:web:e95611d57b75bb6095c79b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
