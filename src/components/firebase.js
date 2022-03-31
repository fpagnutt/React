import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {

  apiKey: "AIzaSyD5TRQliOsRYQJkr1HUV2oJ_-vVTqs3p2I",

  authDomain: "react-fpagnutt.firebaseapp.com",

  projectId: "react-fpagnutt",

  storageBucket: "react-fpagnutt.appspot.com",

  messagingSenderId: "892047436953",

  appId: "1:892047436953:web:0c158ffe3191ad23d25c08"

};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);