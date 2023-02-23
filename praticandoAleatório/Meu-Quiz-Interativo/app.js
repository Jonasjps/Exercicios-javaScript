const form = document.querySelector('.quiz-form')
const button = document.querySelector('.result')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupPontuação = document.querySelector('.pontuação')
const tituloDoPopup = document.querySelector('.erro')
const buttonGabarito = document.querySelector('.gabarito')
const popupGabarito = document.querySelector('.popup-wrapper-gabarito')
const buttonFinalGabarito = document.querySelector('.button-final-gabarito')

const paragraph = document.createElement('p')

let score = 0

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

const respostaDoUsuario = ( ) => {
    let alternativas = []
   alternativasCorrects.forEach((_,index) => {
        const respostaUser = form[`inputQuestion${index + 1}`].value
        alternativas.push(respostaUser)
    })
    return alternativas    
}

const insertParagraph = () => {
    popupPontuação.insertAdjacentElement('afterend',paragraph)
    paragraph.textContent = `Parabéns 😃👏🏽👏🏽`
}

const getSoreTela = (alternativas) => {
    alternativas.forEach((alternativa,index) => {
        const testandoRespostas = alternativa === alternativasCorrects[index] 
        if(testandoRespostas) {
            score += 25        
            insertParagraph()
           return
        }
       
    })
}

const ShowScore = () => {
    let counter = 0 

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        popupPontuação.textContent = `${counter++}%`  

    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const alternativas = respostaDoUsuario()

    getSoreTela(alternativas)
    ShowScore()
      
})

buttonGabarito.addEventListener('click',() => {
    popupGabarito.style.display = "block"

} )

const RolandoAtela = () => {
    scrollTo({
        top: 0,
        lef: 0,
        behavior: 'smooth'
    })
}

buttonFinalGabarito.addEventListener('click',() => {
    popupGabarito.style.display = "none"
    popupWrapper.style.display = "none"

    RolandoAtela()
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