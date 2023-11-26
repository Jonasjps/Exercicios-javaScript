const quizForm = document.querySelector('.quiz-form')
const finalResultScore = document.querySelector('.result-container-score')

let score = 0

const correctAnswers = ['B', 'C', 'B', 'D']

const getUserAnswers = () => {
    const userAnswers = correctAnswers.map((_, index) => 
        quizForm[`inputQuestion${index + 1}`].value)
    
    return userAnswers
}

const finishingScore = () => {
    score = 0
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index)=>  {
        const checkingUserAnswers = userAnswer === correctAnswers[index]

        if(checkingUserAnswers) {
            score += 25
        }
    })
}

const showUserScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    finalResultScore.classList.remove('d-none')

}

const animateUserScore = () => {
    let counter = 0 
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        finalResultScore.querySelector('span').textContent = `${counter++}%`    
    }, 10)

}

quizForm.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    finishingScore()
    calculateUserScore(userAnswers)
    showUserScore()
    animateUserScore()
    
})