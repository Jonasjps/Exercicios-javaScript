const form = document.querySelector('.quiz-form')

const alternativasCorrect = ['C', 'C', 'C', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAlternativas= [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    
    userAlternativas.forEach((alternativa, index )=> {
        if(alternativa === alternativasCorrect[index]) {
            score += 25
        }
    })
    console.log(score)
})
