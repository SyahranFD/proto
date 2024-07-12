import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClHeRxgPXv6-l0PiPcosbhCOrdCyuh7vw",
    authDomain: "fir-proto-6064c.firebaseapp.com",
    projectId: "fir-proto-6064c",
    storageBucket: "fir-proto-6064c.appspot.com",
    messagingSenderId: "787300585830",
    appId: "1:787300585830:web:d2129663b6ab730a7b38a7"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };