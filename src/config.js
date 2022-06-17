// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfgkUqPRUBp1_xa5MeRfWFWvslELsh7cM",
  authDomain: "jobsearch-46893.firebaseapp.com",
  projectId: "jobsearch-46893",
  storageBucket: "jobsearch-46893.appspot.com",
  messagingSenderId: "581106851555",
  appId: "1:581106851555:web:6b17a4750413a2f322efd6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {firebase, db}

//firebase 9.8.3  vesion
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// export default db;