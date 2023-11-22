const quizForm = document.querySelector('.quiz-form')
const scoreFinalResult = document.querySelector('.result-container-score')

const correctAnswers = ['D', 'D', 'D', 'D']

let score = 0

const getUserAnswers = () => {
    const userAnswers = correctAnswers.map((_, index) => {
        return quizForm[`inputQuestion${index + 1}`].value
    })
    
    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index)=> {
        const checkingAnswers = userAnswer === correctAnswers[index] 

        if(checkingAnswers) {
            score += 25
        }
    })
}

const showUserScore = () => {
    scrollTo(0,0)    
    scoreFinalResult.classList.remove('d-none')
}

const calculeteUserScore = () => {
    let counter = 0 
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        scoreFinalResult.querySelector('span').textContent = `${counter++}%`
        
    }, 10)
}

quizForm.addEventListener('submit', event => {
    event.preventDefault() 
    
    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)
    showUserScore()
    calculeteUserScore()
})