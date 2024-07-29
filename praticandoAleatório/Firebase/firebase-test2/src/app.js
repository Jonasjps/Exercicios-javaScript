// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

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


const database = getDatabase(firebaseApp)

const log = value => console.log(value)

log(database)