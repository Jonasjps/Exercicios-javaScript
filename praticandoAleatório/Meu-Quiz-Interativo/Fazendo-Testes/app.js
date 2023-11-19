const form = document.querySelector('.quiz-form')

const correctAlternatives = ['D','D','D','D']

form.addEventListener('submit', event => {
    event.preventDefault() 
    // obtendo resposta do usuario.
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    console.log(userAnswers)
})