import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuaF1xYaxBv_eOs2GVHHOz5eahnyOWyRs",
  authDomain: "clone-9c169.firebaseapp.com",
  databaseURL: "https://clone-9c169.firebaseio.com",
  projectId: "clone-9c169",
  storageBucket: "clone-9c169.appspot.com",
  messagingSenderId: "502392480592",
  appId: "1:502392480592:web:ac4a9d97bd3080d3288255",
  measurementId: "G-PBMX233TMM"

});

const auth = firebase.auth();

export  { auth };