import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

getDocs(collectionGames)
    .then(querySnapshot => {
        const gamesLis = querySnapshot.docs.reduce((acc ,doc) => {
          const {title, developedBy, createdAt} = doc.data()
          acc += `<li class="my-4">
            <h5>${title}</h5>

            <ul>
              <li>Desenvolvido por ${developedBy}</li>
              <li>Adicinado no banco em ${createdAt.toDate()}</li>
            </ul>

          </li>`
            
          return acc
        }, '')

        const gamesList = document.querySelector('[data-js="games-lis"]')
        gamesList.innerHTML = gamesLis
      })
    .catch(console.log)


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


