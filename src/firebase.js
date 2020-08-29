import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyC1cwN4zQe0R6LsTFz2Ur67LcaG_zQuD_A",
        authDomain: "messenger-clone-6e1bf.firebaseapp.com",
        databaseURL: "https://messenger-clone-6e1bf.firebaseio.com",
        projectId: "messenger-clone-6e1bf",
        storageBucket: "messenger-clone-6e1bf.appspot.com",
        messagingSenderId: "231338046249",
        appId: "1:231338046249:web:2fa81e7a6a7fb4aa313d38",
        measurementId: "G-B65PDE7XP5"
    }
);

const db = firebaseApp.firestore();



export default db;
