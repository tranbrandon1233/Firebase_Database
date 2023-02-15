import {initializeApp} from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBV_HA_YAp2aScColV11H5Ao6QhwW59ReQ",
    authDomain: "total-media-248902.firebaseapp.com",
    projectId: "total-media-248902",
    storageBucket: "total-media-248902.appspot.com",
    messagingSenderId: "470623357471",
    appId: "1:470623357471:web:1c7f629eb42c9cd702232a",
    measurementId: "G-X6KXNQF3JS"
});

export const db = getFirestore(app);
export default db;