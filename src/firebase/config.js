//AQUI CONFIGURAMOS FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB27ldiXHafC71I8ryzPpgIPWylLNrtlvE",
    authDomain: "befitnessuy-62ec4.firebaseapp.com",
    projectId: "befitnessuy-62ec4",
    storageBucket: "befitnessuy-62ec4.appspot.com",
    messagingSenderId: "121579897479",
    appId: "1:121579897479:web:cfc95e696cf96820ebae22"
};

// Inicializamos el servicio de firebase
const app = initializeApp(firebaseConfig);

//inicializamos la base de datos
export const db = getFirestore(app)