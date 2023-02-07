const form  = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')


const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0
    
    let questions = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    questions.forEach((question,index) => {
        if(question === correctAnswers[index]){
            score += 25
        }
    })
    scroll(0,0)
    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    },10)
    
    
    finalResult.classList.remove('d-none')

})