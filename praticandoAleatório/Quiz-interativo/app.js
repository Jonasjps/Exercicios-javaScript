const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const trueQuestions = ['D', 'D', 'D', 'D']

let score = 0

const ObtendoRespostaDoUsuario = () => {
   let alternativas = []
  
  trueQuestions.forEach((_,index)=> {
      const obetendoAlternativas = form[`inputQuestion${index + 1}`].value
      alternativas.push(obetendoAlternativas)
  })
   return alternativas
}

const comparandoRespostas = (questions) => {
   questions.forEach((question, index) => {
      const testandoRespostas = question === trueQuestions[index]

      if(testandoRespostas) {
         score += 25
      }
   }) 
}

const rolagem = () => {
   scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   })
} 

const animaçãoFinalResult = ( ) => {
   finalResult.classList.remove('d-none')
   let counter  = 0
   const timer = setInterval(() => {
      const comparandoContadores = counter === score 
      if( comparandoContadores) {
         clearInterval(timer)
      }

      finalResult.querySelector('span').textContent = `${counter++}%`
   }, 10)
}

const grunpFuncEventListener = event => {
   event.preventDefault()
   const questions = ObtendoRespostaDoUsuario()
   comparandoRespostas(questions)
   rolagem()
   animaçãoFinalResult()
}

form.addEventListener('submit', grunpFuncEventListener)