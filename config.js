import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCR8a_0AHlAJB9HJLenoevQmjdkZfbO-EI",
    authDomain: "barter-98327.firebaseapp.com",
    databaseURL: "https://barter-98327.firebaseio.com",
    projectId: "barter-98327",
    storageBucket: "barter-98327.appspot.com",
    messagingSenderId: "396408295625",
    appId: "1:396408295625:web:a61e054f5e26a692c3bd18",
    measurementId: "G-XKGE48ME0R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();