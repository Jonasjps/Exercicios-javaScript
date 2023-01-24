const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
// const usernameInput = document.querySelector('#username')
// const p = document.querySelector('.feedback')

const testeUserName = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()
    
    
    const isValidUsername = testeUserName(event.target.username.value)

    if(isValidUsername) {
        feedback.textContent = 'Username valido =)'
        return
    }
   feedback.textContent = 'O username deve conter entre 6 e 12 caracteres e deve conter apenas letras.'  
    
})

form.username.addEventListener('keyup', event => {
    const isValidUsername = testeUserName(event.target.value)

    if (isValidUsername) {
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')
})






















// const isValidUsername = testeUserName(event.target.username.value)

    // if(isValidUsername) {
    //     p.textContent = 'username válido =)'
    //     return
    // }
    // p.textContent = 'O username deve conter entre 6 e 12 caracteres e deve conter apenas letras.'






// form.username.addEventListener('keyup', event => {
//     const isValidUsername = testeUserName(event.target.value)
    
//     if(isValidUsername) {
//         form.username.setAttribute('class', 'success')
//         return
//     }
//     form.username.setAttribute('class','error')
// })