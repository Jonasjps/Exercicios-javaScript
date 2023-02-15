const form = document.querySelector('.quiz-form')

const trueQuestions = ['B','B','B','B']

form.addEventListener('submit', event => {
 event.preventDefault()

 let questions = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
 ] 
 console.log(questions)
 
})