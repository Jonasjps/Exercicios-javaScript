const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault()
    const username  = event.target.username.value
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAvalidad = usernameRegex.test(username)
    
    if(isAvalidad) {
        feedback.textContent = 'É valido! =)'
        return
    }

    feedback.textContent = 'Não é valido =('
    
})

form.username.addEventListener('keyup', event => {
    const username = event.target.value
    
})
