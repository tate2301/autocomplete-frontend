import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import "firebase/storage"


let firebaseConfig = {
    apiKey: "AIzaSyDRyeDRbNVMFm9hwk6x8uUVbDv2j5rcf6o",
    authDomain: "duma-e3c09.firebaseapp.com",
    projectId: "duma-e3c09",
    storageBucket: "duma-e3c09.appspot.com",
    messagingSenderId: "941619439221",
    appId: "1:941619439221:web:46fe7d9e05e531b41c7a3c",
    measurementId: "G-5HW802F62Z"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const firestoreFieldValue = firebase.firestore.FieldValue
export const authBase = firebase.auth