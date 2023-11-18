const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')


const alternativesCorrects = ['D','D','D','D']

form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === alternativesCorrects[index]) {
            finalResult.querySelector('span').textContent = `${score += 25}%`
        }
    })
    console.log(score)
})