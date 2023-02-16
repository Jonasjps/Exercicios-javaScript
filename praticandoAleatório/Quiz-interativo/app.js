const form = document.querySelector('.quiz-form')

const trueQuestions = ['D', 'D', 'D', 'D']

form.addEventListener('submit', event => {
   event.preventDefault()
   
   let score = 0

   const questions = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]

   questions.forEach((question, index )=> { 
      if(question === trueQuestions[index]) {
         score += 25
      }
   })
   console.log(score)
})



