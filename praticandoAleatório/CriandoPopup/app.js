const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})



popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    console.log(classNameOfClickedElement)
    // const ClassNames = ['popup-close','popup-wrapper','popup-link']
    // const showClosePopup =  ClassNames.some(className => 
    //     className === classNameOfClickedElement)

    // if (showClosePopup) {
    //     popup.style.display = 'none'
    // }
})