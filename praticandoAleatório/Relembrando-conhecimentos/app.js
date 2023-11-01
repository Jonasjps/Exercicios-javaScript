// O metódo some executa uma função de callback, retornando assim assim um
// boolean indicando se a operação é true ou false. como no exemplo abaixo:

const numbers = [12, 13, 3, 1, 6]

const result = numbers.some(item => item > 15)
console.log(result)

/**
 MAP: O metódo map é um método de array onde ele cria um novo array, com a
  mesma quantidade de itens porem com os itens alterados. veja o exemplo abaixo:
 */


let dobleNumbers = [2, 4, 10, 23, 45]

const resultNumbers = dobleNumbers.map(item => item * 5)

console.log(dobleNumbers, resultNumbers)