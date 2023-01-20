const button = document.querySelector('button')
const quadrado = document.querySelector('.cor')
const verde = document.querySelector('.verde')

button.addEventListener('click', () => {
 quadrado.style.background = 'yellow'
})

verde.addEventListener('click',() => {
    quadrado.style.background = 'green'
})