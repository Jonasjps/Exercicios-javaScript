/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function Numeros (valor1 = 0, valor2 = 0) {
  return valor1 * valor2
}
// console.log(Numeros(2,10))



/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
const DivisãoDeDoisNumeros = function (n1, n2) {
  return n1 / n2
}
// console.log(DivisãoDeDoisNumeros(100, 4))


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

const string = function (resultado = 'Essa frase só vai aparecer se o código não funcionar'){
  console.log(resultado)
}
for (let d = 0; d < 7; d++){
// string(`Esta é a ${d + 1}ª vez que essa string é exibida.`)
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
let novoArray = []
const NovoArrayToUpperCase = function (array = []) {
  for (let c = 0; c < array.length; c++) {
    novoArray.push(array[c].toUpperCase())
  }
  return novoArray
}
// string(NovoArrayToUpperCase(millennialWords))
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
let totalPsitivos = 0
let totalNegativos = 0 

const positivo = function (numero = 0) {
  return numero >= 1
} 
for (let d = 0; d < randomNumbers.length; d++) {
 const NumerosPositivos = positivo(randomNumbers[d]) 

  if (NumerosPositivos) {
    totalPsitivos++
  }else {
    totalNegativos++
  }
}
const totalDeNumeros = randomNumbers.length
// console.log(`O array "randomNumbers" possui ${totalDeNumeros} números, sendo ${totalPsitivos} positivos e ${totalNegativos} negativos.`)
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
const getOddNumbers = function (numeros = []) {
let impares = []
for (let h = 0; h < numeros.length; h++) {
  const numerosImpares = numeros[h] % 2 !== 0
   
  if (numerosImpares) {
  impares.push(numeros[h])
}  
}
return impares
}
// console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))
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
  function () { return 'Ocidentais.' }
]
let frase = ''
for (let m = 0; m < functions.length; m++) {
  const todasAsfunções = `${functions[m]()} `
  frase += todasAsfunções
}
console.log(frase)