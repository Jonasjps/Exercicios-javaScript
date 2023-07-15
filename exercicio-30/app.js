/*
01
- Usando promises, faça um request para este endpoint:
  https://jsonplaceholder.typicode.com/users
- Se o request estiver ok, exiba os objetos no console;
- Se o request não estiver ok, exiba no console "Não foi possível obter os 
  dados dos usuários."
*/
const getUsers = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest() 
  
  request.addEventListener('readystatechange', () => {
    const isResquestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if(isResquestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if(isRequestNotOk) {
      reject('Não foi possível obter os dados dos usuários.')
    }
  })
  request.open('GET', url)
  request.send()
}) 

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(console.log)
  .catch(console.log)
/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/
const messageOperetion = (number1, operetor, number2, operetion) =>
   `Resultado da operação: ${number1} ${operetor} ${number2} = ${operetion}.`

const calculator = operetor => (number1, number2) => {
  const operetions = {
    '+': messageOperetion(number1,operetor, number2, number1 + number2) ,
    '-': messageOperetion(number1, operetor, number2, number1 - number2),
    '/': messageOperetion(number1, operetor, number2, number1 / number2),
    '*': messageOperetion(number1, operetor, number2, number1 * number2)
  }

  return operetions[operetor] || 'Operação inválida.'
}

const sum = calculator('+')
const subtraction = calculator('-')
const multiplication = calculator('*')
const division = calculator('/')
const test = calculator('t')

console.log(sum(2, 4))
console.log(subtraction(20, 3))
console.log(division(36, 4))
console.log(multiplication(15, 6))
console.log(test(3, 5))
/*

  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
const sul = ['parana', 'santa catarina', 'rio grande do sul']
const sudeste = ['espirito santo', 'são paulo', 'rio de janeriro', 'minas gerais']
let brasil = sul.concat(sudeste)

brasil.unshift('amazonas', 'acre', 'rondônia')

console.log(brasil.shift())
console.log(brasil)
const newSul = brasil.slice(2, 5)
console.log(newSul)




/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/
const nordeste = [
  'maranhão', 
  'piaui', 
  'alagoas', 
  'sergipe', 
  'paraíba', 
  'pernambuco', 
  'rio grande do norte', 
  'ceara', 
  'bahia'
]
const newSudeste = brasil.splice(5, 8)
console.log(newSudeste)
console.log(nordeste)
brasil = brasil.concat(nordeste)
console.log(brasil)

const newBrasil = brasil.map((index, id )=> ({id: id, estado: index }))
const checkingEstadosMaisDe7Letras = newBrasil.every(estado => estado > 7)
const menssage = checkingEstadosMaisDe7Letras 
  ? 'Sim, todos os estados tem mais de 7 letras.' 
  : 'Nem todos os estados tem mais de 7 letras.'
console.log(menssage)

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/
