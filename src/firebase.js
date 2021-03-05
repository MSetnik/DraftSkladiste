import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM9u0lYky3-Wu-S3IZl9ZhlUle6wjnqrE",
  authDomain: "draftskladiste.firebaseapp.com",
  databaseURL: "https://draftskladiste-default-rtdb.firebaseio.com",
  projectId: "draftskladiste",
  storageBucket: "draftskladiste.appspot.com",
  messagingSenderId: "349795576525",
  appId: "1:349795576525:web:67dff7daa930d9ba63d784",
  measurementId: "G-83Q8G70JCC",
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
