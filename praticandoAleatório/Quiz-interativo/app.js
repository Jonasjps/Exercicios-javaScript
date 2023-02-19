const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const trueQuestions = ['D', 'D', 'D', 'D']

let score = 0

const ObtendoRespostaDoUsuario = () => {
   let alternativas = []
   for(let c = 0; c < trueQuestions.length; c++) {//mudar para um forEach pois é mais legivel.
      const userAlternativas = form[`inputQuestion${c + 1}`].value
      alternativas.push(userAlternativas)
   }
   // const questions = [
   //    form.inputQuestion1.value,
   //    form.inputQuestion2.value,
   //    form.inputQuestion3.value,
   //    form.inputQuestion4.value,
   // ]
   return alternativas
}

const comparandoRespostas = (questions) => {
   questions.forEach((question, index) => {
      if(question === trueQuestions[index]) {
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
      if( counter === score) {
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