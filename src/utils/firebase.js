import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmIwNI_p8qBmY5wqjJ56iysyEax6LaVfc",
    authDomain: "beebeebarry-aff8a.firebaseapp.com",
    projectId: "beebeebarry-aff8a",
    storageBucket: "beebeebarry-aff8a.appspot.com",
    messagingSenderId: "310959964646",
    appId: "1:310959964646:web:efeb3a793be616204e1627",
    measurementId: "G-5YDYK7JKNS"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
