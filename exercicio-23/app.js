/*
  01
  
  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.

*/

const myString = '    JS      '

const stringTranformada = myString.trim()


console.log(stringTranformada)



/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const peopleCopy = people
  .map(({firstName, lastName, score}) => ({ firstName, lastName, score }))
  .sort((number1, number2) => number1.score - number2.score)

console.log(peopleCopy, people)
/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const animalsCopy = animals.filter(({length}) => length !== 4 )

animalsCopy

console.log(animalsCopy)
// debugger
/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const animalsNumbers = animals.map(({length}) => length)

console.log(animalsNumbers)

animalsNumbers

// debugger
/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]
const namesFriendsMoramPerto = friends
  .filter(({nearMe}) => nearMe)
  .map(({name}) => name)

console.log(namesFriendsMoramPerto)

namesFriendsMoramPerto

// debugger

/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const numbersImpares = number => number % 2 === 1 

const numbersCopy = numbers
  .filter(numbersImpares)
  .reduce((acc, item) => acc + item, 0) 

console.log(numbersCopy)


/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const removeChina = ({country}) => country !== 'China'

const dataCopy = data
  .filter(removeChina)
  .reduce((acc, {population}) => acc + population, 0)

console.log(dataCopy)
  

