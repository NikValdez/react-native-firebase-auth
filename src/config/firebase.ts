// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4IrQR0-c7UUHu-FPz4XEvFCbvyq6vDoY",
  authDomain: "legal-call-fb061.firebaseapp.com",
  projectId: "legal-call-fb061",
  storageBucket: "legal-call-fb061.appspot.com",
  messagingSenderId: "844135579980",
  appId: "1:844135579980:web:24c73d07aec088fbe24fe9",
  measurementId: "G-K0PE3QTJLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
