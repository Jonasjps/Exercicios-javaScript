const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAlternatives = ['D','D','D','D']

form.addEventListener('submit', event => {
    event.preventDefault() 
    // obtendo resposta do usuario.
    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    //inserindo pontuação
    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAlternatives[index]) {
            score += 25
        }
    })
    //rolando pagina
    scrollTo(0,0)

    finalResult.classList.remove('d-none')
    //animando a pontuação
    let counter = 0
    
    const time = setInterval(() => {
        if(counter === score) {
            clearInterval(time)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    },10)
})