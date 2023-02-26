const form = document.querySelector('.quiz-form')
const button = document.querySelector('.result')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupPontuação = document.querySelector('.pontuação')
const tituloDoPopup = document.querySelector('.erro')
const buttonGabarito = document.querySelector('.gabarito')
const popupGabarito = document.querySelector('.popup-wrapper-gabarito')
const buttonFinalGabarito = document.querySelector('.button-final-gabarito')
const FinalGabarito = document.querySelector('.final-gabarito')

const paragraph = document.createElement('p')


const alternativasCorrects = ['C', 'C' ,'C' ,'B']

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
    paragraph.setAttribute('class', 'verde')
    paragraph.textContent = `Parabéns 😃👏🏽👏🏽`
}

const icrementandoPontuação = (testandoRespostas) => {
    if(testandoRespostas) {
        score += 25  
    }
}

const zeroPontuação = () => {
    const scoreIgualAzero = score === 0

    if(scoreIgualAzero){
        popupPontuação.insertAdjacentElement('afterend',paragraph)
        paragraph.setAttribute('class', 'vermelho')
        paragraph.textContent = 'Infelismente voçê não acertou nenhuma alternativa, tente novamente. =( '
    }
}

const pontuaçãoIntermediaria = () => {
    
    const scoreMaiorQueZeroEMenorQueSemPontos = score > 0 && score < 100 
    
    if(scoreMaiorQueZeroEMenorQueSemPontos) {
        popupPontuação.insertAdjacentElement('afterend',paragraph)
        paragraph.setAttribute('class', 'laranja')
        paragraph.textContent = 'Voçê está indo bem, mas pode se esforçar melhor na proxima! '
        
    }

}

const pontuaçãoIgualAsemPontos = () => {
    const scoreIgualAsemPontos = score === 100
    if(scoreIgualAsemPontos){
        insertParagraph()  
    }
}

const getSoreTela = alternativas => {
    score = 0
    
    alternativas.forEach((alternativa,index) => {

        const testandoRespostas = alternativa === alternativasCorrects[index] 
       
        icrementandoPontuação(testandoRespostas)
        zeroPontuação()
        pontuaçãoIntermediaria()
        pontuaçãoIgualAsemPontos()
        
    })
   
    popupPontuação.textContent = `${score}%`
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

FinalGabarito.addEventListener('click', () => {
    popupGabarito.style.display = "none"
    popupWrapper.style.display = "none"

    RolandoAtela()
})

buttonFinalGabarito.addEventListener('click',() => {
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
const grupDeFuncDoListener =  event => {
    event.preventDefault()
    
    const alternativas = respostaDoUsuario()

    getSoreTela(alternativas)
    ShowScore()
      
}

form.addEventListener('submit',grupDeFuncDoListener)