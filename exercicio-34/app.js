/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/
const inverted = value => {
  return value
    .split('')
    .reverse()
    .join('')
}

const reverseString = (str) => {
  let newString = ''

  for(let i = str.length -1; i >= 0; i-- ) {
    newString += str[i]
  }

  return newString
}
let name = 'Maria'
name = name.length -1
console.log(name.length -1)

console.log(reverseString('12345'))
console.log(inverted('Jonas'))
/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber = false

const checkingNumber = number => number === 15 
? foundNumber = true 
: foundNumber

numbers.forEach(checkingNumber)

console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
