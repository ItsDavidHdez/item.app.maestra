import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAYC3jWPCn04BV3KWMQGEGRS58DF08AQZ8",
  authDomain: "fir-native-1c1ea.firebaseapp.com",
  databaseURL: "https://fir-native-1c1ea.firebaseio.com",
  projectId: "fir-native-1c1ea",
  storageBucket: "fir-native-1c1ea.appspot.com",
  messagingSenderId: "216870717888",
  appId: "1:216870717888:web:c430623600c4c4fb8e2025",
  measurementId: "G-Y6TY3N8FNR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
