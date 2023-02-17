const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const trueQuestion = ['D', 'D', 'D', 'D']

form.addEventListener('submit', event => {
   event.preventDefault()

   let score = 0

   const questions = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]

   // scrollTo(0,0)
   scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   })

   questions.forEach((question, index) => {
      if(question === trueQuestion[index]) {
         score += 25
      }
   })
   
   finalResult.classList.remove('d-none')
   
   let counter = 0

   const timer = setInterval(() => {
     
      if(counter === score) {
         clearInterval(timer)
      }

      finalResult.querySelector('span').textContent = `${counter++}%`
   
   }, 10)
})

