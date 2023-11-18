const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAlternatives = ['D','D','D','D']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAlternatives[index]) {
            score += 25
        }

        scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
        finalResult.querySelector('span').textContent = `${score}%`
        finalResult.classList.remove('d-none')
        
    })

    console.log(score)
})