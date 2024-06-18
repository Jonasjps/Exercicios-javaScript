import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiJMFwrQkeNC6Iw8sDbnpJFP3WNAg8-6Q",
  authDomain: "testing-firebase-a67fc.firebaseapp.com",
  projectId: "testing-firebase-a67fc",
  storageBucket: "testing-firebase-a67fc.appspot.com",
  messagingSenderId: "954304361725",
  appId: "1:954304361725:web:770e66c05543e4fb223a94",
  measurementId: "G-T3VHVYGEGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);