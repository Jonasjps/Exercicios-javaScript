/*
01

- Crie uma função que recebe uma data por parâmetro e retorna a data na 
formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
- Não utilize a date-fns.
*/

  const nomesDaSemana = [
    'Domingo', 
    'Segunda-feira', 
    'Terça-feira', 
    'Quarta-Feira', 
    'Quinta-feira', 
    'Sexta-feira', 
    'Sabado'
  ]
  const monthOfYear = [
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

const present = new Date()

const manipulando = unit => String(unit).length === 1 ? `0${unit}`: unit

const manipulandoData = data => {
  const day = manipulando(data.getDate())
  const month = manipulando(data.getMonth() + 1)
  const year = manipulando(data.getFullYear())

  return `${day}/${month}/${year}`
}

console.log(manipulandoData(present))
/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
const manipulandoHoraEdata = data => {
  
  const hours = manipulando(data.getHours())
  const minutes = manipulando(data.getMinutes())
  const daySemana = manipulando(nomesDaSemana[data.getDay()])
  const dayMonth = manipulando(data.getDate())
  const month = manipulando(monthOfYear[data.getMonth()])
  const year = manipulando(data.getFullYear())
  
  const hoursOfMinut = `${hours}:${minutes}`

  return `${hoursOfMinut} - ${daySemana}, ${dayMonth} de ${month} de ${year}`

}

console.log(manipulandoHoraEdata(present))
/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const {id, isVerified} = user

console.log(id, isVerified)
/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const {name: nameA} = robotA
const {name: nameB} = robotB 

console.log(nameA, nameB)
/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const alfabeto = { a, b, c }

console.log(alfabeto)
/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value =>  console.log(value)

const updateSomething = ({target, property, willChange} = {}) => {
  
  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({ target, property,  willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')
const transformData = (hours, minutes, seconds) => {
  
  clockContainer.innerHTML = `
    <span>${manipulando(hours)}</span> :
    <span>${manipulando(minutes)}</span> :
    <span>${manipulando(seconds)}</span>
  `
}
const showData = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  transformData(hours, minutes, seconds)
}

const updateClock = () => {
  showData()
}

setInterval(updateClock, 1000)