import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwS1HQphj-SFw-L17LVwO4ApfMVHLSZyk",
  authDomain: "finance-tracker-app-rec.firebaseapp.com",
  projectId: "finance-tracker-app-rec",
  storageBucket: "finance-tracker-app-rec.appspot.com",
  messagingSenderId: "236301656642",
  appId: "1:236301656642:web:777f4d565280360a7703db",
  measurementId: "G-Q1DLCRF06D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };