const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAlternatives = ['D', 'A', 'C', 'B']

const getUserAnswers = () => {
    const userAnswers = [
        quizForm.inputQuestion1.value,
        quizForm.inputQuestion2.value,
        quizForm.inputQuestion3.value,
        quizForm.inputQuestion4.value,
    ]
    return userAnswers
}

quizForm.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    // obetendo respota de usuario
    const userAnswers = getUserAnswers()
    
    //Calculando resposta do usuario
    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAlternatives[index]) {
            score += 25
        }
    })
    //deixando visivel a resposta do usuario
    scrollTo(0,0)

    finalResult.classList.remove('d-none')

    // animando pontuação do usuario
    let counter = 0 
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)


})