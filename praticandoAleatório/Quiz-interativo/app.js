const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')


const alternativasCorrect = ['D', 'D', 'D', 'D']

let score = 0

const getrespostUsers = () => {
   const alternativas = []
   alternativasCorrect.forEach((_,index) => {
      const iterando = form[`inputQuestion${index + 1}`].value
      alternativas.push(iterando)
   })
   return alternativas
}
setAttibuteRespostas = (alternativas) => {
   alternativas.forEach((alternativa,index) => {
      const testandoAlternativas = alternativa === alternativasCorrect[index]
      if(testandoAlternativas) {
         score += 25
      }
   })
}
const rolandoAtela = () => {
   scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   })
}
const animandoAtela = () => {
   let counter = 0 

   const timer = setInterval(() => {
      const comparantoPontuaçaõ = counter === score
     if(comparantoPontuaçaõ) {
      clearInterval(timer)
     }
      finalResult.querySelector('span').textContent = `${counter++}%`

   }, 10)
}
const grupFunc =   event => {
   event.preventDefault() 
  
   const alternativas =  getrespostUsers()
   setAttibuteRespostas(alternativas)
   finalResult.classList.remove('d-none')
   rolandoAtela()
   animandoAtela()

}

form.addEventListener('submit',grupFunc)