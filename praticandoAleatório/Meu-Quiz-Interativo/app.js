const form = document.querySelector('.quiz-form')
const button = document.querySelector('.result')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupPontuação = document.querySelector('.pontuação')
const tituloDoPopup = document.querySelector('.erro')
const buttonGabarito = document.querySelector('.gabarito')
const popupGabarito = document.querySelector('.popup-wrapper-gabarito')
const buttonFinalGabarito = document.querySelector('.button-final-gabarito')

const paragraph = document.createElement('p')

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block'
})

popupWrapper.addEventListener('click', event => {
    const classesDoPopup = event.target.classList[0]
    const classNames = ['popup-close','popup-wrapper']
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
            popupPontuação.insertAdjacentElement('afterend',paragraph)
            paragraph.textContent = `Parabéns 😃👏🏽👏🏽`
           return 
        }
    })

    let counter = 0 

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        popupPontuação.textContent = `${counter++}%`  

    }, 10)
      
})
buttonGabarito.addEventListener('click',() => {
    popupGabarito.style.display = "block"

} )

buttonFinalGabarito.addEventListener('click',() => {
    popupGabarito.style.display = "none"
    popupWrapper.style.display = "none"

    scrollTo({
        top: 0,
        lef: 0,
        behavior: 'smooth'
    })
})

popupGabarito.addEventListener('click', event => {
    const classListDoDomToken = event.target.classList[0]
    const classNamess = ['popup-close-gabarito','popup-wrapper-gabarito']
    const testeDosPopupsGabarito = classNamess.some(className => className === classListDoDomToken)

    if(testeDosPopupsGabarito){
        popupGabarito.style.display = "none"
        popupWrapper.style.display = "none"
    }
})