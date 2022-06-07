import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "beebeebarry-aff8a",
    storageBucket: "beebeebarry-aff8a.appspot.com",
    messagingSenderId: "310959964646",
    appId: "1:310959964646:web:efeb3a793be616204e1627",
    measurementId: "G-5YDYK7JKNS"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
