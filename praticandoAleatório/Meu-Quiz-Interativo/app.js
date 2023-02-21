const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupPontuação = document.querySelector('.pontuação')
const paragraph = document.createElement('p')
const tituloDoPopup = document.querySelector('.erro')

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block'
})

popupWrapper.addEventListener('click', event => {
    const classesDoPopup = event.target.classList[0]
    const classNames = ['popup-close','popup-wrapper','gabarito']
    const testandoClasses = classNames.some(className => className === classesDoPopup)
        
    if(testandoClasses){
       popupWrapper.style.display = 'none'
        
    }

})

const alternativasCorrects = ['C', 'C' ,'C' ,'B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const alternativas = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    alternativas.forEach((alternativa,index) => {
        if(alternativa === alternativasCorrects[index]) {
            score += 25        
            popupPontuação.textContent = `${score}%`  
            popupPontuação.insertAdjacentElement('afterend',paragraph)
            paragraph.textContent = `Parabéns 😃👏🏽👏🏽`
            return  
        }
        tituloDoPopup.textContent = `Tente novamente`
    })
    
})