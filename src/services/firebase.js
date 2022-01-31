import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOUAcD0k7KOXcaYE4-aGdzXO1tlF30A9U",
    authDomain: "learning-firebase-cc0ca.firebaseapp.com",
    projectId: "learning-firebase-cc0ca",
    storageBucket: "learning-firebase-cc0ca.appspot.com",
    messagingSenderId: "10866116690",
    appId: "1:10866116690:web:a007f08b8161043366f78b"
};

// activate firebase app
firebase.initializeApp(firebaseConfig);

// configure settings
const auth = firebase.auth();

// set up provider(s)
const provider = new firebase.auth.GoogleAuthProvider();

// set up auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export { login, logout, auth };