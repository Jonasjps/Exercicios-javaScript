const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

let score = 0

const alternativasCorrect = ['D', 'D', 'D', 'D']

const getUserAnswers = () =>   alternativasCorrect.map((_, index) => 
  form[`inputQuestion${index + 1}`].value)


const zerandoPontação = () => {
   score = 0
}
const caulcularApontuação = (userAnswers) => {
   
   userAnswers.forEach((userAnswer,index) => {
      const testandoAlternativasCorrect = userAnswer === alternativasCorrect[index] 
      if(testandoAlternativasCorrect) {
         score += 25
      }
   })
}

const showPontuação = ( ) => {
   scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   })
   finalResult.classList.remove('d-none')
}

const animandoPontuação = () => {
   let counter = 0
   
   const timer = setInterval(() => {
      const stopPontuação = counter === score 
      if(stopPontuação) {
         clearInterval(timer)
      }
      finalResult.querySelector('span').textContent = `${counter++}%`
      
   }, 10)
}

const grupDeFunc = event => {
   event.preventDefault()
   
   const userAswers = getUserAnswers()
   
   zerandoPontação()
   caulcularApontuação(userAswers)
   showPontuação()
   animandoPontuação()

}

form.addEventListener('submit', grupDeFunc)