const form = document.querySelector('.quiz-form')

let alternativesCorrects = ['D', 'D', 'D', 'D']

form.addEventListener('submit', event => {
    event.preventDefault()
    const getUserAnswers = alternativesCorrects.map((_, index) => {
        return form[`inputQuestion${index + 1}`].value
    }) 



    console.log(getUserAnswers)
    
})