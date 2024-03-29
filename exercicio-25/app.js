/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]
const indexDoMes = months.indexOf('Fevereiro')

console.log(indexDoMes)

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/
const present = new Date()

console.log(present)
/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
console.log(present.getFullYear())
/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
const passado = new Date('april 05 2023 18:50:00')
console.log(passado)
/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/
console.log(passado.getHours())
/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/
const futuro = new Date('may 05 2023 08:00:00')

console.log(futuro)
/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
const diference = futuro.getTime() - passado.getTime()

const secondes = Math.round(diference / 1000 )

// console.log(secondes)

const minutes = Math.round(secondes / 60)

// console.log(minutes)

const hours = Math.round(minutes / 60)

// console.log(hours)

const day = Math.round(hours / 24)

console.log(day)
/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
