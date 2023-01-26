const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')

const testUserNameFunc = username => /^[a-zA-Z]{6,12}$/.test(username) 

form.username.addEventListener('keyup', event => {
    event.preventDefault()

    const isAvalidad = testUserNameFunc(event.target.value)
    
    if(isAvalidad) {
        feedback.textContent = 'É valido! =)'
        feedback.style.color = 'green'
        return
    }

    feedback.textContent = 'username invalo =('
    feedback.style.color = 'red'
    
})

form.username.addEventListener('keyup', event => {
    const isAvalidad = testUserNameFunc(event.target.value)

    if(isAvalidad) {
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')

      
    
})
