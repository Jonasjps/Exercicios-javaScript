// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getDatabase } from 'firebase/database'

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyDRhIoZw_J8baJGsn71ezPnH05K8PVXaxg",
//   authDomain: "meuapp-7055c.firebaseapp.com",
//   databaseURL: "https://meuapp-7055c-default-rtdb.firebaseio.com",
//   projectId: "meuapp-7055c",
//   storageBucket: "meuapp-7055c.appspot.com",
//   messagingSenderId: "974131482184",
//   appId: "1:974131482184:web:3db46fcb0ecfb46f20127d",
//   measurementId: "G-B2YNNW5PJS"
// });

// const log = value => console.log(value)

// const database = getDatabase(firebaseApp)


// log(database)
// debugger

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyDRhIoZw_J8baJGsn71ezPnH05K8PVXaxg",
    authDomain: "meuapp-7055c.firebaseapp.com",
    databaseURL: "https://meuapp-7055c-default-rtdb.firebaseio.com",
    projectId: "meuapp-7055c",
    storageBucket: "meuapp-7055c.appspot.com",
    messagingSenderId: "974131482184",
    appId: "1:974131482184:web:3db46fcb0ecfb46f20127d",
    measurementId: "G-B2YNNW5PJS"
 });
const db = getFirestore(firebaseApp);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

loadCity('Brasília')
