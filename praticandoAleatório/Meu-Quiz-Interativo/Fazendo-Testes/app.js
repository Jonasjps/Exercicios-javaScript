const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

let score = 0

const correctAnswers = ['B', 'C', 'B', 'D']

const getUserAnswers = () => {
    const userAnswers = [
        quizForm.inputQuestion1.value,
        quizForm.inputQuestion2.value,
        quizForm.inputQuestion3.value,
        quizForm.inputQuestion4.value,
    ]

    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index)=>  {
        if(userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
}

quizForm.addEventListener('submit', event => {
    event.preventDefault()
    

    const userAnswers = getUserAnswers()
    calculateUserScore(userAnswers)
    scrollTo(0,0)
    finalResult.classList.remove('d-none')
    
    let counter = 0 
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++    
    }, 10)
    
})