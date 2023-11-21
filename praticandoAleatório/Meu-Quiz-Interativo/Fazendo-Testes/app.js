const quizForm = document.querySelector('.quiz-form')

const correctAnswers = ['D', 'D', 'D', 'D']

quizForm.addEventListener('submit', event => {
    event.preventDefault() 
    
    const userAnswers = [
        quizForm.inputQuestion1.value,
        quizForm.inputQuestion2.value,
        quizForm.inputQuestion3.value,
        quizForm.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAnswers[index]) {
            console.log('acertou')

        }
    })
    
})