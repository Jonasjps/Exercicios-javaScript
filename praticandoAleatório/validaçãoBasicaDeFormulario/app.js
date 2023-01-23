const form = document.querySelector('.signup-form')
const p = document.createElement('p')
const input = document.querySelector('input')

form.username.addEventListener('keyup', event => {
    event.preventDefault()

    const valorDoInput = event.target.value
    const regex = /^[a-zA-Z]{6,12}$/

    if(regex.test(valorDoInput)) {
        input.insertAdjacentElement('afterend',p)
        form.username.setAttribute('class', 'verde')
        
        p.textContent = 'Nome valido. =)'
        return
    }
    input.insertAdjacentElement('afterend',p)
    form.username.setAttribute('class', 'vermelho')
 
    p.textContent = 'Insira um Nome valido de no minimo 6 letras! =('
})