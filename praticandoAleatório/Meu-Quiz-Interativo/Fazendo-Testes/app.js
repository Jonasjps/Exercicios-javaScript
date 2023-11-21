const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['D', 'D', 'D', 'D']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []
    correctAnswers.forEach((_, index) => {
        userAnswers.push(quizForm[`inputQuestion${index + 1}`].value)
    })
    // for(let i = 0; i < correctAnswers.length; i++) {
    //     console.log(quizForm[`inputQuestion${i + 1}`].value)
    // }
    // const userAnswers = [
    //     quizForm.inputQuestion1.value,
    //     quizForm.inputQuestion2.value,
    //     quizForm.inputQuestion3.value,
    //     quizForm.inputQuestion4.value,
    // ]
    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
}

const showUserScore = () => {
    scrollTo(0,0)    
    finalResult.classList.remove('d-none')
}

const calculeteUserScore = () => {
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
    showUserScore()
    calculeteUserScore()
})