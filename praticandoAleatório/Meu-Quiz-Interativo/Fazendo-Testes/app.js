const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['D', 'D', 'D', 'D']

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

    const userAnswers = getUserAnswers()

    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAnswers[index]) {
            score += 25
        }
    })

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


    console.log(score)
})