import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB94hTnyPT1XJBo-p1PFdq_oOPpoiVPmLM",
  authDomain: "herminia-react.firebaseapp.com",
  projectId: "herminia-react",
  storageBucket: "herminia-react.appspot.com",
  messagingSenderId: "608581134147",
  appId: "1:608581134147:web:735236632526ac626931f6",
  measurementId: "G-HEKQYHS1D1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
