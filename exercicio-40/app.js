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

const getFormattedDate = createdAt =>  new Intl
  .DateTimeFormat('pt-BR',{ dateStyle: 'short', timeStyle: 'short'})
  .format(createdAt.toDate()) 

const sanitize = string => DOMPurify.sanitize(string)

const renderGamer = docChange => {
  const [id, { title, developedBy, createdAt }] = [docChange.doc.id, docChange.doc.data(),] //Um destruoct de array esta sendo feito junto com um destruoct de objeto.

    const liGame = document.createElement("li");
    liGame.setAttribute("data-id", id);
    liGame.setAttribute("class", "my-4");

    const h5 = document.createElement("h5");
    h5.textContent = sanitize(title);

    const ul = document.createElement("ul");

    const liDevelopedBy = document.createElement("li");
    liDevelopedBy.textContent = `Desenvolvido por ${sanitize(developedBy)}`;

    if (createdAt) {
      const liDate = document.createElement("li");
      liDate.textContent = `Adcionado no banco em ${getFormattedDate(
        createdAt
      )}`;
      ul.append(liDate);
    }

    const button = document.createElement("li");
    button.textContent = "Remover";
    button.setAttribute("data-remove", id);
    button.setAttribute("class", "btn btn-danger btn-sm");

    ul.append(liDevelopedBy);
    liGame.append(h5, ul, button);

    gamesList.append(liGame);
}

const renderGamesList = snapshot => {
  if (snapshot.metadata.hasPendingWrites){
    return
  }
  snapshot.docChanges().forEach((docChange) => {
    if (docChange.type === "removed") {
      const liGame = document.querySelector(`[data-id="${docChange.doc.id}"]`)
      liGame.remove()
      return
    }
    
    renderGamer(docChange)
    
  });
}


const to = promise => promise
  .then(result => [null, result])
  .catch(error => [error])


const addGame = async event => {
  event.preventDefault()
  
  const [error, doc] = await to(addDoc(collectionGames, {
    title: sanitize(event.target.title.value),
    developedBy: sanitize(event.target.developer.value),
    createdAt: serverTimestamp()
  }))

  if(error) {
    return log(error)
  }

  log('Document criado com ID', doc.id)
  event.target.reset()
  event.target.title.focus()

}

const deleteGame = async event => {
  const idRemoveButton = event.target.dataset.remove
  
  if(!idRemoveButton) {
    return
  }      

  const [ error ] = await to(deleteDoc(doc(db, 'games',idRemoveButton)))

  if(error) {
    return log(error)
  }
  
  log('Game removido')
  
}

const handleSnapShotError = e => log(e)

const unsubscribe = onSnapshot(collectionGames, renderGamesList, handleSnapShotError)
gamesList.addEventListener('click', deleteGame)
formAddGame.addEventListener('submit', addGame)
buttonUnsub.addEventListener('click', unsubscribe)
/*
  05

  - Refatore o código da última aula.

  Algumas dicas do que você pode implementar:
    - Funções de responsabilidade única;
    - Usar async/await no lugar de promises;
    - Remover a mutação de valores dentro do reduce.
*/
