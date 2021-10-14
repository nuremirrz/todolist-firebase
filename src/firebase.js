import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwCAR6dsui2OQKBJ0-y3DgpyD4eegiIyk",
  authDomain: "last-e5d30.firebaseapp.com",
  projectId: "last-e5d30",
  storageBucket: "last-e5d30.appspot.com",
  messagingSenderId: "937564098126",
  appId: "1:937564098126:web:439a7453404a91cbf9fd1f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)
