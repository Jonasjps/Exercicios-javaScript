const form = document.querySelector('.signup-form')
const p = document.querySelector('p')
const input = document.querySelector('input')

form.addEventListener('keyup', event => {
    event.preventDefault()

    const valorDoInput = event.target.value
    const regex = /^[a-zA-Z]{6,12}$/

    if(regex.test(valorDoInput)) {
        p.textContent = 'Valor valido =)'
        return
    }
    p.textContent = 'O valor inserido deve conter no minimo 6 letras =('
})