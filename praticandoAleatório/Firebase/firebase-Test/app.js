import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// import firebase from './src/firebaseConnection';


export default function App() {
//   const [nome, setNome] = useState('Aguardando...')

    
//     useEffect(() => {

//       async function dados() {
//           await firebase.database()
//           .ref('nome')
//           .on('value', (snapshot) => {
//             setNome(snapshot.val());
//           // console.log(result)
//         });
//       }
//       dados()

//     }, []);

    return ( 
      <View style={{marginTop: 25}}>
        <Text style={{fontSize: 25}}>Olá {nome}</Text>
      </View>
  )
}