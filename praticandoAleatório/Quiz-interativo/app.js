const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const trueQuestions = ['D', 'D', 'D', 'D']

let score = 0

const ObtendoRespostaDoUsuario = () => {
   const questions = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]
   return questions
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
      finalResult.querySelector('span').textContent = `${counter++}`
   }, 10)
}

form.addEventListener('submit', event => {
   event.preventDefault()
  
   const questions = ObtendoRespostaDoUsuario()
   comparandoRespostas(questions)
   rolagem()
   animaçãoFinalResult()

})