/*
  01

  Implemente abaixo uma forma de digitar menos ao exibir 
  valores no console no decorrer dessa bateria de exercícios.
*/

const log = (...value) => console.log(...value)



/*
  02

  - Descomente a invocação da função removeProp e implemente-a;
  - O output dela deve ser um array de novos objetos que não 
    contém a propriedade b, como demonstrado no comentário 
    multi-linha abaixo.
*/

const objs = [
  { a: 213, b: 965, c: 522 },
  { c: 2333, a: 1321, b: 545 },
  { b: 993, c: 345, a: 781 }
]

const propToRemove = 'b'

const removeProp = (propToRemove, objs) => 
  objs.map(({[propToRemove]:_, ...obj}) =>  obj)


// log(removeProp(propToRemove, objs)[0] === objs[0])
// log(removeProp(propToRemove, objs))

/*
[
  {
    a: 213,
    c: 522
  },
  {
    c: 2333,
    a: 1321
  },
  {
    c: 345,
    a: 781
  }
]
*/

/*
  03

  - Descomente a invocação da função getStatusCount e implemente-a;
  - O output dela deve ser um objeto que contém as quantidades de 
    ocorrências dos status, como demonstrado no comentário 
    multi-linha abaixo.
*/

 const orders = [
  { username: 'f_gazi', status: 'pending', price: 63.97 },
  { username: 'heitordp', status: 'cancelled', price: 79 },
  { username: 'a_campos', status: 'shipped', price: 97.63 },
  { username: 'rafaq', status: 'pending', price: 67 },
  { username: '_rick', status: 'shipped', price: 73.65 }
]

const getStatusCount = orders => orders.reduce((acc, { status }) => ({
  ...acc,
  [status]: (acc[status] || 0) + 1 //Computer Propeter Names
}), {})

log(getStatusCount(orders))

/*
{
  pending: 2,
  cancelled: 1,
  shipped: 2
}
*/

/*
  04

  - No código da última aula, faça com que a data na <li> que 
    mostra o momento da adição do game no banco de dados 
    tenha o formato abaixo. O conteúdo da <li> deve ficar 
    assim:
    
    "Adicionado no banco em 23/06/2021 23:57"
  
  Dica: pesquise por Intl.DateTimeFormat() constructor.
*/

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getFirestore, collection, addDoc, serverTimestamp, doc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCiJMFwrQkeNC6Iw8sDbnpJFP3WNAg8-6Q',
  authDomain: 'testing-firebase-a67fc.firebaseapp.com',
  projectId: 'testing-firebase-a67fc',
  storageBucket: 'testing-firebase-a67fc.appspot.com',
  messagingSenderId: '954304361725',
  appId: '1:954304361725:web:770e66c05543e4fb223a94',
  measurementId: 'G-T3VHVYGEGZ'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-lis"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const unsubscribe = onSnapshot(collectionGames, querySnapshot => {

  if (!querySnapshot.metadata.hasPendingWrites){
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const {title, developedBy, createdAt} = doc.data()
      const hoursLocales = new Intl.DateTimeFormat('pt-BR',
        { dateStyle: 'short', timeStyle: 'short'}).format(createdAt.toDate())

      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>
  
        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adcionado no banco em ${hoursLocales} </li>
        </ul>
  
        <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
      </li>`
        
      return acc
    }, '')
    
    gamesList.innerHTML = gamesLis

  }
})

  gamesList.addEventListener('click', event => {
    const idRemoveButton = event.target.dataset.remove

    if(idRemoveButton) {
      deleteDoc(doc(db, 'games',idRemoveButton))
        .then(() => console.log('Game removido'))
        .catch(console.log)
    }

  })


formAddGame.addEventListener('submit', event => {
  event.preventDefault()

  addDoc(collectionGames, {
    title:event.target.title.value,
    developedBy: event.target.developer.value,
    createdAt: serverTimestamp()
  })
  .then(doc => console.log('Document criado com ID', doc.id))
  .catch(console.log())
})

buttonUnsub.addEventListener('click', unsubscribe)

/*
  05

  - Refatore o código da última aula.

  Algumas dicas do que você pode implementar:
    - Funções de responsabilidade única;
    - Usar async/await no lugar de promises;
    - Remover a mutação de valores dentro do reduce.
*/
