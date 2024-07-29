import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot } from 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDRhIoZw_J8baJGsn71ezPnH05K8PVXaxg",
    authDomain: "meuapp-7055c.firebaseapp.com",
    databaseURL: "https://meuapp-7055c-default-rtdb.firebaseio.com",
    projectId: "meuapp-7055c",
    storageBucket: "meuapp-7055c.appspot.com",
    messagingSenderId: "974131482184",
    appId: "1:974131482184:web:3db46fcb0ecfb46f20127d",
    measurementId: "G-B2YNNW5PJS",
    databaseURL: `https://DATABASE_NAME.firebaseio.com`
  };
  
  if(!firebase.apps.length) {
        //Abrir minha conexão
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app)
    }

    
  export default {getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot, database};