const form  = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const TrueQuestions = ['D', 'D', 'D', 'D']

form.addEventListener('submit', event => {
   event.preventDefault()
   
   let score = 0

   const questions = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]

   questions.forEach((question, index) => {
      
      if(question === TrueQuestions[index]) {
         score += 25
      } 
      
   }) 

   
   finalResult.querySelector('span').textContent = `${score}%`
   finalResult.classList.remove('d-none')
})
