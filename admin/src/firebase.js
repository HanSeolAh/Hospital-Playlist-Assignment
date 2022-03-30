import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7toWhu76fjjPArPS1n-gjU56iTPFgyAE",
  authDomain: "netflix-d483a.firebaseapp.com",
  projectId: "netflix-d483a",
  storageBucket: "netflix-d483a.appspot.com",
  messagingSenderId: "1075216996825",
  appId: "1:1075216996825:web:1df263cc689ab876c461c8",
  measurementId: "G-RWPMMEH584"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
