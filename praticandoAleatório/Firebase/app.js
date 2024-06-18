import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

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

getDocs(collection(db, 'games'))
    .then(querySnapshot => {
        const gamesLis = querySnapshot.docs.reduce((acc ,doc) => {
          const {title, developerBy, creatrdAt} = doc.data()
          acc += `<li class="my-4">
            <h5>${title}</h5>

            <ul>
              <li>Desenvolvido por ${developerBy}</li>
              <li>Adicinado no banco em ${creatrdAt}</li>
            </ul>

          </li>`
            
          return acc
        }, '')

        const gamesList = document.querySelector('[data-js="games-lis"]')
        gamesList.innerHTML = gamesLis
      })
    .catch(console.log)





