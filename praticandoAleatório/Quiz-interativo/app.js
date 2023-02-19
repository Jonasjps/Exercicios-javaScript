const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')


const alternativasCorrect = ['D', 'D', 'D', 'D']

form.addEventListener('submit', event => {
   event.preventDefault() 
   
   let score = 0

   const alternativas = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]
   alternativas.forEach((alternativa,index) => {
      if(alternativa === alternativasCorrect[index]) {
         score += 25
      }
   })
   finalResult.classList.remove('d-none')

   scrollTo(0,0)

   let counter = 0 

   const timer = setInterval(() => {
     if(counter === score) {
      clearInterval(timer)
     }
      finalResult.querySelector('span').textContent = `${counter}%`
      counter++

   }, 10)

   
})