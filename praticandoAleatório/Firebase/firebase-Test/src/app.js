// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, onValue } from 'firebase/database';

// const log = value => console.log(value)

// const firebaseApp = initializeApp({ 
//   apiKey: "AIzaSyDRhIoZw_J8baJGsn71ezPnH05K8PVXaxg",
//   authDomain: "meuapp-7055c.firebaseapp.com",
//   databaseURL: "https://meuapp-7055c-default-rtdb.firebaseio.com",
//   projectId: "meuapp-7055c",
//   storageBucket: "meuapp-7055c.appspot.com",
//   messagingSenderId: "974131482184",
//   appId: "1:974131482184:web:3db46fcb0ecfb46f20127d",
//   measurementId: "G-B2YNNW5PJS"
//  });

// const db = getDatabase(firebaseApp) 





// async function dados() {
//     await getDatabase()
//     .ref('nome')
//     .onValue('value', (snapshot) => {
//       setNome(snapshot.val());
//     // console.log(result)
//   });
// }
// dados()

// src/index.js
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



  

   
