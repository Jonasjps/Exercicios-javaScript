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
  console.log('CallBack do Snapshot foi executado.')

  if (!querySnapshot.metadata.hasPendingWrites){
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const {title, developedBy, createdAt} = doc.data()

      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>
  
        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adcionado no banco em ${createdAt.toDate()} </li>
        </ul>
  
        <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
      </li>`
        
      return acc
    }, '')
    
    gamesList.innerHTML = gamesLis
    console.log('Manipulação de DOM Executada. ')

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



