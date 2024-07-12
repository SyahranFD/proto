// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClHeRxgPXv6-l0PiPcosbhCOrdCyuh7vw",
    authDomain: "fir-proto-6064c.firebaseapp.com",
    projectId: "fir-proto-6064c",
    storageBucket: "fir-proto-6064c.appspot.com",
    messagingSenderId: "787300585830",
    appId: "1:787300585830:web:d2129663b6ab730a7b38a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {
    app,
    db
}