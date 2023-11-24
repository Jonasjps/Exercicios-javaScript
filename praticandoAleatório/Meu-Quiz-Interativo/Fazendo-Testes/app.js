const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAlternatives = ['D', 'A', 'C', 'B']

let score = 0

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
    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAlternatives[index]) {
            score += 25
        }
    })
}

const hideUserScore = () => {
    scrollTo(0,0)
    finalResult.classList.remove('d-none')
}

// const finishingScore = () => {
//     score = 0
// }

const animateUserScore = () => {
    let counter = 0 
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)
}


quizForm.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()
        
    calculateUserScore(userAnswers)
    hideUserScore()
    animateUserScore()

})