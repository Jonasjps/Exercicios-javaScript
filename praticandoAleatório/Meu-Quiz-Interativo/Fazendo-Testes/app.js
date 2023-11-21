const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAlternatives = ['D','D','D','D']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []
    for(let i = 0; i < correctAlternatives.length; i ++) {
        userAnswers.push(correctAnshwers[i])
    }
    // const userAnswers = [
    //     form.inputQuestion1.value,
    //     form.inputQuestion2.value,
    //     form.inputQuestion3.value,
    //     form.inputQuestion4.value,
    // ]
    return console.log(userAnswers)
}

calculeteUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index)=> {
        if(userAnswer === correctAlternatives[index]) {
            score += 25
        }
    })
}
const showContainerResult = () => {
    scrollTo(0,0)
    finalResult.classList.remove('d-none')
}

const showAnimationScore = () => {
    let counter = 0
    
    const time = setInterval(() => {
        if(counter === score) {
            clearInterval(time)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    },10)

}

form.addEventListener('submit', event => {
    event.preventDefault() 
    
    const userAnswers = getUserAnswers() 

    calculeteUserScore(userAnswers)
    showContainerResult()
    showAnimationScore()
})