// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
import { getDatase } from './src/firebaseConnection';

const log = value => console.log(value)

export default function App() {
  const [nome, setNome] = useState(log('Aguardando...'))

    
    useEffect(() => {

      async function dados() {
          await firebase.database()
          .ref('nome')
          .on('value', (snapshot) => {
            setNome(snapshot.val());
          // console.log(result)
        });
      }
      dados()

    }, []);

    return (
      log(`Olá `) 
      // <View style={{marginTop: 25}}>
      //   <Text style={{fontSize: 25}}>Olá {nome}</Text>
      // </View>
  )
}