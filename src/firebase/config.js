import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// //Base de datos de respaldo
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAsA6nRjAqAuW61c5Q6qDLzpUhel-a3r7U",
//   authDomain: "friche-admin-app-786e5.firebaseapp.com",
//   projectId: "friche-admin-app-786e5",
//   storageBucket: "friche-admin-app-786e5.appspot.com",
//   messagingSenderId: "801001134809",
//   appId: "1:801001134809:web:72dccfe0341200bd5d7cc8"
// };

// Base de datos
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfgr0S-cvlHzTEl1HzygdnW4pv1HE467U",
  authDomain: "solicitudes-ciudadanas-aca.firebaseapp.com",
  projectId: "solicitudes-ciudadanas-aca",
  storageBucket: "solicitudes-ciudadanas-aca.appspot.com",
  messagingSenderId: "260182803737",
  appId: "1:260182803737:web:5eb7ef55a150a1523eb188",
  measurementId: "G-W2M9M5S37W",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore();
