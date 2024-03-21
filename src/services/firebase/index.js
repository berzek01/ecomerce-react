import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAinHwvOEbOSe-tFS7AqHrFFH40FvvebS8",
    authDomain: "react-coderhouse-737d7.firebaseapp.com",
    projectId: "react-coderhouse-737d7",
    storageBucket: "react-coderhouse-737d7.appspot.com",
    messagingSenderId: "636550246621",
    appId: "1:636550246621:web:4d830fddd71ad506abeb34"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);