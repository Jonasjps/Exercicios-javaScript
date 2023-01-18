const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classClickedOfElement = event.target.classList[0]
    const ClassNames = ['popup-close','popup-wrapper','popup-link']
    const condiçãoDoPopup = ClassNames.some(className => 
         className === classClickedOfElement) 

    if(condiçãoDoPopup){
        popup.style.display = 'none'
    }
})