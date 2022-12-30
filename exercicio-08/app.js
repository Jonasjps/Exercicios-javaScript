/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function Multiplicação (numeroUm = 0,  numeroDois = 0) {
  return numeroUm * numeroDois
}
// console.log(Multiplicação(15, 2)) 


/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
let Divisão = function (numeroUm = 0, numeroDois = 0) {
  return numeroUm / numeroDois
}

// console.log(Divisão(40, 4))
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
function log (value = 'Voçê precisa passar um valor como argumento dessa função!') {
  console.log(value)  
}
for (let i = 0; i < 7; i++) {
  
  const iteração = i + 1

  // log(`Esta é a ${iteração}ª vez que essa string é exibida.`)
}
/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

let newArray = [] 

let StringToUpperCase = function (array = []) {
  
  for (let c = 0; c < array.length; c++) {

    const ArrayMaisculo = array[c].toUpperCase()

    newArray.push(ArrayMaisculo)
  }
  return newArray
} 
// log(StringToUpperCase(millennialWords))
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let numberPositive = []
let numberNegativo = []

let isPositive = function (number = 0) {
  return number >= 0
}
for (let i = 0; i < randomNumbers.length; i++){
 
  const Positivo = isPositive(randomNumbers[i])
 
  if (Positivo) {
    numberPositive++
  } else {
    numberNegativo++
  }
}
// console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${numberPositive} positivos e ${numberNegativo} negativos.`)
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
let newarray = []
 
let getOddNumbers = function (number = 0 ) {
  for (let c = 0; c < number.length; c++){
    
    const negativos = number[c] % 2 === 1

    if (negativos){
      
      const NumberArray = number[c]

      newarray.push(NumberArray)
    }
  }
  return newarray
 }
// log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])) 
/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.'}
]
let Frase = ''

for (let c = 0; c < functions.length; c++ ) {

  const GrupoDeFunctions = functions[c]()

  Frase += `${GrupoDeFunctions} `
}

// console.log(Frase)